class UI {
	constructor() {
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.details = document.getElementById('w-details');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.feelsLike = document.getElementById('w-feels-like');
		this.dewpoint = document.getElementById('w-dewpoint');
		this.wind = document.getElementById('w-wind');
	}
	paint(weather) {
		this.location.textContent = weather.name;
		this.desc.textContent = weather.weather[0].description;
		this.string.textContent = weather.main.temp + '°C';
		this.icon.setAttribute(
			'src',
			`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
		);
		this.feelsLike.textContent = `Αίσθηση: ${weather.main.feels_like}°C`;
		this.humidity.textContent = `Υγρασία: ${weather.main.humidity}%`;
		// this.wind.textContent = `Ταχύτητα ανέμου: ${weather.wind.speed} m/s`;
		// this.dewpoint.textContent = `Κατεύθυνση ανέμου: ${weather.wind.deg} μοίρες`;
	}
}