(function () {
  'use strict';

  /*
   * Shared site behavior:
   * - Applies the saved light/dark preference before controls are updated.
   * - Keeps every theme button synchronized.
   * - Adds the soft page-to-page overlay for internal links only.
   */
  var root = document.documentElement;
  var body = document.body;
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var savedTheme = '';
  var ambientAudio = null;
  var audioEnabled = false;
  var audioPreferenceKey = 'rd-audio-enabled';
  var audioPositionKey = 'rd-audio-position';
  var audioSource = 'assets/audio/active-audio.flac';

  // Storage can be unavailable in privacy-restricted browser contexts.
  try { savedTheme = localStorage.getItem('rd-theme') || ''; } catch (e) {}
  if (savedTheme === 'night') body.setAttribute('data-theme', 'night');

  function updateToggle() {
    var isNight = body.getAttribute('data-theme') === 'night';
    document.querySelectorAll('[data-theme-toggle]').forEach(function (toggle) {
      toggle.setAttribute('aria-pressed', String(isNight));
      toggle.setAttribute('aria-label', isNight ? 'Switch to day mode' : 'Switch to night mode');
      toggle.setAttribute('title', isNight ? 'Day mode' : 'Night mode');
    });
    document.querySelectorAll('[data-light-src][data-dark-src]').forEach(function (image) {
      image.src = isNight ? image.getAttribute('data-dark-src') : image.getAttribute('data-light-src');
    });
  }

  function setMobileMenu(isOpen) {
    var menuButton = document.querySelector('.nav-dropdown-mobile');
    var navigation = document.getElementById('primary-nav');
    if (!menuButton || !navigation) return;
    body.classList.toggle('nav-menu-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    navigation.setAttribute('aria-hidden', String(!isOpen && window.matchMedia('(max-width: 760px)').matches));
  }

  function updateAudioToggle() {
    document.querySelectorAll('[data-audio-toggle]').forEach(function (toggle) {
      toggle.setAttribute('aria-pressed', String(audioEnabled));
      toggle.setAttribute('aria-label', audioEnabled ? 'Turn ambient audio off' : 'Turn ambient audio on');
      toggle.setAttribute('title', audioEnabled ? 'Ambient audio on' : 'Ambient audio off');
      toggle.classList.toggle('is-playing', audioEnabled);
    });
  }

  function readAudioPreference() {
    try {
      return localStorage.getItem(audioPreferenceKey) === 'true';
    } catch (e) {
      return false;
    }
  }

  function saveAudioState() {
    if (!ambientAudio) return;
    try {
      localStorage.setItem(audioPreferenceKey, String(audioEnabled));
      if (Number.isFinite(ambientAudio.currentTime)) {
        localStorage.setItem(audioPositionKey, String(ambientAudio.currentTime));
      }
    } catch (e) {}
  }

  function restoreAudioPosition() {
    if (!ambientAudio) return;
    try {
      var savedPosition = Number.parseFloat(localStorage.getItem(audioPositionKey) || '');
      if (Number.isFinite(savedPosition) && savedPosition >= 0) {
        ambientAudio.currentTime = savedPosition;
      }
    } catch (e) {}
  }

  function setAudioEnabled(isEnabled) {
    if (!ambientAudio) {
      ambientAudio = new Audio(audioSource);
      ambientAudio.loop = true;
      ambientAudio.volume = 0.32;
      ambientAudio.preload = 'auto';
      ambientAudio.addEventListener('timeupdate', saveAudioState);
      ambientAudio.addEventListener('pause', saveAudioState);
      ambientAudio.addEventListener('ended', saveAudioState);
      restoreAudioPosition();
    }

    if (!isEnabled) {
      ambientAudio.pause();
      audioEnabled = false;
      saveAudioState();
      updateAudioToggle();
      return;
    }

    ambientAudio.play().then(function () {
      audioEnabled = true;
      saveAudioState();
      updateAudioToggle();
    }).catch(function (error) {
      audioEnabled = false;
      try { localStorage.removeItem(audioPreferenceKey); } catch (e) {}
      updateAudioToggle();
      document.querySelectorAll('[data-audio-toggle]').forEach(function (toggle) {
        toggle.setAttribute('title', 'Ambient audio is not supported by this browser');
      });
      console.error('Ambient audio could not start.', error);
    });
  }

  // Event delegation keeps this file compatible with every page template.
  document.addEventListener('click', function (event) {
    var menuButton = event.target.closest('.nav-dropdown-mobile');
    if (menuButton) {
      setMobileMenu(body.classList.contains('nav-menu-open') ? false : true);
      return;
    }

    if (body.classList.contains('nav-menu-open') && event.target.closest('#primary-nav a')) {
      setMobileMenu(false);
    }

    var toggle = event.target.closest('[data-theme-toggle]');
    if (toggle) {
      var isNight = body.getAttribute('data-theme') === 'night';
      if (isNight) body.removeAttribute('data-theme');
      else body.setAttribute('data-theme', 'night');
      try { localStorage.setItem('rd-theme', isNight ? 'day' : 'night'); } catch (e) {}
      updateToggle();
      return;
    }

    var audioToggle = event.target.closest('[data-audio-toggle]');
    if (audioToggle) {
      setAudioEnabled(!audioEnabled);
      return;
    }

    var link = event.target.closest('a');
    if (!link || link.closest('.footer__legal') || prefersReducedMotion || event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === '_blank') return;

    var url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname === window.location.pathname ||
      url.hash || url.protocol !== window.location.protocol) return;

    event.preventDefault();
    root.classList.add('is-page-transitioning');
    window.setTimeout(function () { window.location.href = url.href; }, 560);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && body.classList.contains('nav-menu-open')) {
      setMobileMenu(false);
      document.querySelector('.nav-dropdown-mobile').focus();
    }
  });
  window.addEventListener('resize', function () {
    if (!window.matchMedia('(max-width: 760px)').matches) setMobileMenu(false);
    else setMobileMenu(body.classList.contains('nav-menu-open'));
  });
  window.addEventListener('pagehide', saveAudioState);

  // The layer is created once so pages do not need duplicate transition markup.
  var layer = document.createElement('div');
  layer.className = 'page-transition-layer';
  layer.setAttribute('aria-hidden', 'true');
  body.appendChild(layer);
  updateToggle();
  updateAudioToggle();
  setMobileMenu(false);
  if (readAudioPreference()) setAudioEnabled(true);
}());
