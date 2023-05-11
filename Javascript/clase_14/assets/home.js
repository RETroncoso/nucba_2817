const userName = document.getElementById("user-name");
const logoutBtn = document.getElementById("logout-message");

const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

const showUserName = () => {
	userName.textContent = `${activeUser.name} ${activeUser.lastName}`;
};

const logout = () => {
	if (window.confirm("¿Estás seguro que deseas cerrar sesión?")) {
		sessionStorage.removeItem("activeUser");
		window.location.href = "../index.html";
	}
};

(() => {
	if (!activeUser) {
		window.location.href = "./login.html";
	}
})();

const init = () => {
	showUserName();
	logoutBtn.addEventListener("click", logout);
};

init();
