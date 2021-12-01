// #### NAVBAR SCROLL SHRINK ####
const nav = document.querySelector('.navbar');
const carouselInner = document.querySelector('.carousel-inner');
const navLogo = document.querySelector('.nav-logo')

window.addEventListener('scroll', fixNav);

function fixNav() {
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

// #### GET YEAR SCRIPT ####
$('#year').text(new Date().getFullYear());

// #### CAROUSEL OPTIONS ####
$('#xmas-carousel').carousel({
	interval: 5000,
	keyboard: true,
	pause: false,
	ride: 'carousel',
	wrap: true,
	touch: true
});

// #### VIDEO PLAYER OPTIONS ####
$('#videoModal').on('shown.bs.modal', function() {
	var videoplayer = document.getElementById("videoplayer");
	var nav = document.getElementById("nav")
	if (videoplayer != null) {
		nav.style.top = "-100%";
		videoplayer.play();
	}
});
$('#videoModal').on('hidden.bs.modal', function() {
	var videoplayer = document.getElementById("videoplayer");
	var nav = document.getElementById("nav");
	if (videoplayer != null) {
		nav.style.top = "0";
		videoplayer.pause();
		videoplayer.currentTime = 0;
	}
});

// #### GALLERY NAVBAR FIX ####
const galleryThumbs = document.querySelectorAll(".gallery-item");
const body = document.getElementById('body');

body.addEventListener('click', function(event) {
	var nav = document.getElementById("nav");
	
	if (event.target.classList.contains('pswp__item') 
	 || event.target.classList.contains('pswp-close-svg') 
	 || event.target.classList.contains('pswp-close-path')
	 || event.target.classList.contains('pswp__button--close')
	 || event.key === "Escape") {
		nav.style.top = "0";
	}
})

body.addEventListener("keyup", function(event) {
	var nav = document.getElementById("nav");
	
	if (nav.style.top === "-100%" 
	 && event.key === "Escape") {
		nav.style.top = "0";
	}
})

for (var i = 0; i < galleryThumbs.length; i++) {
	galleryThumbs[i].addEventListener("mousedown", raiseNav);
}

function raiseNav() {
	var nav = document.getElementById("nav");
	nav.style.top = "-100%";
}

// GOOGLE INVISIBLE reCAPTCHA
function onSubmit(token) {
	document.getElementById("demo").submit();
}