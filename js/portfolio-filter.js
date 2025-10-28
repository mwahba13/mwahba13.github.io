document.addEventListener('DOMContentLoaded', function() {
    // Initialize all items as visible
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.classList.add('show');
    });

    // Add click handlers to filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Show/hide items based on filter
            document.querySelectorAll('.portfolio-item').forEach(item => {
                item.classList.remove('show', 'hide');
                
                if (filter === 'all') {
                    item.classList.add('show');
                } else if (item.getAttribute('data-category') === filter) {
                    item.classList.add('show');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    // Set "All" as active by default
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
});