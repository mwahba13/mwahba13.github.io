$(document).ready(function() {
    // Get the modals container
    const $modalsContainer = $('#modalsContainer');
    if (!$modalsContainer.length) return;

    // Load modals using jQuery
    $modalsContainer.load('modals.html', function(response, status, xhr) {
        if (status == 'error') {
            console.error('Error loading modals:', xhr.status, xhr.statusText);
            return;
        }

        // Re-initialize Bootstrap data attributes
        $('[data-bs-toggle="modal"]').each(function() {
            new bootstrap.Modal(document.querySelector($(this).data('bs-target')));
        });
    });
});
