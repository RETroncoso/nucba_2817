const hola = () => {
	console.log("Hola");
};

const nucba = () => {
	console.log("Nucba");
};

const init = () => {
	hola();
	nucba();
};

// init();

const obj1 = {
	valor: 1,
};

const obj2 = obj1;

// console.log(obj1);

// console.log(obj2);

obj2.valor = 2;

// console.log(obj1 === obj2);

// console.log(obj1.valor);
// console.log(obj2.valor);

const obj3 = { ...obj1 };
obj3.valor = 3;

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

const ejemploNumero1 = 20;

const ejemploNumero2 = 20;

// console.log(ejemploNumero1 === ejemploNumero2);

const ejemploObjeto1 = {
	id: 1,
	dni: 11222333,
	nombre: "Lionel",
	apellido: "Messi",
	domicilio: "Calle Falsa 123",
	fNacimiento: "05/01/1991",
};

const ejemploObjeto2 = {
	id: 1,
	dni: 11222333,
	nombre: "Lionel",
	apellido: "Messi",
	domicilio: "Calle Falsa 123",
};

// console.log(ejemploObjeto1 === ejemploObjeto2);

// console.log(ejemploObjeto1.nombre === ejemploObjeto2.nombre);

// console.log("Estoy primero");

// setTimeout(() => {
// 	console.log("Estoy Francia");
// }, 2000);

// console.log("Estoy tercero");

const miFnRecursiva = () => {
	console.log("Llamando");
	miFnRecursiva();
};

// EJECUTAR SOLO SI QUERES ROMPER TODDY
// miFnRecursiva();

const spoiler = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

console.log(spoiler);
