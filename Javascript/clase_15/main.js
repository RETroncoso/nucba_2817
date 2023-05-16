// const pizzas = [
// 	{
// 		id: 1,
// 		nombre: "pizza de Muzzarella",
// 		precio: 500,
// 		ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
// 		imagen: "./img/muzzarella.png",
// 	},

// 	{
// 		id: 2,
// 		nombre: "pizza de Cebolla",
// 		precio: 1500,
// 		ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
// 		imagen: "./img/cebolla.png",
// 	},

// 	{
// 		id: 3,
// 		nombre: "pizza 4 Quesos",
// 		precio: 1380,
// 		ingredientes: [
// 			"Muzzarella",
// 			"Tomate",
// 			"Queso Azul",
// 			"Parmesano",
// 			"Roquefort",
// 		],
// 		imagen: "./img/4quesos.png",
// 	},

// 	{
// 		id: 4,
// 		nombre: "pizza Especial",
// 		precio: 1000,
// 		ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
// 		imagen: "./img/especial.png",
// 	},

// 	{
// 		id: 5,
// 		nombre: "pizza con Anana",
// 		precio: 600,
// 		ingredientes: ["Muzzarella", "Tomate", "Anana"],
// 		imagen: "./img/anana.png",
// 	},
// ];

// const ejemplo = pizzas.map((pizza) => {
// 	return pizza.id;
// });

// const loQueElUsuarioEscribio = 4;

// console.log(ejemplo.includes(loQueElUsuarioEscribio));

// const ejemploSome = pizzas.some((pizza) => {
// 	return loQueElUsuarioEscribio == pizza.id;
// });

// console.log(ejemploSome);

// setTimeout(() => {
// 	console.log("Hola");
// }, 3000);

// setTimeout( () => {

// }, 5000)

const form = document.getElementById("form");
const input = document.getElementById("input");
const caja = document.getElementById("caja");

let itemsARenderizar = JSON.parse(localStorage.getItem("itemsGuardados")) || [];

const saveOnLocalStorage = () => {
	localStorage.setItem("itemsGuardados", JSON.stringify(itemsARenderizar));
};

const renderItems = () => {
	caja.innerHTML = itemsARenderizar
		.map((item) => {
			return `
            <p class="holis"> ${item} </p>
        `;
		})
		.join("");
};

const submitHandler = (e) => {
	e.preventDefault();

	let itemNuevo = input.value;

	itemsARenderizar = [...itemsARenderizar, itemNuevo];

	input.value = "";

	renderItems();
	saveOnLocalStorage();
};

const init = () => {
	form.addEventListener("submit", submitHandler);
	renderItems();
};

init();
