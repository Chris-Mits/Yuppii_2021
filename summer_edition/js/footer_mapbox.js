const mobileView = window.matchMedia("(max-width: 450px)")

// FOOTER MAP: ALL PAGES
const mapFooter = document.getElementById('footer-map');

if(mapFooter) {
	addMultiListeners(window, 'load resize', activatePopup);

	// Create footer map object + options
	const footerMap = new mapboxgl.Map({
		accessToken: 'pk.eyJ1IjoiY2hyaXNtaXRzIiwiYSI6ImNrd3htdGxjZDBmeHAycW1uazhpaXlzMm0ifQ.uo3oGdAyaQ7Uh14YZEdgFQ',
		container: 'footer-map',
		logoPosition: 'bottom-right',
		attributionControl: false,
		dragRotate: true,
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [25.87527330018587, 40.84329687227843],
		pitch: 0,
		bearing: -26,
		zoom: 15.5
	});

	// Create image elements for the map markers
	const footerLighthouseEl = document.createElement("img");
	footerLighthouseEl.src = "../summer_edition/images/content/svg_icons/LighthousePin.svg";
	footerLighthouseEl.style.width = "30px";
	footerLighthouseEl.style.height = "30px";

	const footerParkEl = document.createElement("img");
	footerParkEl.src = "../summer_edition/images/content/svg_icons/YuppiiLogoPin.svg";
	footerParkEl.style.width = "54px";
	footerParkEl.style.height = "54px";
	footerParkEl.style.cursor = "pointer";

	// Create markers + options, and add the image elements to them
	const footerLighthouseMarker = new mapboxgl.Marker({
		element: footerLighthouseEl
	})
	.setLngLat([25.875071771960215, 40.84364041077812])
	.addTo(footerMap);

	const footerParkMarker = new mapboxgl.Marker({
		element: footerParkEl
	})
	.setLngLat([25.87527330018587, 40.84329687227843])
	.addTo(footerMap);


	function addMultiListeners(element, eventTypes, listener) {
		const events = eventTypes.split(' ');
		for (var i = 0, iLen = events.length; i < iLen; i++) {
			element.addEventListener(events[i], listener, false);
		}
	}

	function activatePopup() {
		// const mobileView = window.matchMedia("(max-width: 450px)")
		
		if (mobileView.matches) {
		
			footerParkMarker.setPopup(new mapboxgl.Popup({
				className: 'footer-popup',
				anchor: 'bottom',
				focusAfterOpen: false,
				closeButton: false, 
				closeOnClick: true,
				closeOnMove: false,
				offset: 10 
			})
			.setHTML(`
				<div class="header">
					<img 
						src="../summer_edition/images/logos/Yuppii Logo Full Black.svg" 
						alt="Logo" />
					<h5>Yuppii Luna Park</h5>
				</div>
				<div class="body">
					<p>Λιμάνι Αλεξανδρούπολης</p>
					<p>Κάτω από τον Φάρο</p>
					<p>
						<i class="fas fa-phone-square-alt"></i> Τηλέφωνο: <a href="tel:+306973433980">+306973433980</a>
					</p>
					<p>
						<i class="fas fa-envelope-square"></i> Email: <a href="mailto:yuppiilunapark@gmail.com">yuppiilunapark@gmail.com</a>
					</p>
					<p>
					<i class="fas fa-map-marked-alt"></i> Οδηγίες: <a href="https://www.google.com/maps/dir/?api=1&destination=Yuppii+Luna+Park" target="_blank">Πώς να έρθετε</a>
					</p>
				</div>
			`))
		}
		else {
			delete footerParkMarker.setPopup();
		}
	}
}

// MAIN MAP: CONTACT PAGE
const mapMain = document.getElementById("main-map");

if(mapMain) {
	// Create main map object + options
	const mainMap = new mapboxgl.Map({
		accessToken: 'pk.eyJ1IjoiY2hyaXNtaXRzIiwiYSI6ImNrd3htdGxjZDBmeHAycW1uazhpaXlzMm0ifQ.uo3oGdAyaQ7Uh14YZEdgFQ',
		container: 'main-map',
		center: [25.87527330018587, 40.84329687227843],
		logoPosition: 'bottom-right',
		attributionControl: false,
		style: 'mapbox://styles/mapbox/outdoors-v11',
		pitch: 50,
		bearing: 30,
		zoom: 16.5
	})

	// Create image elements for the map markers
	const mainLighthouseEl = document.createElement("img");
	mainLighthouseEl.src = "../summer_edition/images/content/svg_icons/LighthousePin.svg";
	mainLighthouseEl.style.width = "50px";
	mainLighthouseEl.style.height = "50px";

	const mainParkEl = document.createElement("img");
	mainParkEl.src = "../summer_edition/images/content/svg_icons/YuppiiLogoPin.svg";
	mainParkEl.style.width = "70px";
	mainParkEl.style.height = "70px";
	mainParkEl.style.cursor = "pointer";

	// Specific point for the park popup offset
	const popupPosition = new mapboxgl.Point(35, -5);
	
	function decideAnchor() {
		if(mobileView.matches) {
			return 'bottom';
		}
		else {
			return 'left';
		}
	}
	
	function decideOffset() {
		const popupPosition = new mapboxgl.Point(35, -5);
		if(mobileView.matches) {
			return 15;
		}
		else {
			return popupPosition;
		}
	}

	// Create markers + options, and add the image elements to them
	const lighthouseMarker = new mapboxgl.Marker({
		element: mainLighthouseEl
	})
	.setLngLat([25.875071771960215, 40.84364041077812])
	.addTo(mainMap);

	const parkMarker = new mapboxgl.Marker({
		element: mainParkEl
	})
	.setPopup(new mapboxgl.Popup({
		className: 'main-popup',
		focusAfterOpen: false,
		closeButton: false, 
		closeOnClick: true,
		closeOnMove: false,
		anchor: decideAnchor(),
		offset: decideOffset()
	})
	.setHTML(`
		<div class="header">
			<img 
				src="../summer_edition/images/logos/Yuppii Logo Full Black.svg" 
				alt="Logo" />
			<h5>Yuppii Luna Park</h5>
		</div>
		<div class="body">
			<p>Λιμάνι Αλεξανδρούπολης</p>
			<p>Κάτω από τον Φάρο</p>
			<p>
				<i class="fas fa-phone-square-alt"></i> Τηλέφωνο: <a href="tel:+306973433980">+306973433980</a>
			</p>
			<p>
				<i class="fas fa-envelope-square"></i> Email: <a href="mailto:yuppiilunapark@gmail.com" target="_blank">yuppiilunapark@gmail.com</a>
			</p>
			<p>
			<i class="fas fa-map-marked-alt"></i> Οδηγίες: <a href="https://www.google.com/maps/dir/?api=1&destination=Yuppii+Luna+Park" target="_blank">Πώς να έρθετε</a>
			</p>
		</div>
	`))
	.setLngLat([25.87527330018587, 40.84329687227843])
	.addTo(mainMap);
}

