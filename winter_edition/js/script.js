const body = document.getElementById('body');
const nav = document.getElementById('nav');
const navLogo = document.querySelector('.nav-logo');
const carouselInner = document.querySelector('.carousel-inner');
const galleryThumbs = document.querySelectorAll(".gallery-item");
const videoplayer = document.getElementById("christmas-video");

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
	
	body.addEventListener('keyup', (event) => {
		lowerNav(event);
		closeModalOnEsc(event);
	})
	
	for (var i = 0; i < galleryThumbs.length; i++) {
		galleryThumbs[i].addEventListener("mousedown", raiseNav);
	}
	
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
			|| event.target.classList.contains('pswp-close-path')
			|| event.target.classList.contains('pswp__button--close')
			|| event.key === "Escape") {
			nav.style.top = "0";
		}
	})
	
	// FUNCTIONALITY: RAISE NAV
	function raiseNav() {
		nav.style.top = "-100%";
	}
	
	// FUNCTIONALITY: LOWER NAV
	function lowerNav(event) {
		if (nav.style.top === "-100%" && event.key === "Escape") {
			nav.style.top = "0";
		}
	}
	
	// FUNCTIONALITY: CLOSE VIDEO MODAL ON ESC PRESS
	function closeModalOnEsc(event) {
		// var videoPlayPromise = videoplayer.play();
		// if (videoPlayPromise !== undefined && event.key === "Escape") {
		// 	videoPlayPromise.then(_ => {
		// 		videoplayer.pause();
		// 		nav.style.top = "0";
		// 		videoplayer.currentTime = 0;
		// 		$('#videoModal').modal('hide');
		// 	})
		// }
		if(videoplayer != null && event.key === "Escape") {
			videoplayer.pause();
			nav.style.top = "0";
			videoplayer.currentTime = 0;
			$('#videoModal').modal('hide');
		}
	}
	
	// FUNCTIONALITY: VIDEO PLAYER OPTIONS - ON SHOW
	$('#videoModal').on('show.bs.modal', function() {
		var videoPlayPromise = videoplayer.play();
		if (videoPlayPromise !== undefined) {
			videoPlayPromise.then(message => {
				console.log("Promise Fulfilled: Video started " + message);
				nav.style.top = "-100%";
			})
			.catch(message => {
				console.log(message)
			});
		}
	});

	// FUNCTIONALITY: VIDEO PLAYER OPTIONS - ON HIDE
	$('#videoModal').on('hide.bs.modal', function() {
		// var videoPlayPromise = videoplayer.play();
		// if (videoPlayPromise !== undefined) {
		// 	videoPlayPromise.then(_ => {
		// 		videoplayer.pause();
		// 		nav.style.top = "0";
		// 		videoplayer.currentTime = 0;
		// 	})
		// }
		if (videoplayer != null) {
			videoplayer.pause();
			nav.style.top = "0";
			videoplayer.currentTime = 0;
		}
	});
}



