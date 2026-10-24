    /* ==========================================================================
       PORTFOLIO CONFIG — edit content here
       ========================================================================== */
    const PORTFOLIO_CONFIG = {
      email: "hello@example.com", // TODO: replace with your real email
      github: "https://github.com/rahuldas75",

      changelog: [
        { badge: "NOW",  text: "Polishing Matsi Weather's sky shaders and offline cache" },
        { badge: "LAB",  text: "Training FLUX LoRAs and refining ComfyUI workflows" },
        { badge: "PLAY", text: "Gaming, acoustic playlists and Assam exploration" }
      ],

      projects: [
        {
          title: "Matsi Weather", icon: "⛅", cats: "mobile",
          tagline: "Flutter • Android",
          desc: "Hyper-local forecasts for Guwahati & Northeast India with dynamic sky gradients and an offline-first cache.",
          tags: ["Flutter", "REST", "Offline cache"],
          bg: "linear-gradient(135deg, rgba(56,189,248,.35), rgba(2,132,199,.25))",
          link: "https://github.com/rahuldas75"
        },
        {
          title: "NLP-Driven Flask Backend", icon: "🧠", cats: "backend",
          tagline: "Python • Flask • MySQL",
          desc: "A Flask API with NLP-powered processing and a MySQL data layer, built for clear, maintainable endpoints.",
          tags: ["Python", "Flask", "MySQL"],
          bg: "linear-gradient(135deg, rgba(74,222,128,.28), rgba(23,63,50,.5))",
          link: "https://github.com/rahuldas75"
        },
        {
          title: "ComfyUI × FLUX LoRA Workflows", icon: "🎨", cats: "ai",
          tagline: "ComfyUI • FLUX / LoRA",
          desc: "Custom image-generation pipelines and LoRA fine-tunes for consistent, stylized creative output.",
          tags: ["ComfyUI", "FLUX", "LoRA"],
          bg: "linear-gradient(135deg, rgba(242,181,104,.35), rgba(124,58,237,.22))",
          link: "https://github.com/rahuldas75"
        }
      ],

      // First entry is real; the other two are placeholders — edit or delete them.
      appsList: [
        {
          title: "Matsi Weather", icon: "⛅", cats: "flutter android utility",
          tagline: "Flutter • Android",
          desc: "Simple, clean, local weather for Guwahati & Northeast India.",
          tags: ["Flutter", "Weather"],
          bg: "linear-gradient(135deg, rgba(56,189,248,.35), rgba(2,132,199,.25))",
          link: "https://github.com/rahuldas75", cta: "View on GitHub ↗"
        },
        {
          title: "Native Android Utility", icon: "🧰", cats: "android utility",
          tagline: "Kotlin • Android SDK",
          desc: "A small, battery-friendly native utility currently in the workshop.",
          tags: ["Kotlin", "Android SDK"],
          bg: "linear-gradient(135deg, rgba(74,222,128,.28), rgba(23,63,50,.5))",
          link: "apps.html", cta: "Coming soon"
        },
        {
          title: "Flutter Companion App", icon: "🌿", cats: "flutter",
          tagline: "Flutter",
          desc: "A cross-platform companion app idea taking shape.",
          tags: ["Flutter", "Dart"],
          bg: "linear-gradient(135deg, rgba(242,181,104,.35), rgba(96,124,75,.4))",
          link: "apps.html", cta: "Coming soon"
        }
      ],

      principles: [
        { icon: "🌤️", title: "Calm by default", text: "Quiet interfaces, no ad clutter, glanceable information." },
        { icon: "🔋", title: "Battery-friendly", text: "Offline-first caching and no needless background work." },
        { icon: "🤝", title: "Human & tactile", text: "Small details, motion and feedback that feel alive." }
      ],

      toolkit: [
        { group: "Mobile",      items: ["Flutter", "Kotlin", "Android SDK"] },
        { group: "Backend",     items: ["Python", "Flask", "MySQL"] },
        { group: "AI Creative", items: ["ComfyUI", "FLUX / LoRA"] },
        { group: "Workflow",    items: ["Git"] }
      ],

      timeline: [
        { year: "NOW",   text: "Building Android & Flutter apps for everyday utility." },
        { year: "FOCUS", text: "Practical AI workflows and custom LoRA training." },
        { year: "ALWAYS", text: "Gaming, good music and exploring Assam." }
      ]
    };

    /* ==========================================================================
       HELPERS
       ========================================================================== */
    const NOOP = { set innerHTML(v) {}, set textContent(v) {}, set value(v) {}, classList: { add() {}, remove() {}, toggle() {} },
      dataset: {}, style: {}, addEventListener() {}, setAttribute() {} };
    const $ = (s, r) => (r || document).querySelector(s) || NOOP;
    const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = () => window.innerWidth <= 820;

    let toastTimer;
    function showToast(msg) {
      const t = $('#toastNotification');
      t.textContent = msg;
      t.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
    }

    function copyEmailAddress() {
      const email = PORTFOLIO_CONFIG.email;
      const done = () => showToast('Email copied: ' + email);
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(done).catch(fallback);
      } else { fallback(); }
      function fallback() {
        const ta = document.createElement('textarea');
        ta.value = email;
        ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0;';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); done(); } catch (e) { showToast(email); }
        document.body.removeChild(ta);
      }
    }

    /* ==========================================================================
       RENDER: projects, apps, changelog, about
       ========================================================================== */
    function pills(list) { return list.map(t => '<span class="tech-pill">' + t + '</span>').join(''); }

    function cardHTML(item, ctaDefault) {
      const external = /^https?:/.test(item.link);
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return '' +
        '<article class="liquid-glass liquid-glass-interactive showcase-card" data-cat="' + item.cats + '">' +
          '<div class="card-graphic-banner" style="background:' + item.bg + ';">' +
            '<span style="font-size:38px;">' + item.icon + '</span>' +
            '<span class="tech-pill">' + item.tagline + '</span>' +
          '</div>' +
          '<div>' +
            '<h3 style="font-size:1.1rem;font-weight:800;color:var(--text-strong);">' + item.title + '</h3>' +
            '<p style="font-size:.84rem;color:var(--parchment);margin-top:6px;line-height:1.6;">' + item.desc + '</p>' +
          '</div>' +
          '<div class="tech-pill-cloud">' + pills(item.tags) + '</div>' +
          '<div><a class="pill-cta-btn" href="' + item.link + '"' + attrs + '>' + (item.cta || ctaDefault) + '</a></div>' +
        '</article>';
    }

    function renderContent() {
      const C = PORTFOLIO_CONFIG;

      $('#projectsContainer').innerHTML = C.projects.slice(0, 3).map(p =>
        '<a class="proj-mini-item" href="projects.html">' +
          '<div class="proj-mini-icon" style="background:' + p.bg + ';">' + p.icon + '</div>' +
          '<div class="proj-mini-text"><h5>' + p.title + '</h5><span>' + p.tagline + '</span></div>' +
        '</a>').join('');

      $('#changelogContainer').innerHTML = C.changelog.map(c =>
        '<div class="changelog-row"><span class="log-badge">' + c.badge + '</span>' +
        '<span style="font-size:.84rem;color:var(--parchment);">' + c.text + '</span></div>').join('');

      $('#projectsGridContainer').innerHTML = C.projects.map(p => cardHTML(p, 'View on GitHub ↗')).join('');
      $('#appsGridContainer').innerHTML = C.appsList.map(a => cardHTML(a, 'View ↗')).join('');

      $('#principlesContainer').innerHTML = C.principles.map(p =>
        '<div class="timeline-item"><span style="font-size:20px;">' + p.icon + '</span>' +
        '<div><div style="font-weight:700;color:var(--text-strong);font-size:.9rem;">' + p.title + '</div>' +
        '<div style="font-size:.82rem;color:var(--parchment);">' + p.text + '</div></div></div>').join('');

      $('#toolkitGroups').innerHTML = C.toolkit.map(g =>
        '<div style="margin-top:10px;"><div style="font-size:.72rem;color:var(--sage);font-weight:700;margin-bottom:6px;">' +
        g.group.toUpperCase() + '</div><div class="tech-pill-cloud">' + pills(g.items) + '</div></div>').join('');

      $('#timelineContainer').innerHTML = C.timeline.map(t =>
        '<div class="timeline-item"><span class="timeline-year">' + t.year + '</span>' +
        '<span style="font-size:.86rem;color:var(--parchment);">' + t.text + '</span></div>').join('');

      $('#footerYear').textContent = new Date().getFullYear();
    }

    /* ==========================================================================
       FILTERS
       ========================================================================== */
    function applyFilter(containerSel, barSel, cat, btn) {
      $$(barSel + ' .filter-btn').forEach(b => b.classList.toggle('active', b === btn));
      $$(containerSel + ' [data-cat]').forEach(card => {
        const show = cat === 'all' || card.dataset.cat.split(' ').indexOf(cat) !== -1;
        card.style.display = show ? '' : 'none';
      });
    }
    function filterApps(cat, btn) { applyFilter('#appsGridContainer', '#appFilterBar', cat, btn); }
    function filterProjects(cat, btn) { applyFilter('#projectsGridContainer', '#projectFilterBar', cat, btn); }

    /* ==========================================================================
       WEATHER / SKY MOODS
       ========================================================================== */
    const WEATHER_MODES = [
      { key: 'sunny', icon: '🌤️', label: 'Sunny', temp: '28°C',
        title: 'Golden Sunbeams', sub: '28°C • Gentle river breeze',
        phoneLabel: 'Sunny Valley', desc: 'Sunny Valley • AQI 42 (Good)', toast: 'Golden hour over the valley ☀️' },
      { key: 'rain', icon: '🌧️', label: 'Monsoon', temp: '24°C',
        title: 'Monsoon Mist', sub: '24°C • Rain over the Brahmaputra',
        phoneLabel: 'Monsoon Showers', desc: 'Monsoon Showers • AQI 28 (Good)', toast: 'Monsoon has arrived 🌧️' },
      { key: 'night', icon: '🌙', label: 'Starlight', temp: '21°C',
        title: 'Starlit Valley', sub: '21°C • Fireflies by the river',
        phoneLabel: 'Clear Night', desc: 'Clear Night • AQI 35 (Good)', toast: 'Starlight and fireflies 🌙' }
    ];
    let weatherIdx = 0;

    function applyWeather(idx, silent) {
      weatherIdx = ((idx % WEATHER_MODES.length) + WEATHER_MODES.length) % WEATHER_MODES.length;
      const m = WEATHER_MODES[weatherIdx];
      document.body.dataset.weather = m.key;

      $('#navWeatherIcon').textContent = m.icon;
      $('#navWeatherLabel').textContent = m.label;
      $$('.mood-chip').forEach(c => c.classList.toggle('active', Number(c.dataset.weatherIdx) === weatherIdx));


      $('#phoneIcon').textContent = m.icon;
      $('#phoneTemp').textContent = m.temp;
      $('#phoneLabel').textContent = m.phoneLabel;
      $('#appPagePhoneIcon').textContent = m.icon;
      $('#appPagePhoneTemp').textContent = m.temp;
      $('#appPagePhoneDesc').textContent = m.desc;

      document.querySelector('meta[name="theme-color"]').setAttribute('content',
        m.key === 'night' ? '#050C14' : m.key === 'rain' ? '#3C5563' : '#EFE6CF');

      try { localStorage.setItem('rd-weather', String(weatherIdx)); } catch (e) {}
      buildParticles();
      if (!silent) showToast(m.toast);
    }
    function setWeatherByIndex(i) { applyWeather(i); }
    function cycleWeatherEnvironment() { applyWeather(weatherIdx + 1); }

    /* ==========================================================================
       FOREST SPIRIT
       ========================================================================== */
    const SPIRIT_LINES = [
      'The little forest spirit waves back 🍃',
      'It does a happy hop 🌿',
      'Sproutkin says: take a deep breath ☺',
      'Something rustles near the lantern ✨'
    ];
    function triggerSpiritHello() {
      $$('.anim-sproutkin').forEach(el => {
        el.classList.remove('spirit-awake');
        void el.getBoundingClientRect(); // restart animation
        el.classList.add('spirit-awake');
        el.addEventListener('animationend', () => el.classList.remove('spirit-awake'), { once: true });
      });
      showToast(SPIRIT_LINES[Math.floor(Math.random() * SPIRIT_LINES.length)]);
    }

    /* ==========================================================================
       PARTICLES: pollen (sunny) • rain (monsoon) • fireflies (starlight)
       ========================================================================== */
    const canvas = $('#particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [], W = 0, H = 0, DPR = 1, rafId = null;

    function resizeCanvas() {
      DPR = Math.min(window.devicePixelRatio || 1, isMobile() ? 1.5 : 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W * DPR; canvas.height = H * DPR;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function newParticle(mode, initial) {
      const p = { x: Math.random() * W, y: initial ? Math.random() * H : 0, ph: Math.random() * 6.28 };
      if (mode === 'rain') {
        p.vy = 9 + Math.random() * 7; p.vx = -2.2; p.len = 10 + Math.random() * 12;
        if (!initial) p.y = -20;
      } else if (mode === 'night') {
        p.r = 1.6 + Math.random() * 1.8; p.vx = (Math.random() - .5) * .35; p.vy = (Math.random() - .5) * .3;
        p.y = initial ? H * (.35 + Math.random() * .65) : H * (.4 + Math.random() * .6);
      } else {
        p.r = .8 + Math.random() * 1.8; p.vx = .15 + Math.random() * .3; p.vy = -(.1 + Math.random() * .35);
        if (!initial) p.y = H + 10;
      }
      return p;
    }

    function buildParticles() {
      const mode = WEATHER_MODES[weatherIdx].key;
      const small = isMobile();
      const count = mode === 'rain' ? (small ? 60 : 120) : (small ? 20 : 40);
      particles = Array.from({ length: count }, () => newParticle(mode, true));
    }

    function frame(time) {
      rafId = requestAnimationFrame(frame);
      if (document.hidden) return;
      const mode = WEATHER_MODES[weatherIdx].key;
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (mode === 'rain') {
          p.x += p.vx; p.y += p.vy;
          ctx.strokeStyle = 'rgba(186,230,253,.38)';
          ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.vx * 1.6, p.y - p.len); ctx.stroke();
          if (p.y > H + 20) particles[i] = newParticle(mode, false);
        } else if (mode === 'night') {
          p.x += p.vx + Math.sin(time / 1500 + p.ph) * .25;
          p.y += p.vy + Math.cos(time / 1700 + p.ph) * .2;
          const a = .25 + .75 * Math.abs(Math.sin(time / 900 + p.ph));
          ctx.fillStyle = 'rgba(250,240,138,' + (a * .18).toFixed(3) + ')';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, 6.283); ctx.fill();
          ctx.fillStyle = 'rgba(254,249,195,' + a.toFixed(3) + ')';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
          if (p.x < -20) p.x = W + 20; else if (p.x > W + 20) p.x = -20;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        } else {
          p.x += p.vx + Math.sin(time / 2000 + p.ph) * .3; p.y += p.vy;
          const a = .3 + .5 * Math.abs(Math.sin(time / 1200 + p.ph));
          ctx.fillStyle = 'rgba(222,134,18,' + a.toFixed(3) + ')';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
          if (p.y < -10 || p.x > W + 10) particles[i] = newParticle(mode, false);
        }
      }
    }

    function startParticles() {
      resizeCanvas();
      buildParticles();
      if (prefersReducedMotion) return;
      if (!rafId) rafId = requestAnimationFrame(frame);
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { resizeCanvas(); buildParticles(); }, 150);
    });

    /* ==========================================================================
       SPECULAR HOVER GLOW (desktop pointers only)
       ========================================================================== */
    if (window.matchMedia('(hover: hover)').matches) {
      document.addEventListener('pointermove', e => {
        const card = e.target.closest && e.target.closest('.liquid-glass');
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - r.top) + 'px');
      }, { passive: true });
    }

    /* ==========================================================================
       INIT
       ========================================================================== */
    document.addEventListener('DOMContentLoaded', () => {
      renderContent();

      $('#weatherCycleTopBtn').addEventListener('click', cycleWeatherEnvironment);
      $('#spiritHelloBtn').addEventListener('click', triggerSpiritHello);

      let saved = 0;
      try { saved = parseInt(localStorage.getItem('rd-weather'), 10) || 0; } catch (e) {}
      applyWeather(saved, true);

      startParticles();
      const sweep = $('#pageLightSweep');
      sweep.classList.add('active');
      setTimeout(() => sweep.classList.remove('active'), 450);
    });
  
