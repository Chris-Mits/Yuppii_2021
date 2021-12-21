const cards = document.querySelectorAll(".jumbotron .card");

const cardsObserverCallback = (entries, cardsObserver) => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.toggle("appear");
		} else {
			return;
		}
		cardsObserver.unobserve(entry.target);
	})
};

const options = {
	root: null,
	threshold: 0,
	rootMargin: "0px"
};

const cardsObserver = new IntersectionObserver(cardsObserverCallback, options);

cards.forEach(card => cardsObserver.observe(card));