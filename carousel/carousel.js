// slider
$(document).ready(function() {
	$('.slider-about').owlCarousel({
		loop: true,
		margin: 10,
		nav:false,
		dots:true,
		autoplay:true,
		items:1,
		responsiveClass: true,
	})
})
jQuery(document).ready(function($) {
	$('.slider-partner').owlCarousel({
		items: 5,
		animateOut: 'fadeOut',
		loop: true,
		margin: 10,
		dots:false,
		nav:false,
		autoplay: true,
		responsive: {
			0: {
				items: 2,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
				loop: true,
				margin: 10,
			}
		}
	});
})