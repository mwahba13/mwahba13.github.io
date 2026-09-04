// Lightbox for case-study image strips. Any page with .shot elements plus the
// #lightbox markup gets click, Esc, and arrow-key navigation. No dependencies.
(function () {
  function init() {
    var shots = Array.prototype.slice.call(document.querySelectorAll('.shot'));
    if (!shots.length) return;

    var box = document.getElementById('lightbox');
    if (!box) return;

    var img      = box.querySelector('img');
    var titleEl  = box.querySelector('.lb-title');
    var projEl   = box.querySelector('.lb-project');
    var btnPrev  = box.querySelector('.lightbox-prev');
    var btnNext  = box.querySelector('.lightbox-next');
    var btnClose = box.querySelector('.lightbox-close');
    var index    = 0;
    var lastFocus = null;

    function show(i) {
      index = (i + shots.length) % shots.length;
      var shot = shots[index];
      var source = shot.querySelector('img');
      img.src = source.currentSrc || source.src;
      img.alt = source.alt;
      if (titleEl) titleEl.textContent = shot.dataset.title || source.alt || '';
      if (projEl)  projEl.textContent  = shot.dataset.label || '';
      var many = shots.length > 1;
      if (btnPrev) btnPrev.hidden = !many;
      if (btnNext) btnNext.hidden = !many;
    }

    function open(shot) {
      lastFocus = document.activeElement;
      show(shots.indexOf(shot));
      box.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      if (btnClose) btnClose.focus();
    }

    function close() {
      box.classList.remove('is-open');
      document.body.style.overflow = '';
      img.src = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    shots.forEach(function (shot) {
      shot.addEventListener('click', function () { open(shot); });
      shot.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(shot); }
      });
    });

    if (btnPrev)  btnPrev.addEventListener('click', function () { show(index - 1); });
    if (btnNext)  btnNext.addEventListener('click', function () { show(index + 1); });
    if (btnClose) btnClose.addEventListener('click', close);

    box.addEventListener('click', function (e) {
      if (e.target === box) close();
    });

    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('is-open')) return;
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
