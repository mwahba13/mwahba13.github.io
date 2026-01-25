document.addEventListener('DOMContentLoaded', function() {
    // Initialize all items as visible
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.classList.add('show');
    });

    // Add click handlers to filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class and reset aria-pressed from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });

            // Add active class and set aria-pressed to clicked button
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');

            const filter = this.getAttribute('data-filter');

            // Show/hide items based on filter (supports multi-valued data-category: space or comma separated)
            document.querySelectorAll('.portfolio-item').forEach(item => {
                item.classList.remove('show', 'hide');
                
                if (filter === 'all') {
                    item.classList.add('show');
                } else {
                    const categories = (item.getAttribute('data-category') || '').split(/[,\s]+/).filter(Boolean);
                    if (categories.includes(filter)) {
                        item.classList.add('show');
                    } else {
                        item.classList.add('hide');
                    }
                }
            });
        });
    });

    // Set "All" as active by default
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
        allButton.classList.add('active');
        allButton.setAttribute('aria-pressed', 'true');
    }
});
