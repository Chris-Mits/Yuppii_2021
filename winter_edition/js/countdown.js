const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.querySelector('.year');
const loading = document.getElementById('loading');
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year dynamically
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
	const currentTime = new Date();
	const difference = newYearTime - currentTime;
	
	const d = Math.floor(difference / 1000 / 60 / 60 / 24);
	const h = Math.floor(difference / 1000 / 60 / 60) % 24;
	const m = Math.floor(difference / 1000 / 60) % 60;
	const s = Math.floor(difference / 1000) % 60;
	
	days.innerHTML = d;
	hours.innerHTML = h < 10 ? '0' + h : h;
	minutes.innerHTML = m < 10 ? '0' + m : m;
	seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Run updateCountdown() every one second
setInterval(updateCountdown, 1000);

updateCountdown();