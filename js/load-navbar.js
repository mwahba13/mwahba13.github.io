$(document).ready(function() {
    // Load the navbar using jQuery
    $('body').prepend($('<div>').load('components/navbar.html', function(response, status, xhr) {
        if (status == 'error') {
            console.error('Error loading navbar:', xhr.status, xhr.statusText);
        }
    }));
});
