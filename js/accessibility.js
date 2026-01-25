/**
 * Accessibility enhancements for portfolio page
 * - Focus styles for keyboard navigation
 * - ARIA updates
 * - Keyboard support
 */

document.addEventListener('DOMContentLoaded', function() {
    // Add visible focus styles for interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    
    interactiveElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #ffbd39';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // Keyboard navigation for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item a');
    portfolioItems.forEach((item, index) => {
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Enhance skip to main content if needed
    if (!document.querySelector('.skip-to-main')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-to-main';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: #ffbd39;
            color: #000;
            padding: 8px;
            text-decoration: none;
            z-index: 100;
        `;
        skipLink.addEventListener('focus', function() {
            this.style.top = '0';
        });
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Update main landmark ID
    const main = document.querySelector('main');
    if (main && !main.id) {
        main.id = 'main-content';
    }
});
