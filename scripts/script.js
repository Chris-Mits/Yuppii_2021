const root = document.querySelector(":root");
const container = document.querySelector('.container');
const changeLeftBtn = document.querySelector('.change-left-btn');
const changeLeftBtnImg = document.querySelector('.change-left-btn img');
const changeRightBtn = document.querySelector('.change-right-btn');
const changeRightBtnImg = document.querySelector('.change-right-btn img');
const headers = document.querySelectorAll('.header');
const subHeaders = document.querySelectorAll('.sub-header');
const btns = document.querySelectorAll('.btn');

window.addEventListener("mouseup", initialSelectionScreen);

window.addEventListener("DOMContentLoaded", function() {
	setTimeout(addTransitions, 200);
	console.log("Added transitions");
});

changeLeftBtn.addEventListener('mousedown', function() {
	checkContainerAndChangeScreen();
	transformations(0);
});

changeRightBtn.addEventListener('mousedown', function() {
	checkContainerAndChangeScreen();
	transformations(1);
});

// GETS THE INITIAL CLICKED OR TAPPED POSITION ON THE SCREEN
function initialSelectionScreen(click) {
	// IF left side of the screen is clicked
	if (click.clientX < window.screen.width / 2
	&& !container.classList.contains("hover-left")
	&& !container.classList.contains("hover-right")) {
		console.log("Left Side Was Clicked");
		container.classList.remove('hover-right');
		container.classList.add('hover-left');
		changeLeftBtn.style.visibility = "hidden";
		changeLeftBtn.style.opacity = "0.0";
		changeRightBtn.style.visibility = "visible";
		changeRightBtn.style.opacity = "1.0";
		root.style.setProperty("--left-opacity", "0");
		transformations(0);
	}
	
	// IF right side of the screen is clicked
	else if (click.clientX > window.screen.width / 2
	&& !container.classList.contains("hover-right")
	&& !container.classList.contains("hover-left")) {
		console.log("Right Side Was Clicked");
		container.classList.remove('hover-left');
		container.classList.add('hover-right');
		changeRightBtn.style.visibility = "hidden";
		changeRightBtn.style.opacity = "0.0";
		changeLeftBtn.style.visibility = "visible";
		changeLeftBtn.style.opacity = "1.0";
		root.style.setProperty("--right-opacity", "0");
		transformations(1);
	}
	// IF either left or right side of the screen is deployed or button is pressed, return
	else {
		console.log("Left/Right side is already deployed or button was pressed");
		return;
	}
}

// CHECKS THE CONTAINER FOR CLASSES NAMED hover-right OR hover-left
// IF IT FINDS EITHER SUCH CLASS, IT REMOVES IT AND PERFRORMS ACTIONS 
function checkContainerAndChangeScreen() {
	if (container.classList.contains("hover-right")) {
		container.classList.remove("hover-right");
		container.classList.add("hover-left");
		changeLeftBtn.style.visibility = "hidden";
		changeLeftBtn.style.opacity = "0.0";
		changeRightBtn.style.visibility = "visible";
		changeRightBtn.style.opacity = "1.0";
		root.style.setProperty("--left-opacity", "0");
	}
	else if (container.classList.contains("hover-left")) {
		container.classList.remove("hover-left");
		container.classList.add("hover-right");
		changeRightBtn.style.visibility = "hidden";
		changeRightBtn.style.opacity = "0.0";
		changeLeftBtn.style.visibility = "visible";
		changeLeftBtn.style.opacity = "1.0";
		root.style.setProperty("--right-opacity", "0");
	}
	else {
		console.log("Could not find hover-left / hover-right class on container");
		return;
	}
}

function transformations(selectedItem) {
	// Headers Styling
	for (var i = 0; i < headers.length; i++) {
		headers[selectedItem].style.top = "10%";
		
		if (window.matchMedia("(max-width: 430px)").matches) {
			headers[selectedItem].style.fontSize = "2rem";
		}
		else {
			headers[selectedItem].style.fontSize = "2.6rem";
		}
	}
	
	// Sub-Headers Styling
	for (i = 0; i < subHeaders.length; i++) {
		subHeaders[selectedItem].style.top = "20%";
		
		if(window.matchMedia("(max-width: 430px").matches) {
			subHeaders[selectedItem].style.fontSize = "1.4rem";
		}
		else {
			subHeaders[selectedItem].style.fontSize = "1.8rem";
		}
	}
	
	// Buttons Styling
	for (i = 0; i < btns.length; i++) {
		btns[selectedItem].style.top = "85%";
		btns[selectedItem].style.visibility = "visible";
		btns[selectedItem].style.opacity = "1.0";
		btns[0].style.backgroundColor = "var(--yuppii-winter-btn2)";
		btns[0].style.borderColor = "var(--yuppii-winter-btn2)";
		btns[1].style.backgroundColor = "var(--yuppii-summer2)";
		btns[1].style.borderColor = "var(--yuppii-summer2)";
		
		if (window.matchMedia("(max-width: 430px)").matches) {
			btns[selectedItem].style.padding = "0.8rem 1.8rem";
			btns[selectedItem].style.fontSize = "16px";
		}
		else {
			btns[selectedItem].style.padding = "1rem 2.5rem";
			btns[selectedItem].style.fontSize = "20px";
		}
	}
	
	if(window.matchMedia("(max-width: 430px").matches) {
		changeLeftBtnImg.style.width = "25px";
		changeLeftBtnImg.style.height = "25px";
		changeRightBtnImg.style.width = "25px";
		changeRightBtnImg.style.height = "25px";
	}
	else {
		changeLeftBtnImg.style.width = "40px";
		changeLeftBtnImg.style.height = "40px";
		changeRightBtnImg.style.width = "40px";
		changeRightBtnImg.style.height = "40px";
	}
}

function addTransitions() {
	const transitionEffect = "all var(--speed) ease-in-out";
	
	changeRightBtn.style.transition = transitionEffect;
	changeLeftBtn.style.transition = transitionEffect;
	
	for (i = 0; i < headers.length; i++) {
		headers[i].style.transition = transitionEffect;
	}
	
	for (i = 0; i < subHeaders.length; i++) {
		subHeaders[i].style.transition = transitionEffect;
	}
	
	for (i = 0; i < btns.length; i++) {
		btns[i].style.transition = transitionEffect;
	}
}