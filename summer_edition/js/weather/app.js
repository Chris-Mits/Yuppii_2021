// Storage Object Initialization
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Weather Object Initialization
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// UI Object Initialization
const ui = new UI();
// Event: Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);
// Event: Change Location
// document.getElementById('w-change-btn').addEventListener('click', (e) => {
// 	const city = document.getElementById('city').value;
// 	const country = document.getElementById('country').value;
// 	// Change Location
// 	weather.changeLocation(city, country);
// 	// Set location in local storage
// 	storage.setLocationData(city, country);
// 	// Get and display weather
// 	getWeather();
// 	// Close modal
// 	$('#locModal').modal('hide');
// });

function getWeather() {
	weather.getWeather()
		.then(results => {
			ui.paint(results)
	})
}