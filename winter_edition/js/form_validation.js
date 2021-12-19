// FORM VALIDATION
// Form Keyup Event Listeners
document.getElementById('name').addEventListener('keyup', validateName);
document.getElementById('email').addEventListener('keyup', validateEmail);
document.getElementById('phone').addEventListener('keyup', validatePhone);

// Name input validaton
function validateName() {
	const name = document.getElementById('name');
	const nameDiv = document.getElementById('nameDiv');
	const re = /^[a-zA-Zά-ωΑ-ώ]{5,15}$/;
	// Evaluation
	if(!re.test(name.value)) {
		name.classList.remove('is-valid');
		nameDiv.classList.remove('is-valid');
		name.classList.add('is-invalid');
		nameDiv.classList.add('is-invalid');
		return false;
	}
	else {
		name.classList.remove('is-invalid');
		nameDiv.classList.remove('is-invalid');
		name.classList.add('is-valid');
		nameDiv.classList.add('is-valid');
		return true;
	}
}

// Email input validaton
function validateEmail() {
	const email = document.getElementById('email');
	const emailDiv = document.getElementById('emailDiv');
	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{3})$/;
	// Evaluation
	if(!re.test(email.value)) {
		email.classList.remove('is-valid');
		emailDiv.classList.remove('is-valid');
		email.classList.add('is-invalid');
		emailDiv.classList.add('is-invalid');
		return false;
	}
	else {
		email.classList.remove('is-invalid');
		emailDiv.classList.remove('is-invalid');
		email.classList.add('is-valid');
		emailDiv.classList.add('is-valid');
		return true;
	}
}

// Phone input validaton
function validatePhone() {
	const phone = document.getElementById('phone');
	const phoneDiv = document.getElementById('phoneDiv');
	const re = /^([+][3][0])?([6]{1})([9]{1})([0-9]{8})$/;
	// Evaluation
	if(!re.test(phone.value)) {
		phone.classList.remove('is-valid');
		phoneDiv.classList.remove('is-valid');
		phone.classList.add('is-invalid');
		phoneDiv.classList.add('is-invalid');
		return false;
	}
	else {
		phone.classList.remove('is-invalid');
		phoneDiv.classList.remove('is-invalid');
		phone.classList.add('is-valid');
		phoneDiv.classList.add('is-valid');
		return true;
	}
}

// Prevent User from Submiting if not validated
const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
	const isNameValid = validateName();
	const isEmailValid = validateEmail();
	const isPhoneValid = validatePhone();
	
	if(!isNameValid || !isEmailValid || !isPhoneValid) {
		e.preventDefault();
	}
});