//Length

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array.length);

//.indexOf()

const arrayIndexOf = [1, 2, 3, 4, 5, 6, "Nucba"];

// console.log(arrayIndexOf.indexOf(6));
// console.log(arrayIndexOf.indexOf(4));
// console.log(arrayIndexOf.indexOf("Nucba"));
// console.log(arrayIndexOf.indexOf("Nuc"));
// console.log(arrayIndexOf.indexOf("Holis"));

// .toString()

const animales = [
	"gato",
	"perro",
	"conejo",
	"hamster",
	true,
	8,
	"loro",
	{ name: "Lionel", surname: "Messi" },
];

// console.log(animales.toString());

// .concat()

const animales1 = ["gato", "perro", "conejo", "hamster"];
const animales2 = ["lobo", "tortuga", "tatu carreta", "ornitorrinco"];

const arrayConcatenado = animales1.concat(animales2);

arrayConcatenado[3] = "pez";

// console.log(animales1);
// console.log(animales2);
// console.log(arrayConcatenado);

const arrayAManipular = ["Lucrecia", "Facu", "Candela", "Tobias", "Carlos"];

// .push()

// console.log(arrayAManipular.push("Yanina"));
// console.log(arrayAManipular);

// .unshift()

// console.log(arrayAManipular.unshift("Yanina"));
// console.log(arrayAManipular);

// .pop()

// console.log(arrayAManipular.pop());
// console.log(arrayAManipular);

// .shift()

// console.log(arrayAManipular.shift());
// console.log(arrayAManipular);

// .join()

// console.log(arrayAManipular.join(" - "));

// .reverse()

// let arrayParaReverse = [...arrayAManipular];

// arrayParaReverse.reverse();

// console.log(arrayAManipular);
// console.log(arrayParaReverse);

// .slice()

// console.log(arrayAManipular.slice(1, 3));

const numerosParaMetodos = [1, 2, 3, 4, 5, 6, 7, 8];

// .forEach()

numerosParaMetodos.forEach((numero) => {
	console.log(numero);
});

// .map()

const duplicados = numerosParaMetodos.map((numero) => {
	return numero * 2;
});

console.log(duplicados);

// .filter()

const mayoresDe3 = numerosParaMetodos.filter((numero) => {
	return numero > 3;
});

console.log(mayoresDe3);

// .find()

const primerMayorA3 = numerosParaMetodos.find((numero) => {
	return numero > 3;
});

console.log(primerMayorA3);

// .every()

const todosMenoresA10 = numerosParaMetodos.every((numero) => {
	return numero < 10;
});

console.log(todosMenoresA10);

const todosMenoresA4 = numerosParaMetodos.every((numero) => {
	return numero < 4;
});

console.log(todosMenoresA4);

// .some()

const algunoMenorA10 = numerosParaMetodos.some((numero) => {
	return numero < 10;
});

console.log(algunoMenorA10);

const algunoMenorA4 = numerosParaMetodos.some((numero) => {
	return numero < 4;
});

console.log(algunoMenorA4);

const algunoMenorA0 = numerosParaMetodos.some((numero) => {
	return numero < 0;
});

console.log(algunoMenorA0);

// .sort()

const arraySort = [1, 5, 8, 12, 45, 89, 87, 26, 34, 24];

console.log(arraySort.sort());

console.log(
	arraySort.sort((a, b) => {
		return a - b;
	})
);

// .reduce()

const suma = numerosParaMetodos.reduce((acumulador, valor) => {
	return acumulador + valor;
});

console.log(suma);

const palabras = ["Hola", "Mundo", "!"];

const frase = palabras.reduce((acumulador, valor) => {
	return acumulador + " " + valor;
}, "¡");

console.log(frase);
