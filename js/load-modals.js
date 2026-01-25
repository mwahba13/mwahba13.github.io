/**
 * Load modals dynamically
 * Vanilla JavaScript replacement for jQuery version
 */

document.addEventListener('DOMContentLoaded', function() {
    const modalsContainer = document.getElementById('modalsContainer');
    if (!modalsContainer) return;

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
        .catch(error => console.error('Error loading modals:', error));
});
