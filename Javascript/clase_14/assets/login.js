const loginForm = document.getElementById("login--form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("form__error");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToSessionStorage = (user) => {
	sessionStorage.setItem("activeUser", JSON.stringify(user));
};

const showError = (message) => {
	errorMessage.textContent = message;
};

const isEmpty = (input) => {
	return !input.value.trim().length;
};

const isExistingEmail = (input) => {
	return users.some((user) => user.email === input.value.trim());
};

const isMatchingPass = () => {
	const user = users.find((user) => user.email === emailInput.value.trim());
	return user.password === passwordInput.value.trim();
};

const isValidAccount = () => {
	let valid = false;

	if (isEmpty(emailInput)) {
		showError("Por favor, complete los campos");
		return;
	}

	if (isEmpty(passwordInput)) {
		showError("Por favor, complete los campos");
		return;
	}

	if (!isExistingEmail(emailInput)) {
		showError("El email ingresado no es válido");
		return;
	}

	if (!isMatchingPass()) {
		showError("Los datos ingresados son incorrectos");
		return;
	}

	valid = true;
	errorMessage.textContent = "";
	return valid;
};

const login = (e) => {
	e.preventDefault();

	if (isValidAccount()) {
		const user = users.find((user) => user.email === emailInput.value.trim());
		console.log(user);
		saveToSessionStorage(user);
		window.location.href = "./home.html";
	}
};

const init = () => {
	loginForm.addEventListener("submit", login);
};

init();
