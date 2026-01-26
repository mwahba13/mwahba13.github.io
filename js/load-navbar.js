/**
 * Load navbar dynamically
 * Vanilla JavaScript replacement for jQuery version
 *
 * Note: browsers block fetch() for local file:// pages (CORS). This script
 * detects file:// and prints an actionable message instead of attempting
 * the fetch (avoids noisy stack traces when previewing from the filesystem).
 */

document.addEventListener('DOMContentLoaded', function() {
    // Friendly early-exit when running from the filesystem
    if (location.protocol === 'file:') {
        console.error(
            'Navbar not loaded — fetch() is blocked when opening HTML via file://.\n' +
            'Serve the repository over HTTP (e.g. `python -m http.server 8000` or use the VS Code Live Server).\n' +
            'See DEVELOPMENT.md for quick commands.'
        );
        return; // do not attempt fetch()
    }

    // Create navbar container
    const navContainer = document.createElement('div');
    navContainer.id = 'navbar-container';
    
    // Fetch and load navbar.html
    fetch('components/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading navbar: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            navContainer.innerHTML = html;
            // Find the first element (skip text nodes and comments)
            let firstElement = null;
            for (let child of document.body.childNodes) {
                if (child.nodeType === Node.ELEMENT_NODE) {
                    firstElement = child;
                    break;
                }
            }
            if (firstElement) {
                document.body.insertBefore(navContainer, firstElement);
            } else {
                document.body.appendChild(navContainer);
            }
        })
        .catch(error => console.error('Error loading navbar: (hint: do not open via file://) ', error));
});
