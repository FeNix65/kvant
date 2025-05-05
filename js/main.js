 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-car').owlCarousel({
			center: true,
			loop: true,
			autoplay: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
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

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


	$('#book_pick_date,#book_off_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#time_pick').timepicker();



})(jQuery);






// api vk
// async function fetchVKPosts() {
// 	const response = await fetch("https://api.vk.com/method/wall.get?access_token=70b31e1d70b31e1d70b31e1d00739ce62d770b370b31e1d18bb83151bcd0afef50409a3&v=5.199&domain=deadheadroom");
// 	const data = await response.json();
// 	const postsContainer = document.getElementById("posts");

// 	postsContainer.innerHTML = ""; // очистим перед добавлением

// 	if (data.response) {
// 	  data.response.items.forEach(post => {
// 		const postEl = document.createElement("div");
// 		postEl.innerHTML = `<p>${post.text}</p><hr>`;
// 		postsContainer.appendChild(postEl);
// 	  });
// 	} else {
// 	  postsContainer.innerText = "Ошибка загрузки постов.";
// 	  console.log(data);
// 	}
//   }

//   // Загружаем при старте
//   fetchVKPosts();

//   // Обновление каждые 30 секунд
//   setInterval(fetchVKPosts, 30000);



// const express = require("express");
// const fetch = require("node-fetch");
// const app = express();

// const PORT = 3000;
// const ACCESS_TOKEN = "70b31e1d70b31e1d70b31e1d00739ce62d770b370b31e1d18bb83151bcd0afef50409a3";
// const DOMAIN = "deadheadroom";

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

// app.get("/vk-posts", async (req, res) => {
//   const url = `https://api.vk.com/method/wall.get?domain=${DOMAIN}&access_token=${ACCESS_TOKEN}&v=5.199`;
//   try {
//     const vkRes = await fetch(url);
//     const data = await vkRes.json();
//     res.json(data);
//   } catch (e) {
//     res.status(500).json({ error: "Ошибка при получении данных от VK" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Прокси-сервер запущен на http://localhost:${PORT}`);
// });




document.addEventListener('DOMContentLoaded', () => {
	fetch("https://api.vk.com/method/wall.get?access_token=70b31e1d70b31e1d70b31e1d00739ce62d770b370b31e1d18bb83151bcd0afef50409a3&v=5.199&domain=deadheadroom&count=5")
	  .then(res => res.json())
	  .then(data => {
		console.log("Данные VK:", data);
		const container = document.getElementById('posts-container');
  
		if (!container) return console.error('Не найден #posts-container');
  
		if (data.response?.items?.length) {
		  let postsHTML = '';
  
		  data.response.items.forEach(post => {
			const postText = post.text || "Нет текста в посте.";
			let attachmentsHTML = '';
  
			if (post.attachments && post.attachments.length > 0) {
			  let photos = [];
			  let videoIframe = '';
  
			  post.attachments.forEach(att => {
				if (att.type === 'photo') {
				  const photoUrl = att.photo.sizes.find(s => s.type === 'x')?.url || att.photo.sizes.at(-1)?.url;
				  if (photoUrl) {
					photos.push(photoUrl);
				  }
				} else if (att.type === 'video') {
				  videoIframe = `
					<div class="embed-responsive embed-responsive-16by9 mb-3">
					  <iframe 
						src="https://vk.com/video_ext.php?oid=${att.video.owner_id}&id=${att.video.id}&hash=${att.video.access_key || ''}" 
						frameborder="0" 
						allowfullscreen 
						class="embed-responsive-item" 
						style="width: 100%; height: 400px;">
					  </iframe>
					</div>
				  `;
				}
			  });
  
			  if (photos.length > 0) {
				attachmentsHTML += '<div class="row mb-3 g-2">'; // g-2 - отступы между фото
  
				if (photos.length === 1) {
				  attachmentsHTML += `
					<div class="col-12">
					  <a href="#" class="block-20 img" style="background-image: url('${photos[0]}'); height: 600px; background-size: cover; background-position: center;"></a>
					</div>
				  `;
				} else if (photos.length === 2) {
				  photos.forEach(photoUrl => {
					attachmentsHTML += `
					  <div class="col-md-6">
						<a href="#" class="block-20 img" style="background-image: url('${photoUrl}'); height: 600px; background-size: cover; background-position: center;"></a>
					  </div>
					`;
				  });
				} else if (photos.length === 3) {
				  attachmentsHTML += `
					<div class="col-md-6">
					  <a href="#" class="block-20 img" style="background-image: url('${photos[0]}'); height: 600px; background-size: cover; background-position: center;"></a>
					</div>
					<div class="col-md-6 d-flex flex-column">
					  <div class="col-12" style="flex-basis: 51%; padding: 0;">
						<a href="#" class="block-20 img" style="background-image: url('${photos[1]}'); height: 295px; background-size: cover; background-position: center;"></a>
					  </div>
					  <div class="col-12" style="padding: 0;">
						<a href="#" class="block-20 img" style="background-image: url('${photos[2]}'); height: 295px; background-size: cover; background-position: center;"></a>
					  </div>
					</div>
				  `;
				} else {
				  // 4 и больше фото — обычная сетка 3 в ряд
				  photos.forEach(photoUrl => {
					attachmentsHTML += `
					  <div class="col-md-4">
						<a href="#" class="block-20 img" style="background-image: url('${photoUrl}'); height: 300px; background-size: cover; background-position: center;"></a>
					  </div>
					`;
				  });
				}
  
				attachmentsHTML += '</div>'; // Закрываем row
			  }
  
			  if (videoIframe) {
				attachmentsHTML += videoIframe;
			  }
			}
  
			postsHTML += `
			  <div class="col-md-12 text-center d-flex mb-5">
				<div class="blog-entry justify-content-end mb-md-5 w-100">
				  ${attachmentsHTML}
				  <div class="text px-md-5 pt-4">
					<div class="meta mb-3">
					  <div><a href="#">${new Date(post.date * 1000).toLocaleDateString()}</a></div>
					</div>
					<h3 class="heading mt-2"><a href="#">${postText}</a></h3>
				  </div>
				</div>
			  </div>
			`;
		  });
  
		  container.insertAdjacentHTML('beforeend', postsHTML);
		} else {
		  container.insertAdjacentHTML('beforeend', '<p>Нет доступных постов.</p>');
		}
	  })
	  .catch(err => {
		console.error("Ошибка:", err);
		document.getElementById('posts-container')
				.insertAdjacentHTML('beforeend', '<p class="text-danger">Ошибка при загрузке постов.</p>');
	  });
  });
  
