let yuppiiInfoBox;
	
// MAP INITIALIZATION WITH OPTIONS
function GetMap() {
	const roadView = Microsoft.Maps.MapTypeId.road;
	const aerialView = Microsoft.Maps.MapTypeId.aerial;
	const grayScaleView = Microsoft.Maps.MapTypeId.grayscale;
	const canvasLightView = Microsoft.Maps.MapTypeId.canvasLight;
	const canvasDarkView = Microsoft.Maps.MapTypeId.canvasDark;
	const birdsEyeView = Microsoft.Maps.MapTypeId.birdseye;
	const streetView = Microsoft.Maps.MapTypeId.streetside;
	const navigationBarMode = Microsoft.Maps.NavigationBarMode;
	const navigationBarOrientation  = Microsoft.Maps.NavigationBarOrientation;
	
	const map = new Microsoft.Maps.Map('#mainMap', {
		credentials: 'Amq-0500oRjDNjIW-3blLCDL7jQ7s8g6sN-L7zclaXVv9hEIl7HnsXBuhOQKIK8y',
		mapTypeId: aerialView,
		center: new Microsoft.Maps.Location(40.84329501424046, 25.875277786581645),
		navigationBarMode: navigationBarMode.minified,
		navigationBarOrientation: navigationBarOrientation.horizontal,
		supportedMapTypes: [roadView, aerialView],
		showDashboard: true,
		zoom: 16
	});
	
	const footerMap = new Microsoft.Maps.Map('#footerMap', {
		credentials: 'AgGHVMq1LkS2nEhMpxTHbq0J6wc3TQGLPu7Uof4_i_4x9ndHVSIWMU26wDykFREh',
		mapTypeId: roadView,
		center: new Microsoft.Maps.Location(40.84329501424046, 25.875277786581645),
		navigationBarMode: navigationBarMode.minified,
		navigationBarOrientation: navigationBarOrientation.horizontal,
		supportedMapTypes: [roadView, aerialView],
		showDashboard: false,
		zoom: 15
	});

	
	// #####################
	// ##### LOCATIONS #####
	// #####################
	// Set Yuppii location at the center of the map
	const yuppiiLocation = map.getCenter();
	const yuppiiLocationFooter = footerMap.getCenter();
	
	// Set Lighthouse location at the map
	const lighthouseLocation = new Microsoft.Maps.Location(40.84363698102243, 25.875074707075843);
	const lighthouseLocationFooter = new Microsoft.Maps.Location(40.84363698102243, 25.875074707075843);
	
	// #######################
	// ##### PIN MARKERS #####
	// #######################
	// Yuppii Pin Marker
	const yuppiiPin = new Microsoft.Maps.Pushpin(yuppiiLocation, {
		title: 'Yuppii Luna Park',
		description: 'Πάρκο',
		icon: 'js/maps/Luna Park Pin.svg'
	});
	
	// Yuppii Mini Pin Marker
	const yuppiiMiniPin = new Microsoft.Maps.Pushpin(yuppiiLocationFooter, {
		title: 'Yuppii Luna Park',
		description: 'Πάρκο',
		icon: 'js/maps/lunapark_mini.svg'
	});
	
	// Lighthouse Pin Marker
	const lighthousePin = new Microsoft.Maps.Pushpin(lighthouseLocation, {
		title: 'Φάρος',
		description: 'Φάρος της Αλεξανδρούπολης',
		icon: 'js/maps/Lighthouse Pin.svg'
	});
	
	// Lighthouse Mini Pin Marker
	const lighthouseMiniPin = new Microsoft.Maps.Pushpin(lighthouseLocationFooter, {
		title: 'Φάρος',
		description: 'Φάρος της Αλεξανδρούπολης',
		icon: 'js/maps/lighthouse_mini.svg'
	});
	
	// ###################
	// #### INFOBOXES ####
	// ###################
	// Create a custom infobox template with HTML
	const infoboxTemplate = `
		<div class="customInfobox">
			{closeBtn}
			<div class="infobox-header">{title}</div>
			<div class="infobox-body">{description}</div>
		</div>
	`;
	
	// Create Title, Description & Close Button for the custom infobox
	const title = `
		<img class="infobox-logo" src="js/maps/yuppii.svg"/>
		<h5 class="infobox-title">Yuppii Luna Park</h5>
	`;
	const description = `
		<p>
			Κάτω από τον Φάρο Αλεξανδρούπολης
		</p>
		<a href="https://yuppii.gr" target="_blank">
			yuppii.gr
		</a>
	`;
	const closeBtn = `
		<a class="closeBtn" href="javascript: closeInfobox()">
			<img src="js/maps/closeBtn.svg"/>
		</a>
	`;
	
	// Create the custom infobox and pass title, description and closeBtn variables
	yuppiiInfoBox = new Microsoft.Maps.Infobox(yuppiiLocation, {
		htmlContent: infoboxTemplate
			.replace('{title}', title)
			.replace('{description}', description)
			.replace('{closeBtn}', closeBtn),
		visible: false
	});
	
	// ######################
	// #### ASSIGNEMENTS ####
	// ######################
	// Assign yuppiiPin to the Map
	map.entities.push(yuppiiPin);
	
	// Assign yuppiiMiniPin to the Map
	footerMap.entities.push(yuppiiMiniPin);
	
	// Assign lighthousePin to the Map
	map.entities.push(lighthousePin);
	
	// Assign lighthouseMiniPin to the Map
	footerMap.entities.push(lighthouseMiniPin);
	
	// Assign the yuppiiInfoBox to a map instance.
	yuppiiInfoBox.setMap(map);
	
	// ########################
	// #### EVENT HANDLERS ####
	// ########################
	// Add a click event handler to the yuppiiPin.
	Microsoft.Maps.Events.addHandler(yuppiiPin, 'click', yuppiiPinClicked);
}

function yuppiiPinClicked() {
	yuppiiInfoBox.setOptions({ visible: true});
	console.log(yuppiiInfoBox.getVisible());
}

function closeInfobox() {
	yuppiiInfoBox.setOptions({ visible: false});
	console.log(yuppiiInfoBox.getVisible());
}
