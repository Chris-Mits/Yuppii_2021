class Weather {
	constructor(city, country) {
		this.apiKey = 'c7b3d961096784e555ba293876401f6b';
		this.city = city;
		this.country = country;
	}
	// Fetch weather from API
	async getWeather() {
		const response = await fetch(`
			https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric&lang=el
		`);
		const responseData = await response.json();
		return responseData;
	}
	// Change weather location
	// changeLocation(city, country) {
	// 	this.city = city;
	// 	this.country = country;
	// }
}