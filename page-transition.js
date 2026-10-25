(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var supportsNativeTransition = typeof document.startViewTransition === 'function';
  var transitionTimer;

  function addLayer() {
    if (document.querySelector('.page-transition-layer')) return;
    var layer = document.createElement('div');
    layer.className = 'page-transition-layer';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);
  }

  function isInternalPageLink(link, event) {
    if (!link || !link.href || event.defaultPrevented) return false;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
    if (link.target && link.target !== '_self') return false;
    if (link.hasAttribute('download')) return false;

    var url = new URL(link.href, window.location.href);
    return url.origin === window.location.origin &&
      url.pathname !== window.location.pathname &&
      !url.hash &&
      url.protocol === window.location.protocol;
  }

  function navigateWithFallback(url) {
    document.documentElement.classList.add('is-page-transitioning');
    clearTimeout(transitionTimer);
    transitionTimer = setTimeout(function () {
      window.location.href = url;
    }, reducedMotion ? 1 : 180);
  }

  function handleClick(event) {
    var link = event.target.closest('a');
    if (!isInternalPageLink(link, event) || supportsNativeTransition || reducedMotion) return;
    event.preventDefault();
    navigateWithFallback(link.href);
  }

  function init() {
    addLayer();
    document.addEventListener('click', handleClick);
    window.addEventListener('pageshow', function () {
      clearTimeout(transitionTimer);
      document.documentElement.classList.remove('is-page-transitioning');
    });
  }

  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  }
}());
