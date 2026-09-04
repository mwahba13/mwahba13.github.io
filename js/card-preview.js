// Card preview: hover-scrub through a project's screenshots inside the card
// media, the way a Steam capsule does. Progressive enhancement — with JS off or
// on touch, the card keeps its single static image and still links to the case
// study. No nested interactive elements, so the whole card stays one link.
(function () {
  function initCard(media) {
    var extra = (media.dataset.shots || '').split('|').filter(Boolean);
    if (!extra.length) return;

    var base = media.querySelector('img');
    if (!base) return;

    var total  = extra.length + 1;
    var layers = [base];
    var loaded = false;

    // Layers sit on top of the base image, revealed one at a time.
    extra.forEach(function (src) {
      var img = document.createElement('img');
      img.className = 'cm-layer';
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      img.dataset.src = src;
      media.appendChild(img);
      layers.push(img);
    });

    // Dot indicators: also the affordance that says "there's more in here".
    var dots = document.createElement('div');
    dots.className = 'cm-dots';
    dots.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < total; i++) {
      var d = document.createElement('span');
      if (i === 0) d.className = 'is-on';
      dots.appendChild(d);
    }
    media.appendChild(dots);

    var current = 0;

    function load() {
      if (loaded) return;
      loaded = true;
      layers.slice(1).forEach(function (img) { img.src = img.dataset.src; });
    }

    function show(i) {
      if (i === current) return;
      current = i;
      layers.forEach(function (img, n) {
        if (n === 0) return;
        img.classList.toggle('is-on', n === i);
      });
      dots.childNodes.forEach(function (d, n) {
        d.classList.toggle('is-on', n === i);
      });
    }

    media.addEventListener('pointerenter', function (e) {
      if (e.pointerType === 'touch') return;
      load();
    });

    media.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') return;
      load();
      var box = media.getBoundingClientRect();
      var pos = (e.clientX - box.left) / box.width;
      var idx = Math.floor(pos * total);
      show(Math.max(0, Math.min(total - 1, idx)));
    });

    media.addEventListener('pointerleave', function () { show(0); });
  }

  function init() {
    document.querySelectorAll('.card-media[data-shots]').forEach(initCard);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
