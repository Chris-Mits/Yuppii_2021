const body = document.getElementById('body');
const nav = document.getElementById('nav');
const navLogo = document.querySelector('.nav-logo');
const carouselInner = document.querySelector('.carousel-inner');
const galleryThumbs = document.querySelectorAll(".gallery-item");
const videoplayer = document.getElementById("christmas-video");
const galleryCol = document.querySelector(".col-gallery");
const listMenuCol = document.querySelector(".col-menu");
const listMenuBtn = document.querySelector(".list-menu-toggler");
const listMenu = document.querySelector(".list-group");

// #### GET YEAR SCRIPT ####
$('#year').text(new Date().getFullYear());

// IF INDEX.HTML IS PRESENT
if(body) {
	
	$('.nav-link').on('click', collapseNavbarMenu);
	
	function collapseNavbarMenu() {
		setTimeout(function() {
			$('.navbar-collapse').collapse('hide');	
		}, 250);
	}
	
	// #### INIT SCROLL SPY ON INDEX.HTML ####
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
	
	// #### SMOOTH SCROLLING ANIMATION - NAV LINKS ####
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
	
	// #### SMOOTH SCROLLING ANIMATION - CONTACT ANCHORS ####
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
		
	// #### EVENT LISTENERS ####
	window.addEventListener('scroll', adjustNav);
	body.addEventListener('keyup', event => closeModalOnEsc(event));
	
	listMenuBtn.addEventListener('click', toggleMenu);
	
	function toggleMenu() {
		// listMenuCol.classList.toggle("removed");
		setTimeout(function() {
			listMenuCol.classList.toggle("removed");
		}, 50);
			
		if(!galleryCol.classList.contains("col-12")) {
			galleryCol.classList.add("col-12");
		}
		else {
			galleryCol.classList.remove("col-12");
		}
	}
	
	galleryThumbs.forEach(galleryThumb => {
		galleryThumb.addEventListener("mousedown", hideNav);
	})
	
	// #### FUNCTIONS ####
	// FUNCTIONALITY: ADJUST NAV ON SCROLL
	function adjustNav() {
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
	}
	
	// FUNCTIONALITY: LOWER NAV ON CLICKED CONDITIONS 
	body.addEventListener('click', function(event) {
		if (event.target.classList.contains('pswp__item') 
			|| event.target.classList.contains('pswp-close-svg') 
			|| event.target.classList.contains('pswp__img')
			|| event.target.classList.contains('pswp-close-path')
			|| event.target.classList.contains('pswp__button--close')
			|| event.key === "Escape") {
			nav.style.top = "0";
		}
	})
	
	// FUNCTIONALITY: HIDE NAV
	function hideNav() {
		nav.style.top = "-100%";
	}
	
	// FUNCTIONALITY: CLOSE VIDEO MODAL ON ESC PRESS
	function closeModalOnEsc(event) {
		if(event.key === "Escape") {
			nav.style.top = "0";
			videoplayer.currentTime = 0;
			videoplayer.pause();
			$('#videoModal').modal('hide');
		}
	}
	
	// FUNCTIONALITY: VIDEO PLAYER OPTIONS - ON SHOW
	$('#videoModal').on('shown.bs.modal', function() {
		hideNav();
		videoplayer.play();
	});

	// FUNCTIONALITY: VIDEO PLAYER OPTIONS - ON HIDE
	$('#videoModal').on('hidden.bs.modal', function() {
		nav.style.top = "0";
		videoplayer.currentTime = 0;
		videoplayer.pause();
	});
}