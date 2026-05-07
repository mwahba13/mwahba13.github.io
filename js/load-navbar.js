// Loads the shared navbar fragment, marks the current page link,
// and wires the mobile toggle. No jQuery, no dependencies.
(function () {
  function init(host) {
    // Mobile toggle
    var btn  = host.querySelector('.site-nav-toggle');
    var menu = host.querySelector('.site-nav-menu');
    if (btn && menu) {
      btn.addEventListener('click', function () {
        var open = menu.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    // Mark current section
    var current = (document.body.dataset.nav || '').toLowerCase();
    if (current) {
      host.querySelectorAll('[data-nav]').forEach(function (a) {
        if (a.dataset.nav === current) {
          a.classList.add('is-current');
          a.setAttribute('aria-current', 'page');
        }
      });
    }
  }

  function mount() {
    var slot = document.getElementById('site-nav-slot');
    if (!slot) return;
    fetch('components/navbar.html')
      .then(function (r) { return r.text(); })
      .then(function (html) {
        slot.innerHTML = html;
        init(slot);
      })
      .catch(function () {
        // Static fallback so the page is still navigable when fetched via file://
        slot.innerHTML = ''
          + '<nav class="site-nav"><div class="site-nav-inner">'
          + '<a class="site-nav-brand" href="index.html">Michael <em>Wahba</em></a>'
          + '<div class="site-nav-menu"><ul class="site-nav-links">'
          + '<li><a href="index.html#work" class="site-nav-link">Work</a></li>'
          + '<li><a href="index.html#about" class="site-nav-link">About</a></li>'
          + '<li><a href="coaching.html" class="site-nav-link is-coaching">Coaching</a></li>'
          + '<li><a href="mailto:mrswahba13@gmail.com" class="site-nav-link">Contact</a></li>'
          + '</ul></div></div></nav>';
        init(slot);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
