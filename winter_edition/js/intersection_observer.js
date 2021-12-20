const preloadImage = img => {
	const dataSrc = img.getAttribute("data-src");
	
	if(!dataSrc) {
		return;
	}
	
	img.src = dataSrc;
};

const observerCallback = (entries, observer) => {
	
	entries.forEach(entry => {
		// If observer intersects with element
		if(entry.isIntersecting) {
			preloadImage(entry.target);
			observer.unobserve(entry.target); // Once observed, unobserve element
		} else {
			return;
		}

	})
	
};

const observerOptions = {
	// Null: Default value, viewport
	root: null,
	// On a scale of 0 to 1
	// If 0: As soon as the element meets with the interceptor, the event will fire off.
	// If 1: 100% of the element has to be present in the viewport for the event to fire off.
	threshold: 0,
	// Positive value: Forces interception to fire higher
	// Negative value: Forces interception to fire lower
	rootMargin: "0px"
	
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// OBSERVABLE ELEMENTS
const images = document.querySelectorAll("[data-src]");
images.forEach(image => observer.observe(image));