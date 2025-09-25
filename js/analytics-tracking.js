// Enhanced Analytics Tracking

// Scroll Depth Tracking
let scrollMarkers = [25, 50, 75, 90];
let reachedMarkers = new Set();

function calculateScrollDepth() {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight - winHeight;
    const scrolled = window.scrollY;
    const scrollPercentage = Math.floor((scrolled / docHeight) * 100);

    scrollMarkers.forEach(marker => {
        if (!reachedMarkers.has(marker) && scrollPercentage >= marker) {
            reachedMarkers.add(marker);
            gtag('event', 'scroll_depth', {
                'depth': marker,
                'page_title': document.title,
                'page_location': window.location.href
            });
        }
    });
}

// Click Tracking
function trackClicks(event) {
    const element = event.target;
    const trackingData = {
        'event_category': 'click',
        'page_title': document.title,
        'page_location': window.location.href
    };

    // Track link clicks
    if (element.tagName === 'A') {
        trackingData.link_url = element.href;
        trackingData.link_text = element.innerText || element.textContent;
        gtag('event', 'link_click', trackingData);
    }
    // Track button clicks
    else if (element.tagName === 'BUTTON' || element.type === 'button' || element.type === 'submit') {
        trackingData.button_text = element.innerText || element.textContent;
        gtag('event', 'button_click', trackingData);
    }
    // Track image clicks
    else if (element.tagName === 'IMG') {
        trackingData.image_src = element.src;
        trackingData.image_alt = element.alt;
        gtag('event', 'image_click', trackingData);
    }
}

// Initialize tracking
document.addEventListener('DOMContentLoaded', function() {
    // Setup scroll tracking
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(calculateScrollDepth, 100);
    });

    // Setup click tracking
    document.addEventListener('click', trackClicks);
});
