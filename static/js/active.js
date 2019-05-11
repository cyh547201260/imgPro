/*global jQuery 
URL: www.bootstrapmb.com
*/
(function ($) {
	"use strict";
	
	var $window = $(window);
	$window.on('scroll', function() {    
		var scroll = $window.scrollTop();
		if (scroll < 300) {
			$(".sticker").removeClass("sticky");
		}else{
			$(".sticker").addClass("sticky");
		}
	});
	

	// responsive menu js
	jQuery('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

	
    /*----------  Currency and language dropdown  ----------*/
    $(".currency-btn").on("click", function (event) {
		event.stopPropagation();
        $(".currency-list").slideToggle();
        $(".language-list").slideUp("slow");
        $(".account-list").slideUp("slow");
    });
    $(".language-btn").on("click", function (event) {
		event.stopPropagation();
        $(".language-list").slideToggle();
        $(".currency-list").slideUp("slow");
        $(".account-list").slideUp("slow");
    });
    $(".account-btn").on("click", function (event) {
        event.stopPropagation();
        $(".account-list").slideToggle();
        $(".currency-list").slideUp("slow");
        $(".language-list").slideUp("slow");
    });

    $("body:not(.currency-btn)").on("click", function () {
		$(".currency-list").slideUp("slow");
	});
    $("body:not(.language-btn)").on("click", function () {
		$(".language-list").slideUp("slow");
	});
    $("body:not(.account-btn)").on("click", function () {
		$(".account-list").slideUp("slow");
	});

    
    // searh option js
    function searchToggler() {
		var trigger = $('.search-trigger'),
			container = $('.search_active');
		trigger.on('click', function (e) {
			e.preventDefault();
			container.toggleClass('is-visible');
		});

		$('.close__wrap').on('click', function () {
			container.removeClass('is-visible');
		});

	}
	searchToggler();
	
    
    // cart btn toggle js
    $('.cart-trigger').on('click', function(){
		$('.mini-cart-drop-down').slideToggle();
	});
	
    
    // Hero main slider active js
	$('.hero-slider-active').slick({
		infinite: true,
		fade: true,
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		]
	});


	// product Carousel For 2 Column
	$('.product-carousel-active').each(function (){
//		var $this = $(this);
//		var $row = $this.attr("data-row") ? parseInt($this.attr("data-row"), 10) : 1;
//		$this.slick({
//			infinite: true,
//			arrows: true,
//			dots: false,
//			slidesToShow: 4,
//			slidesToScroll: 1,
//			rows: $row,
//			prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
//			nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
//			responsive: [
//				{
//					breakpoint: 992,
//					settings: {
//						slidesToShow: 3,
//					}
//				},
//				{
//					breakpoint: 767,
//					settings: {
//						slidesToShow: 2,
//						arrows: false,
//					}
//				},
//				{
//					breakpoint: 479,
//					settings: {
//						slidesToShow: 1,
//						arrows: false,
//					}
//				},
//			]
//		});
	});


	// hot deals carousel active js
	var hotSlider = $('.hot_deals_carousel_active');
	hotSlider.slick({
		arrows: true,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		infinite: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		]
	});


	// product carousel active js
	var heroSlider = $('.product-carousel-active2');
	heroSlider.slick({
		arrows: true,
		autoplay: false,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		infinite: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});


	// testimonial carousel active js
	var testimonial = $('.testimonial-carousel-active');
	testimonial.slick({
		arrows: false,
		dots: true,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		infinite: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		]
	});


	// brand slider active js
	var brand = $('.brand-slider-active');
	brand.slick({
		arrows: true,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		infinite: true,
		slidesToShow: 6,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
		]
	});


	// recommended item carousel
	$('.recommended-item-carousel').each(function (){
		var $this = $(this);
		var $row = $this.attr("data-row") ? parseInt($this.attr("data-row"), 10) : 1;
		$this.slick({
			infinite: true,
			arrows: false,
			autoplay: true,
			speed: 1000,
			autoplaySpeed: 5000,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: $row,
			prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
			nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
					}
				},
			]
		});
	});


	// blog carousel active js
	var blog = $('.blog-carousel-active');
	blog.slick({
		arrows: false,
		autoplay: false,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: false,
		infinite: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});


	// blog gallery slider
	var gallery = $('.blog-gallery-slider');
	gallery.slick({
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		]
	});


	// recommended item carousel
	$('.product-carousel-active3').each(function (){
		var $this = $(this);
		var $row = $this.attr("data-row") ? parseInt($this.attr("data-row"), 10) : 1;
		$this.slick({
			infinite: true,
			arrows: true,
			autoplay: true,
			speed: 1000,
			autoplaySpeed: 5000,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: $row,
			prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
			nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
					}
				},
			]
		});
	});


	// prodct details slider active
	$('.product-large-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: '.pro-nav'
	});


	// product details slider nav active
	$('.pro-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-long-arrow-right"></i></button>',
		asNavFor: '.product-large-slider',
		centerMode: true,
		arrows: true,
		centerPadding: 0,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		]
	});


	// product details vertical slider active
	$('.product-large-slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: '.pro-nav2'
	});


	// product details vertical slider nav active
	$('.pro-nav2').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-long-arrow-up"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-long-arrow-down"></i></button>',
		asNavFor: '.product-large-slider2',
		centerMode: true,
		arrows: true,
		centerPadding: 0,
		vertical: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		]
	});


	// product details slider box active
	$('.slider-box-active').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
		centerMode: true,
		arrows: true,
		centerPadding: 0,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});


	// full page slider active js
	$('#fullpage').fullpage({
		lockAnchors: false,
		scrollOverflow: true,
		navigation: true,
		verticalCentered: false,
		responsiveWidth: 1199,
		paddingTop: '0px',
		paddingBottom: '0px',
	});


	// magnificPopup img view 
	$('.img-popup').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true
		}
	});


	// sticky sidebar
	$('.is-stickyy').stickySidebar({
		topSpacing: 130,
		bottomSpacing: -20
	}); 

	// modal fix
	$('.modal').on('shown.bs.modal', function (e) {
		$('.pro-nav').resize();
	})


	// magnificPopup video view
	$('.play-btn').magnificPopup({
		type: 'iframe'
	});


	/*---- Countdown Activation ----*/
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Min</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Sec</span></div>'));
		});
	});



	/*=============================
		Checkout Page Checkbox
	==============================*/
	$("#create_pwd").on("change", function () {
		$(".account-create").slideToggle("100");
	});

	$("#ship_to_different").on("change", function () {
		$(".ship-to-different").slideToggle("100");
	});


	/*=============================
		Payment Method Accordion
	==============================*/
	$('input[name="paymentmethod"]').on('click', function () {

		var $value = $(this).attr('value');

		$('.payment-method-details').slideUp();
		$('[data-method="' + $value + '"]').slideDown();
	});


	// parallax banner js
	$('.banner-wrapper-h4').parallax('50%','.3');


	// quantity change js
	$('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
	$('.pro-qty').append('<span class="inc qtybtn">+</span>');
	$('.qtybtn').on('click', function() {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
		var newVal = parseFloat(oldValue) + 1;
		} else {
		// Don't allow decrementing below zero
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
		}
		}
		$button.parent().find('input').val(newVal);
	}); 


	// Sidebar Category
	var categoryChildren = $('.sidebar-category li .children');
		
	categoryChildren.slideUp();
	categoryChildren.parents('li').addClass('has-children');

	$('.sidebar-category').on('click', 'li.has-children > a', function(e) {

	if ($(this).parent().hasClass('has-children')) {
		if ($(this).siblings('ul:visible').length > 0) $(this).siblings('ul').slideUp();
		else {
			$(this).parents('li').siblings('li').find('ul:visible').slideUp();
			$(this).siblings('ul').slideDown();
		}
	}
	if ($(this).attr('href') === '#') {
		e.preventDefault();
		return false;
	}
	});


	// nice select active js
	$('select').niceSelect();


	// product view mode change js
	$('.product-view-mode a').on('click', function(e){
		e.preventDefault();
		
		var shopProductWrap = $('.shop-product-wrap');
		var viewMode = $(this).data('target');
		
		$('.product-view-mode a').removeClass('active');
		$(this).addClass('active');
		shopProductWrap.removeClass('grid list').addClass(viewMode);
	})

	
	// Mailchimp for dynamic newsletter
	$('#mc-form').ajaxChimp({
		language: 'en',
		callback: mailChimpResponse,
		// ADD YOUR MAILCHIMP URL BELOW HERE!
		url: 'https://company.us19.list-manage.com/subscribe/post?u=2f2631cacbe4767192d339ef2&amp;id=24db23e68a'

	});


	// mailchimp active js
	function mailChimpResponse(resp) {
		if (resp.result === 'success') {
			$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
			$('.mailchimp-error').fadeOut(400);

		} else if (resp.result === 'error') {
			$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
		}
	}


	/*---- scroll to top -----*/
	$(window).on('scroll',function(){
		if($(this).scrollTop() > 600){
			$('.scroll-top').removeClass('not-visible');
		}
		else{
			$('.scroll-top').addClass('not-visible');
		}
	});
	$('.scroll-top').on('click',function (event){
		$('html,body').animate({
			scrollTop:0
		},1000);
	});


}(jQuery));