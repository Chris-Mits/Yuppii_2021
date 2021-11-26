// @@@@@@@@@@@@@@@@@@@@
// @@@@ ALL PAGES @@@@@
// @@@@@@@@@@@@@@@@@@@@

// #### GET YEAR SCRIPT ####
$('#year').text(new Date().getFullYear());

// POPOVER INITIALIZATION
$('[data-toggle="popover"]').popover();

// #### BACK TO TOP FUNCTIONALITY ####
const backToTopBtn = document.querySelector('.backToTop');
window.onscroll = function() {showBackToTop()};

function showBackToTop() {
	if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		backToTopBtn.style.bottom = "20px";
	}
	else {
		backToTopBtn.style.bottom = "-100px";
	}
}

function backToTop() {
	document.documentElement.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

// #### LANGUAGE PICKER ####
const selectedLangFlag = document.querySelector(".selected-lang");
const dropDownItems = document.querySelectorAll(".dropdown-item");
const dropDownMenu = document.querySelector(".dropdown-menu");

// On page load, check if screen width is less than 768px
// If true, add class dropdown-menu-right to dropdown-meu
window.onload = function() {
	if (window.screen.width < 768) {
		dropDownMenu.classList.add("dropdown-menu-right");
	}
};

window.addEventListener("resize", function() {
	if (window.matchMedia("(max-width: 768px)").matches) {
    console.log("Screen width is 768px or lower")
		dropDownMenu.classList.add("dropdown-menu-right");
  } 
	else {
    console.log("Screen less than 768px or higher");
		dropDownMenu.classList.remove("dropdown-menu-right");
  }
})

dropDownItems.forEach(function(clickedEl) {
	clickedEl.addEventListener("click", function() {
		let clickedImgSrc = clickedEl.querySelector('.lang').getAttribute("src");
		selectedLangFlag.src = clickedImgSrc;
	})
})

// #### LIGHTBOX SETTINGS ####
const mapLightbox = document.getElementById("singles");
const contactForm = document.getElementById("contact");
if (!mapLightbox && !contactForm) {
	lightbox.option({
		'alwaysShowNavOnTouchDevices': true,
		'resizeDuration': 500,
		'wrapAround': false,
		'fitImagesInViewport': true,
		'disableScrolling': true,
		'albumLabel': "Εικόνα %1 από %2",
		'fadeDuration': 500,
		'imageFadeDuration': 300
	});
	
	(function($) {
		const $window = $(window);
		
		function lightboxOptions() {
			if($window.width() <= 350) {
				lightbox.option({
					'positionFromTop': 150
				})
			}
			else if($window.width() < 450) {
				lightbox.option({
					'positionFromTop': 200
				});
			}
		}
		
		$window.resize(lightboxOptions).trigger('resize');
	})(jQuery);
}

// @@@@@@@@@@@@@@@@@@@@@
// @@@@ INDEX.HTML @@@@@
// @@@@@@@@@@@@@@@@@@@@@
// #### CAROUSEL OPTIONS ####
$('#yuppiiShowcaseCarousel').carousel({
	interval: 5000,
	keyboard: true,
	pause: false,
	ride: 'carousel',
	wrap: true,
	touch: true
});

const gameModal = document.getElementById('gamesModal');
const partiesModal = document.getElementById('partiesModal');
const coffeeModal = document.getElementById('coffeeModal');
const tripsModal = document.getElementById('tripsModal');

if(gameModal && partiesModal && coffeeModal && tripsModal) {
	// When modals hide, fade in backToTop button
	$("#gamesModal").on("hide.bs.modal", function(event) {
		$(".backToTop").fadeIn();
	});
	$("#partiesModal").on("hide.bs.modal", function(event) {
		$(".backToTop").fadeIn();
	});
	$("#coffeeModal").on("hide.bs.modal", function(event) {
		$(".backToTop").fadeIn();
	});
	$("#tripsModal").on("hide.bs.modal", function(event) {
		$(".backToTop").fadeIn();
	});

	// When modals show, fade out backToTop button
	$("#gamesModal").on("show.bs.modal", function(event) {
		$(".backToTop").fadeOut();
	});
	$("#partiesModal").on("show.bs.modal", function(event) {
		$(".backToTop").fadeOut();
	});
	$("#coffeeModal").on("show.bs.modal", function(event) {
		$(".backToTop").fadeOut();
	});
	$("#tripsModal").on("show.bs.modal", function(event) {
		$(".backToTop").fadeOut();
	});
}

// #### CHANGE FIRST ITEM DATA-INTERVAL BASED ON SCREEN WIDTH ####
(function($) {
	const $window = $(window);
	function dataIntervalChange() {
		if($window.width() < 768) {
			$('.carousel-image-0').attr('data-interval', 5000);
		}
		else {
			$('.carousel-image-0').attr('data-interval', 25000);
		}
	}
	$window.resize(dataIntervalChange).trigger('resize');
})(jQuery);

// @@@@@@@@@@@@@@@@@@@@
// @@@@ PARK.HTML @@@@@
// @@@@@@@@@@@@@@@@@@@@


// @@@@@@@@@@@@@@@@@@@@
// @@@@ GAMES.HTML @@@@
// @@@@@@@@@@@@@@@@@@@@
// #### MODAL BUTTON AND MODAL LOGIC ####
const gamesSelectionBtn = document.querySelector('.game-selection-btn');
const gamesModal = document.getElementById('gameSelection');

if(gamesSelectionBtn && gamesModal) {
	// When modal hides, fade in backToTop button & game selection button
	$("#gameSelection").on("hide.bs.modal", function(event) {
		$(".game-selection-btn").fadeIn();
		$(".backToTop").fadeIn();
	});

	// When modal shows, fade out backToTop button & game selection button
	$("#gameSelection").on("show.bs.modal", function(event) {
		$(".game-selection-btn").fadeOut();
		$(".backToTop").fadeOut();
	});
}

function closeModal() {
	setTimeout(function() {
		$("#gameSelection").modal("hide");
	}, 50);
}

// @@@@@@@@@@@@@@@@@@@@@@@
// @@@@ SERVICES.HTML @@@@
// @@@@@@@@@@@@@@@@@@@@@@@
// (function($) {
// 	const $window = $(window);
// 	const images = document.querySelectorAll(".img-resp");
// 	
// 	function changeImgWidth() {
// 		
// 		if ($window.width() < 351) {
// 			for(var i = 0; i < images.length; i++) {
// 				images[i].setAttribute("width", "45");
// 			}
// 		}
// 		else if ($window.width() > 350  && $window.width() < 401) {
// 			for(var i = 0; i < images.length; i++) {
// 				images[i].setAttribute("width", "50");
// 			}
// 		}
// 		else {
// 			for(var i = 0; i < images.length; i++) {
// 				images[i].setAttribute("width", "65");
// 			}
// 		}
// 	}
// 	
// 	$window.resize(changeImgWidth).trigger('resize');
// })(jQuery);


// @@@@@@@@@@@@@@@@@@@@@@
// @@@@ CONTACT.HTML @@@@
// @@@@@@@@@@@@@@@@@@@@@@
// INPUT GROUP RESIZE
(function($) {
	const $window = $(window);
	const inputGroup = document.querySelectorAll(".input-group");
	
	function toggleLgClasses() {
		if($window.width() < 400) {
			for(var i = 0; i < inputGroup.length; i++) {
				inputGroup[i].classList.remove("input-group-lg");
			}
		}
		else {
			for(var i = 0; i < inputGroup.length; i++) {
				inputGroup[i].classList.add("input-group-lg");
			}
		}
	}
	
	$window.resize(toggleLgClasses).trigger('resize');
})(jQuery);