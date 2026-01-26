/**
 * Portfolio Page - Main JavaScript
 * 
 * This file contains essential functionality for the portfolio page:
 * - Navigation dropdown hover behavior
 * - Navbar scroll animations
 * 
 * Vanilla JavaScript (no jQuery dependency)
 */

// Navigation dropdown hover behavior
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('nav .dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('> a');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        dropdown.addEventListener('mouseenter', function() {
            dropdown.classList.add('show');
            if (link) link.setAttribute('aria-expanded', 'true');
            if (menu) menu.classList.add('show');
        });
        
        dropdown.addEventListener('mouseleave', function() {
            dropdown.classList.remove('show');
            if (link) link.setAttribute('aria-expanded', 'false');
            if (menu) menu.classList.remove('show');
        });
    });

    // Navbar scroll behavior
    const navbar = document.querySelector('.ftco_navbar');
    const scrollWrap = document.querySelector('.js-scroll-wrap');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollTop > 150) {
            if (!navbar.classList.contains('scrolled')) {
                navbar.classList.add('scrolled');
            }
        } else {
            navbar.classList.remove('scrolled', 'sleep');
        }
        
        if (scrollTop > 350) {
            if (!navbar.classList.contains('awake')) {
                navbar.classList.add('awake');
            }
            if (scrollWrap) {
                scrollWrap.classList.add('sleep');
            }
        } else {
            if (navbar.classList.contains('awake')) {
                navbar.classList.remove('awake');
                navbar.classList.add('sleep');
            }
            if (scrollWrap) {
                scrollWrap.classList.remove('sleep');
            }
        }
    });
});
