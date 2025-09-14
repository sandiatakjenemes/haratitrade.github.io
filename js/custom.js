/*---------------------------------
[Master Javascript]
Project: Gasoil
-------------------------------------------------------------------*/
(function($) {
	"use strict";
	var Gasoil = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function() {
			if (!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			/*-------------- Gasoil Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.progessbar();
			this.Datepicker();
			this.Banner_slider();
			this.Testimonialslider();
			this.Testimonial_shape();
			this.LogoCarousel();
			this.Responsive_menu();
			this.Dropdown_Menu();
			this.skill_counter();
			this.wowanimation();
			this.MailFunction();
		},
		/*-------------- Gasoil Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function() {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if (rtl_attr) {
				$('html').find('body').addClass("rtl");
			}
		},
		//progessbar js
		progessbar:function() {
			$('.progress_slide').appear(function() {
				$(".gs_progress_bar .progress_slide").each (function(){
					var percent_width = $(this).attr("data-percentage");
					$(this).width(percent_width + '%');
				});		
			});		
		},
		//Datepicker
		Datepicker: function() {
			if($(".datepicker").length > 0){
				$(".datepicker").datepicker({
					dateFormat: "dd-mm-yy"
				});
			}
		},

		// Home Banner Slider
		Banner_slider:function() {
			if($(".banner_slider").length > 0){
				$('.banner_slider').owlCarousel({
					loop:true,
					items:1,
					margin:0,
					autoplay:true,
					autoplayTimeout:1500,
					autoplaySpeed:1500,
					smartSpeed:1500,
					dots:false,
					nav:true,
					navText:["<img src='images/icon/left_arrow.png' alt=''>","<img src='images/icon/right_arrow.png' alt=''>"],
					responsiveClass:true,
					responsive:{
						0:{
							items:1,
						},
						600:{
							items:1,
						},
						768:{
							items:1,
						},
						1000:{
							items:1,
						}
					},
					animateIn:"fadeIn",
					animateOut:"fadeOut",
				})
			}
		},

		//Testmonial Crousel
		Testimonialslider: function() {
			if($(".testimonial_carousel").length > 0){
				$('.testimonial_carousel').owlCarousel({
					loop:true,
					items:2,
					margin:30,
					autoplay:false,
					autoplayTimeout:1500,
					autoplaySpeed:1500,
					smartSpeed:1500,
					dots:false,
					nav:true,
					navText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
					responsiveClass:true,
					responsive:{
						0:{
							items:1,
						},
						600:{
							items:1,
						},
						768:{
							items:1,
						},
						992:{
							items:2,
						}
					},
				})
			}
		},
		//Testimonial shape
		Testimonial_shape:function(){
			var shape_width = $(".test_paragraph").outerWidth();
			var b_width = shape_width/2;
			$('head').append('<style>.test_paragraph:after{border-left-width: ' + b_width + 'px; border-right-width: ' + b_width + 'px; }</style>');
		},
		//brands logo carousel
		LogoCarousel:function(){
			if($(".logo_carousel").length > 0){
				$('.logo_carousel').owlCarousel({
					loop:true,
					items:5,
					margin:30,
					autoplay:true,
					autoplayTimeout:1500,
					autoplaySpeed:1500,
					smartSpeed:1500,
					dots:false,
					nav:false,
					responsiveClass:true,
					responsive:{
						0:{
							items:1,
						},
						480:{
							items:2,
						},
						768:{
							items:3,
						},
						992:{
							items:4,
						},
						1000:{
							items:4,
						},
						1200:{
							items:5,
						}
					},
				})
			}	
		},
		//Responsive Menu
		Responsive_menu: function() {
			$(".nav_toggle").on('click',function(){
				$(this).toggleClass("toggle_open");
				$(".gs_navigation").toggleClass("menu_open");
			});
		},
		//dropdown menu
		Dropdown_Menu: function (){
			if ($(window).width () <= 991){
				$(".gs_navigation ul li ul.sub-menu").parents("li").addClass("dropdown_toggle");
				$(".dropdown_toggle").append("<span class='caret_down'></span>");
				$(".caret_down").on("click",function(){
					$(this).toggleClass("caret_up");
					$(this).prev("ul").slideToggle();
				});
			}
			else {
				
			}
		},
		//counter 
		skill_counter:function(){
			if($('.counter_num').length > 0){
				$('.counter_num').appear(function() {
					$('.counter_num').each(count);
					  function count(options) {
						var $this = $(this);
						options = $.extend({}, options || {}, $this.data('countToOptions') || {});
						$this.countTo(options);
					}
				});
			}
		},
		//animation on scrolling page
		wowanimation:function(){
			var wow = new WOW({
				boxClass:     'wow',      // default
				animateClass: 'animated', // default
				offset:       0,          // default
				mobile:       true,       // default
				live:         true        // default
			})
			wow.init();
		},
		//contact form mail script
		MailFunction:function(){
			$('.submit_btn').on('click', function(){
				var name=$('#u_name').val();
				var email=$('#u_email').val();
				var phone=$('#u_phone').val();
				var address=$('#u_address').val();
				var u_msg=$('#u_message').val();
				$.ajax({
					type: "POST",
					url: "contactmail.php",
					data: {
						'username':name,
						'useremail':email,
						'userphone':phone,
						'useraddress':address,
						'usermsg':u_msg,
						},
					success: function(msg) {
						var full_msg=msg.split("#");
						if(full_msg[0]=='1'){
							$('#u_name').val("");
							$('#u_email').val("");
							$('#u_phone').val("");
							$('#u_address').val("");
							$('#u_message').val("");
							$('#err_msg').html( full_msg[1] );
						}
						else{
							$('#u_name').val(name);
							$('#u_email').val(email);
							$('#u_phone').val(phone);
							$('#u_address').val(address);
							$('#u_message').val(u_msg);
							$('#err_msg').html( full_msg[1] );
						}
					}
				});
			});
		},
   };
   Gasoil.init();
   //window load function
	$(window).load(function(){
		$(".preloader").fadeOut("slow").delay("600");
	});	
	//window scroll function
	$(window).bind('scroll', function() {
		var wind_scroll = $(window).scrollTop();
        if (wind_scroll > 200 ) {
            $('.gs_navigation_header').addClass('sticky_header');
        }
		else {
            $('.gs_navigation_header').removeClass('sticky_header');
        }
    });
})(jQuery);
