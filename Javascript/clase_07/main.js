//Gallina Tiene Huevos
// .length

let miString = "Hola mundo";
console.log(miString.length);

//.toUpperCase() / .toLowerCase()

console.log(miString.toUpperCase());
console.log(miString.toLowerCase());

//.replace() / .replaceAll()

let nuevoString = "Hola soy un string soy";

let resultado = miString.toLowerCase().replace("hola", "buenas");

console.log(resultado);

console.log(nuevoString.replace("soy", "somos"));

console.log(nuevoString.replaceAll("soy", "somos"));

//.indexOf()

let textoIndex =
	"Messi es el mejor jugador de la historia porque Messi sabe cuanto pesa la del mundo";

console.log(textoIndex.indexOf("Messi"));
console.log(textoIndex.indexOf("Messi", 10));
console.log(textoIndex.indexOf("stor"));
console.log(textoIndex.indexOf("catso")); //Si no está en el string, devuelve -1

//.trim()

// let textTrim = prompt("Hola");
// console.log(textTrim);
// console.log(textTrim.trim());

//.split()

let stringSplit = "Hola, soy un string";

console.log(stringSplit.split(" "));

//type of

let color = "rojo";
let colores = ["rojo", "verde", "morado", "violeta", "amarillo"];
let number = 8;

console.log(typeof color);
console.log(typeof colores);
console.log(typeof number);

//.repeat()

let nombreRepeat = "Tobias, ";

console.log(nombreRepeat.repeat(4));

//.charAt()

console.log(nombreRepeat.charAt(2));
console.log(nombreRepeat.charAt(99)); //Si parametro no existe en string, devuelve un string vacio

//.concat()

let stringConcat = "Hola, soy el string";
let arrayConcat = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(nombreRepeat.concat(stringConcat));
console.log(nombreRepeat.concat(arrayConcat));
console.log(arrayConcat.concat(nombreRepeat));

//.startsWith()

const textoStart = "Veamos la consola";

// console.log(textoStart.startsWith("Vea"));
// console.log(textoStart.startsWith("Veamos"));
// console.log(textoStart.startsWith("veamos"));
// console.log(textoStart.startsWith("Veamos la consola"));

//.endsWith()

const textoEnd = "Pancho con papitas";

// console.log(textoEnd.endsWith("tas"));
// console.log(textoEnd.endsWith(" papitas"));
// console.log(textoEnd.endsWith(" papitas "));
// console.log(textoEnd.endsWith("Pancho con papitas"));

//.includes()

const textoIncludes = "Veamos la consola";

// console.log(textoIncludes.includes("amos"));
// console.log(textoIncludes.includes("Veamos"));
// console.log(textoIncludes.includes("veamos"));
// console.log(textoIncludes.includes("a con"));

const arrayIncludes = ["rojo", "verde", "morado", "violeta", "amarillo"];

// console.log(arrayIncludes.includes("Rojo"));
// console.log(arrayIncludes.includes("rojo"));
// console.log(arrayIncludes.includes("ojo"));

//.slice()

const textoSlice = "Hola, como están?";

console.log(textoSlice.length);

//Recibe un parametro obligatorio. El caracter que se encuentra en ese index, estará incluido en el string final
console.log(textoSlice.slice(3));
//Recibe un segundo parametro de manera opcional. El slice cortara una porcion del string y NO incluira el caracter ubicado en el segundo parametro
console.log(textoSlice.slice(3, 8));
console.log(textoSlice.slice(11));
