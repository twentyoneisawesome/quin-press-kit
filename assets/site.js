/* Quin — product site behaviour: language, theme, reveals, voice demo. */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── language ─────────────────────────────────────────────────────── */
  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'zh' ? 'zh-Hant-TW' : 'en');
    try { localStorage.setItem('quin-lang', lang); } catch (e) {}
    var btn = document.querySelector('[data-toggle="lang"]');
    if (btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '中文';
      btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切換為繁體中文');
    }
    resetDemo();
  }

  /* ── theme ────────────────────────────────────────────────────────── */
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('quin-theme', theme); } catch (e) {}
    var btn = document.querySelector('[data-toggle="theme"]');
    if (btn) btn.setAttribute('aria-label', theme === 'dark' ? '切換為淺色 / Light mode' : '切換為深色 / Dark mode');
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-toggle]');
    if (!t) return;
    if (t.dataset.toggle === 'lang') setLang(root.getAttribute('data-lang') === 'zh' ? 'en' : 'zh');
    if (t.dataset.toggle === 'theme') setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  setLang(root.getAttribute('data-lang') || 'zh');

  /* ── sticky header hairline ───────────────────────────────────────── */
  var top = document.querySelector('.top');
  var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── reveal on scroll ─────────────────────────────────────────────── */
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var group = entry.target.parentElement ? entry.target.parentElement.querySelectorAll(':scope > .reveal') : [];
        var i = Array.prototype.indexOf.call(group, entry.target);
        entry.target.style.transitionDelay = (i > 0 ? Math.min(i, 5) * 70 : 0) + 'ms';
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ── voice demo ───────────────────────────────────────────────────── */
  var demo = document.querySelector('.demo');
  var said = demo && demo.querySelector('.said');
  var fields = demo ? demo.querySelectorAll('.f') : [];
  var timers = [];

  var SCRIPT = {
    zh: { line: '午餐便當一百二十現金', values: ['便當', '$120', '午餐', '現金'] },
    en: { line: 'lunch bento one twenty cash', values: ['Bento', '$120', 'Lunch', 'Cash'] }
  };

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function resetDemo() {
    if (!demo) return;
    clearTimers();
    demo.classList.remove('playing');
    fields.forEach(function (f) { f.classList.remove('on'); });
    var s = SCRIPT[root.getAttribute('data-lang') === 'en' ? 'en' : 'zh'];
    fields.forEach(function (f, i) { f.querySelector('.v').textContent = s.values[i]; });
    said.textContent = '';
    if (demo.dataset.seen === '1') play();
  }

  function play() {
    if (!demo) return;
    clearTimers();
    var s = SCRIPT[root.getAttribute('data-lang') === 'en' ? 'en' : 'zh'];
    fields.forEach(function (f, i) {
      f.classList.remove('on');
      f.querySelector('.v').textContent = s.values[i];
    });
    said.textContent = '';

    if (reduce) {
      said.textContent = s.line;
      fields.forEach(function (f) { f.classList.add('on'); });
      return;
    }

    demo.classList.add('playing');
    var caret = document.createElement('span');
    caret.className = 'caret';
    said.appendChild(caret);

    var step = 95;
    s.line.split('').forEach(function (ch, i) {
      timers.push(setTimeout(function () {
        caret.insertAdjacentText('beforebegin', ch);
      }, 420 + i * step));
    });

    var done = 420 + s.line.length * step + 260;
    timers.push(setTimeout(function () {
      demo.classList.remove('playing');
      caret.remove();
    }, done));

    fields.forEach(function (f, i) {
      timers.push(setTimeout(function () { f.classList.add('on'); }, done + 140 + i * 130));
    });
  }

  if (demo) {
    demo.querySelector('.replay').addEventListener('click', play);
    if ('IntersectionObserver' in window) {
      var dio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          demo.dataset.seen = '1';
          play();
          dio.disconnect();
        });
      }, { threshold: 0.45 });
      dio.observe(demo);
    } else {
      demo.dataset.seen = '1';
      play();
    }
  }

  /* wave bars get staggered so the waveform looks alive, not synchronised */
  document.querySelectorAll('.demo .wave i').forEach(function (bar, i) {
    bar.style.animationDelay = (i * 90) + 'ms';
  });
})();
