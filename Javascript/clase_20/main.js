const btnDeleteInterval = document.querySelector(".limpiarIntervalo");

const saludar = () => {
	console.log("Hola Mundo");
};

// let timeoutId = setTimeout(saludar, 2000);

// console.log(timeoutId);

// clearTimeout(timeoutId);

const contar = () => {
	console.log("Contando...");
};

// let intervalId = setInterval(contar, 1000);

// console.log(intervalId);

// btnDeleteInterval.addEventListener("click", () => clearInterval(intervalId));

//Promesas

// const promesa = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		let numeroAleatorio = Math.random();

// 		if (numeroAleatorio > 0.5) {
// 			resolve("La promesa se resolvió correctamente");
// 		} else {
// 			reject(new Error("La promesa no se resolvió correctamente"));
// 		}
// 	}, 1000);
// });

// promesa
// 	.then((mensaje) => console.log(mensaje))
// 	.then(console.log("Holis"))
// 	.catch((error) => console.error(error));

let pokemonRecibido;

const busqueda = fetch("https://pokeapi.co/api/v2/pokemon/eevee")
	.then((res) => res.json())
	.then((data) => (pokemonRecibido = data))
	.catch((err) => console.log(err));

setTimeout(() => {
	console.log(pokemonRecibido);
}, 500);
