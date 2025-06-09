document.addEventListener('DOMContentLoaded', function() {
    // Get the modals container
    const modalsContainer = document.getElementById('modalsContainer');
    if (!modalsContainer) return;

    // Fetch and inject modals
    fetch('modals.html')
        .then(response => response.text())
        .then(html => {
            modalsContainer.innerHTML = html;
            // Re-initialize Bootstrap data attributes
            document.querySelectorAll('[data-bs-toggle="modal"]').forEach(element => {
                new bootstrap.Modal(document.querySelector(element.dataset.bsTarget));
            });
        })
        .catch(error => console.error('Error loading modals:', error));
});
