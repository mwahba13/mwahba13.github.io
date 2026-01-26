/**
 * Load navbar dynamically
 * Vanilla JavaScript replacement for jQuery version
 */

document.addEventListener('DOMContentLoaded', function() {
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
            document.body.insertBefore(navContainer, document.body.firstChild);
        })
        .catch(error => console.error('Error loading navbar:', error));
});
