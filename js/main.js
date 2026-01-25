/**
 * Portfolio Page - Main JavaScript
 * 
 * This file contains essential functionality for the portfolio page:
 * - Navigation dropdown hover behavior
 * - Navbar scroll animations
 * 
 * REMOVED UNUSED:
 * - jQuery Stellar (parallax) - not used on portfolio
 * - jQuery Owl Carousel - not used on portfolio
 * - jQuery Magnific Popup - not used on portfolio
 * - jQuery Waypoints - not used on portfolio
 * - jQuery Animate Number - not used on portfolio
 * - Scrollax - not used on portfolio
 * - AOS animations - preserved for other pages
 * - Full height helper - not used on portfolio
 * - Loader - not used on portfolio
 * - One page click scrolling - not used on portfolio
 */

(function($) {
	"use strict";

	// Navigation dropdown hover behavior
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		$this.find('.dropdown-menu').removeClass('show');
	});

	// Navbar scroll behavior
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

})(jQuery);
