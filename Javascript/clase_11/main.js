const h2Alert = document.getElementById("h2Alert");

// h2Alert.onclick = () => {
// 	alert("Soy un evento desde JS");
// };

// console.dir(h2Alert);

// h2Alert.addEventListener("click", () => {
// 	alert("Estoy en el escuchador de eventos!");
// });

const mostrarAlerta = () => {
	alert("Estoy en el escuchador de eventos!");
};

h2Alert.addEventListener("click", mostrarAlerta);

const inputBlur = document.getElementById("inputBlur");

const focusFunction = () => {
	inputBlur.style.backgroundColor = "yellow";
};

const blurFunction = () => {
	inputBlur.style.backgroundColor = "";
};

inputBlur.addEventListener("focus", focusFunction);
inputBlur.addEventListener("blur", blurFunction);

const inputChange = document.getElementById("inputChange");

const changeFunction = (e) => {
	console.log(e.target.value);
};

inputChange.addEventListener("change", changeFunction);

const form = document.getElementById("form");
const user = document.getElementById("user");
const pass = document.getElementById("pass");

const submitFunction = (e) => {
	e.preventDefault();
	console.log(user.value);
	console.log(pass.value);
	form.reset();
};

form.addEventListener("submit", submitFunction);

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
	// boton.classList.add("btn-primary");
	// boton.classList.remove("btn-primary");
	boton.classList.toggle("btn-primary");
});

const img = document.getElementById("img");
const changeImg = document.getElementById("imgChange");

changeImg.addEventListener("click", () => {
	// img.setAttribute("src", "./img/messi2.jpg");
	// img.removeAttribute("src");
	// img.src = "./img/messi1.jpg";
	img.src = `./img/messi${Math.floor(Math.random() * 3)}.jpg`;
});

console.log(Math.random() * 3);
