function saludar() {
	console.log("Hola! Soy una función");
}

// saludar();

// function sumar() {
// 	let num1 = 5;
// 	let num2 = 10;

// 	let result = num1 + num2;

// 	console.log(result);
// }

// sumar();

function saludoPersonal(nombre) {
	console.log(`Hola ${nombre}`);
}

// saludoPersonal("Angel");
// saludoPersonal("Giuliana");
// saludoPersonal();

function descripcionPersonal(nombre, edad = 35) {
	console.log(`Hola, soy ${nombre} y tengo ${edad} años`);
}

// descripcionPersonal("Leo");

// function sumar(num1, num2) {
// 	return num1 + num2;
// }

// console.log(sumar(2, 5));

function imprimirSiEsMenorA10(num) {
	if (num > 10) {
		return;
	}
	console.log(num);
}

// imprimirSiEsMenorA10(25);

// const nombreFuncion = () => {
//     //Aca va el codigo
// };

const sumar = (a, b) => {
	return a + b;
};

// console.log(sumar(2, 6));

const sumarAcotado = (a, b) => a + b;

// console.log(sumarAcotado(10, 10));

let cuentaAtras = (numero) => {
	if (numero === 0) {
		return;
	}

	console.log(numero);

	return cuentaAtras(numero - 1);
};

// cuentaAtras(10);

const duplicar = (num) => {
	num = num + num;

	console.log(num);

	if (num > 100) {
		return console.log("Te pasaste, el numero subio un monton");
	}

	return duplicar(num);
};

// duplicar(1);

//Callback
//Es una funcion que se pasa como argumento a otra funcion;

const alertHola = (nombre) => {
	return alert(`Hola ${nombre}`);
};

// alertHola("Pablo");

const consoleHola = (nombre) => {
	return console.log(`Hola ${nombre}`);
};

// consoleHola("Tobias");

const procesarEntrada = (callback) => {
	const nombre = prompt("Por favor, ingresá tu nombre");

	callback(nombre);
};

// procesarEntrada(alertHola);
procesarEntrada(consoleHola);
