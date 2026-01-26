/**
 * Load modals dynamically
 * Vanilla JavaScript replacement for jQuery version
 */

document.addEventListener('DOMContentLoaded', function() {
    const modalsContainer = document.getElementById('modalsContainer');
    if (!modalsContainer) return;

    // Friendly early-exit when running from the filesystem
    if (location.protocol === 'file:') {
        console.error(
            'Modals not loaded — fetch() is blocked when opening HTML via file://.\n' +
            'Serve the repository over HTTP (e.g. `python -m http.server 8000` or use the VS Code Live Server).\n' +
            'See DEVELOPMENT.md for quick commands.'
        );
        // leave the container empty and stop to avoid a noisy runtime error
        return;
    }

    // Fetch and load modals.html
    fetch('modals.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading modals: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            modalsContainer.innerHTML = html;
            
            // Re-initialize Bootstrap modals
            document.querySelectorAll('[data-bs-toggle="modal"]').forEach(trigger => {
                const targetSelector = trigger.getAttribute('data-bs-target');
                if (targetSelector && document.querySelector(targetSelector)) {
                    new bootstrap.Modal(document.querySelector(targetSelector));
                }
            });
        })
        .catch(error => console.error('Error loading modals: (hint: do not open via file://) ', error));
});
