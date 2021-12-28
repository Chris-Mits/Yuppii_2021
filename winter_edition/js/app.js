const body = document.getElementById('body');
const nav = document.getElementById('nav');
const navLogo = document.querySelector('.nav-logo');
const navLinks = document.querySelectorAll('.nav-link');
const carouselInner = document.querySelector('.carousel-inner');
const galleryThumbs = document.querySelectorAll(".gallery-item");
const videoplayer = document.getElementById("christmas-video");
const galleryCol = document.querySelector(".col-gallery");
const listMenuCol = document.querySelector(".col-menu");
const listMenuBtn = document.querySelector(".list-menu-toggler");
const listMenu = document.querySelector(".list-group");
const popupBtn = document.querySelector(".popup-btn");
const popup = document.querySelector(".popup");

// popupBtn.addEventListener("click", (e) => { 
// 	// console.log(e.target);
// 	if(e.target === popupBtn) {
// 		popup.classList.toggle("show");
// 	}
// 	
// 
// });

if(body) {
	
	// FUNCTION EXPRESSIONS
	const adjustNav = function() {
		if(window.scrollY > nav.offsetHeight + 20) {
			nav.classList.remove("py-2");
			navLogo.style.height = '45px';
			nav.style.boxShadow = '0px 3px 10px rgba(3, 4, 4, 0.4)';
			carouselInner.style.setProperty('height', 'calc(100vh - 61px)');
			carouselInner.style.marginTop = '61px';
		}
		else {
			nav.classList.add("py-2");
			navLogo.style.height = '65px';
			nav.style.boxShadow = 'none';
			carouselInner.style.setProperty('height', 'calc(100vh - 81px)');
			carouselInner.style.marginTop = '81px';
		}
	};
	
	const collapseNavbarMenu = function() {
		setTimeout(function() {
			$('.navbar-collapse').collapse('hide');	
		}, 300);
	};
	
	const hideNav = function() {
		nav.style.top = "-100%";
	};
	
	const showNavOnEsc = function(event) {
		if (nav.style.top === "-100%" && event.key === "Escape") {
			nav.style.top = "0";
		}
	};
	
	const closeOpenedGalleryImage = function(event) {
		const isMobile = window.matchMedia('(max-width: 500px)');
		const clickedPoint = event.target.classList;
		
		if(isMobile.matches) {

			if(clickedPoint.contains('pswp-close-svg')
			|| clickedPoint.contains('pswp-close-path')
			|| clickedPoint.contains('pswp__button--close')) {
				nav.style.top = "0";
			}
		} else {

			if(clickedPoint.contains('pswp-close-svg')
			|| clickedPoint.contains('pswp-close-path')
			|| clickedPoint.contains('pswp__button--close')
			|| clickedPoint.contains('pswp__item')) {
				nav.style.top = "0";
			}
		}
	};
	
	// #### EVENT LISTENERS ####
	
	// Window event listener. Adjusts navbar height 
	window.addEventListener('scroll', adjustNav);
	
	// Nav-links event listener. Collapses nav-menu after selection (mobile)
	navLinks.forEach(navlink => navlink.addEventListener("click", collapseNavbarMenu));
	
	// Gallery items event listener. Hides nav after selection, to allow full screen view
	galleryThumbs.forEach(galleryThumb => galleryThumb.addEventListener("click", hideNav));
	
	// Event Delegation: On body click, close enlarged gallery image
	body.addEventListener('click', (e) => { 
		
		if(e.target === popupBtn) {
			popup.classList.toggle("show");
		} else {
			popup.classList.remove("show");
		}
		
		closeOpenedGalleryImage(e);
	});
	
	// Event Delegation: On escape keyup, show nav & hide video modal 
	body.addEventListener('keyup', (event) => {
		showNavOnEsc(event);
		if(event.key === "Escape") {
			$('#videoModal').modal('hide');
		}
	})
	
	// ##################
	//    JQUERY STUFF
	// ##################
	
	// Scrollspy Init
	$('#body').scrollspy({ target: '#nav' });
	
	// #### CAROUSEL OPTIONS ####
	$('#xmas-carousel').carousel({
		interval: 5000,
		keyboard: true,
		pause: false,
		ride: 'carousel',
		wrap: true,
		touch: true
	});
	
	// Smooth scrolling animation afer a nav-link is clicked
	$('#nav a').on('click', function(e) {
		
		if(this.hash !== '') {
			e.preventDefault();
			const hash = this.hash;
			
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 500, function() {
				window.location.hash = hash;
			})
		}
	})
	
	// Smooth scrolling animation afer a contact anchor is clicked
	$('#activities span a').on('click', function(e) {
		if(this.hash !== '') {
			e.preventDefault();
			const hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 500, function() {
				window.location.hash = hash;
			})
		}
	})
	
	// FUNCTIONALITY: IF VIDEO MODAL SHOWN
	// 
	$('#videoModal').on('shown.bs.modal', function() {
		hideNav();
		videoplayer.play();
	});

	// FUNCTIONALITY: IF VIDEO MODAL HIDDEN
	$('#videoModal').on('hidden.bs.modal', function() {
		nav.style.top = "0";
		videoplayer.pause();
		videoplayer.currentTime = 0;
	});
	
	// FUNCTIONALITY: CLOSE MODAL ON SELECTION
	function closeModal() {
		setTimeout(function() {
			$("#gallery-selection-modal").modal("hide");
		}, 50);
	}
	
	/// FUNCTIONALITY: IF GAME SELECTION MODAL SHOWS
	$('#gallery-selection-modal').on('show.bs.modal', function() {
		hideNav();
		$(".gallery-selection-button").fadeOut();
	});
	
	// FUNCTIONALITY:  IF GAME SELECTION MODAL HIDES
	$('#gallery-selection-modal').on('hide.bs.modal', function() {
		nav.style.top = "0";
		$(".gallery-selection-button").fadeIn();
	});
	
	// FUNCTIONALITY: POPOVER INIT
	// $(function() {
	// 	$('[data-toggle="popover"]').popover();
	// });
	
	// GET CURRENT YEAR
	document.getElementById('year').innerText = new Date().getFullYear();
}