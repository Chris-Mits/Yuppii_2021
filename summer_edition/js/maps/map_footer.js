// MAP INITIALIZATION WITH OPTIONS
function FooterMap() {
	const roadView = Microsoft.Maps.MapTypeId.road;
	const aerialView = Microsoft.Maps.MapTypeId.aerial;
	const grayScaleView = Microsoft.Maps.MapTypeId.grayscale;
	const canvasLightView = Microsoft.Maps.MapTypeId.canvasLight;
	const canvasDarkView = Microsoft.Maps.MapTypeId.canvasDark;
	const birdsEyeView = Microsoft.Maps.MapTypeId.birdseye;
	const streetView = Microsoft.Maps.MapTypeId.streetside;
	const navigationBarMode = Microsoft.Maps.NavigationBarMode;
	const navigationBarOrientation  = Microsoft.Maps.NavigationBarOrientation;
	
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
	// Center the map at Yuppii's location
	const yuppiiLocationFooter = footerMap.getCenter();
	
	// Create a new location and set it at the lighthouse
	const lighthouseLocationFooter = new Microsoft.Maps.Location(40.84363698102243, 25.875074707075843);
	
	// #######################
	// ##### PIN MARKERS #####
	// #######################
	
	// Yuppii Pin Marker
	const yuppiiMiniPin = new Microsoft.Maps.Pushpin(yuppiiLocationFooter, {
		title: 'Yuppii Luna Park',
		description: 'Πάρκο',
		icon: 'js/maps/lunapark_mini.svg'
	});
	
	// Lighthouse Pin Marker
	const lighthouseMiniPin = new Microsoft.Maps.Pushpin(lighthouseLocationFooter, {
		title: 'Φάρος',
		description: 'Φάρος της Αλεξανδρούπολης',
		icon: 'js/maps/lighthouse_mini.svg'
	});
	
	// ######################
	// #### ASSIGNEMENTS ####
	// ######################
	
	// Assign yuppiiPin to the Map
	footerMap.entities.push(yuppiiMiniPin);
	
	// Assign lighthousePin to the Map
	footerMap.entities.push(lighthouseMiniPin);
}