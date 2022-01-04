(function ($, window, Typist) {
    
	/*---------owl-carousel------------*/
	
	
  $('.banner-slider').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsiveClass: true,
		smartSpeed: 2500,
		responsive:{
			0:{
				items:1,
				nav:true,
				loop:true
			},
			600:{
				items:1,
				nav:true,
				loop:true
			},
			1000:{
				items:1,
				nav:true,
				loop:true
			}
		}
	});

	
	/*-------tooltip---------*/
	
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});
	
	
	/*-------------headder_fixed-------------*/
	
	
		$(window).scroll(function(){
			var sticky = $('.header'),
				scroll = $(window).scrollTop();
		  
			if (scroll >= 20) sticky.addClass('fixed');
			else sticky.removeClass('fixed');
		});
	
/*--------------ASO.JS---------------*/
	
AOS.init();
		
//refresh animations
 
$(window).on('load', function() {
	AOS.refresh();
});



})(jQuery, window);



