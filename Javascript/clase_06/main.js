const generarFuncion = () => {
	const nombre = "Angel";
	const mostrarNombre = () => {
		return console.log(nombre);
	};

	return mostrarNombre;
};

// const nuevaFuncion = generarFuncion();

// nuevaFuncion();

let persona = {
	nombre: "Lionel",
	edad: 35,
	activo: true,
	equipos: ["Barcelona", "PSG"],
	trofeos: {
		copa: "Champions League",
		liga: "Liga de España",
		seleccion: "Mundial",
	},
};

// console.log(persona);

// console.log(persona.nombre);
// console.log(persona.trofeos.seleccion);
// console.log(persona["trofeos"]);

// persona.pais = "Argentina";

// persona.nombre = "Nuevo nombre";

// persona.edad = ++persona.edad;

// console.log(persona);

let persona2 = {
	nombre: "Lionel",
	edad: 35,
	activo: true,
	equipos: ["Barcelona", "PSG"],
	trofeos: {
		copa: "Champions League",
		liga: "Liga de España",
		seleccion: "Mundial",
	},
	saludar: function () {
		console.log(`Hola, soy ${this.nombre}`);
	},
	saludar2: () => {
		console.log(`Hola, soy ${this.nombre}`);
	},
};

// persona2.saludar();
// persona2.saludar2();

// const values = Object.values(persona2);
// console.log(values);

// const keys = Object.keys(persona2);
// console.log(keys);

// const entries = Object.entries(persona2);
// console.log(entries);

const nums = [1, 2, 3];

const nuevoArray = [...nums];

nuevoArray[0] = "Holis";

console.log(nums);
console.log(nuevoArray);

const sacarPromedio = (nombre, apellido, ...rest) => {
	return console.log(
		`El alumno ${nombre} ${apellido} tiene las siguientes notas ${rest}`
	);
};

// sacarPromedio("Rodrigo", "Nuñez", 1, 2, 5, 5, 6, 8, 7, 4, 5, 6);

const arrayDestructuring = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, segundoElemento] = arrayDestructuring;

console.log(a);
console.log(segundoElemento);
console.log(arrayDestructuring);

const objDestructuring = {
	name: "Lionel",
	age: 35,
	country: "Argentina",
};

const { name, country, age } = objDestructuring;

console.log(
	`Hola! Mi nombre es ${name}, tengo ${age} años y soy de ${country}`
);
