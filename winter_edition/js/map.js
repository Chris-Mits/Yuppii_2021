const map = new mapboxgl.Map({
	accessToken: 'pk.eyJ1IjoiY2hyaXNtaXRzIiwiYSI6ImNrd200Nzk0MzI4OXEycG1qMG5sbGprdGgifQ.YwaTuqP03LF5ShbTRpqz4A',
	container: 'map',
	logoPosition: 'bottom-right',
	attributionControl: false,
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [25.87527330018587, 40.84329687227843],
	pitch: 50,
	bearing: 20,
	zoom: 16
});

const zoomBtns = new mapboxgl.NavigationControl({
	showCompass: false,
	visualizePitch: false
});
map.addControl(zoomBtns, 'top-right');

const parkEl = document.createElement("img");
parkEl.src = "../winter_edition/images/icons/map_icons/yuppi_pin.svg";
parkEl.style.width = "50px";
parkEl.style.height = "50px";

const lighthouseEl = document.createElement("img");
lighthouseEl.src = "../winter_edition/images/icons/map_icons/lighthouse_pin.svg";
lighthouseEl.style.width = "40px";
lighthouseEl.style.height = "40px";

const lighthouseMarker = new mapboxgl.Marker({
	element: lighthouseEl,
})
	.setLngLat([25.875071771960215, 40.84364041077812])
	.addTo(map);

const christmasLightHouseMarker = new mapboxgl.Marker({
	element: parkEl,
})
	.setPopup(new mapboxgl.Popup({ closeButton: false, closeOnClick: true, offset: 23 })
	.setHTML(`
		<div class="header">
			<img 
				src="../winter_edition/images/icons/map_icons/logo.svg" 
				alt="Logo" />
			<h5>The Christmas Lighthouse</h5>
		</div>
		<div class="body">
			<p>Κάτω από τον Φάρο Αλεξανδρούπολης</p>
			<p>
				<i class="fas fa-phone-square-alt"></i> Τηλέφωνο: <a href="tel:123-456-7890">+306973433980</a>
			</p>
			<p>
				<i class="fas fa-directions"></i> Οδηγίες: <a href="https://www.google.com/maps/dir/?api=1&destination=Yuppii+Luna+Park" target="_blank">Πώς να έρθετε</a>
			</p>
		</div>
	`))
	.setLngLat([25.87527330018587, 40.84329687227843])
	.addTo(map);