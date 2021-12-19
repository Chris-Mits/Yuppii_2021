class UI {
	constructor() {
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.icon = document.getElementById('w-icon');
		this.feelsLike = document.getElementById('w-feels-like');
		this.humidity = document.getElementById('w-humidity');
		// this.location = document.getElementById('w-location');
		// this.details = document.getElementById('w-details');
		// this.dewpoint = document.getElementById('w-dewpoint');
		// this.wind = document.getElementById('w-wind');
	}
	paint(weather) {
		this.desc.textContent = weather.weather[0].description;
		this.string.textContent = weather.main.temp + '°C';
		this.icon.setAttribute(
			'src',
			`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
		);
		this.feelsLike.textContent = `Αίσθηση: ${weather.main.feels_like}°C`;
		this.humidity.textContent = `Υγρασία: ${weather.main.humidity}%`;
		// this.location.textContent = weather.name;
		// this.wind.textContent = `Ταχύτητα ανέμου: ${weather.wind.speed} m/s`;
		// this.dewpoint.textContent = `Κατεύθυνση ανέμου: ${weather.wind.deg} μοίρες`;
	}
}