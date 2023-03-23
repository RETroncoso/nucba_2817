//Hoisting
// console.log(nombre);
// var nombre = "Ignacio";

// console.log(nombre);
// let nombre = "Ignacio";

//Scope

// var a = "Estoy en global";
// let e = "Estoy afuera del contexto";

// {
// 	var b = "Estoy en bloque";
// }

// {
// 	let c = "Estoy en bloque C";
// }

// {
// 	const d = "Estoy en bloque D";
// 	console.log(a);
// 	console.log(b);
// 	console.log(e);
// }

// console.log(a);
// console.log(b);
// // console.log(c);
// // console.log(d);

//Operadores

// console.log(18 == "18");
// console.log(18 === "18");

// console.log(18 != "18");
// console.log(18 !== "18");

// console.log(9 > 9);
// console.log(9 >= 9);

// console.log(10 < 11);
// console.log(10 <= 11);

// console.log(5 == "5" && 10 < 11);
// console.log(5 == "5" && 10 < 9);

// console.log(5 == "5" || 10 < 11);
// console.log(5 == "5" || 10 < 9);

// console.log(!true);
// console.log(!(5 === "5"));

//If

// let estaLloviendo = true;

// if (estaLloviendo) {
// 	console.log("Está lloviendo, lleva paraguas");
// } else {
// 	console.log("Sali tranqui. No llueve");
// }

// console.log("Estoy fuera del if");

// let jugadorPreferido = prompt(
// 	"Elegi tu jugador preferido (Messi, Di Maria, Enzo, Dibu)"
// );

// if (jugadorPreferido === "Messi") {
// 	console.log("Sos una persona de bien");
// } else if (jugadorPreferido === "Di Maria") {
// 	console.log("Que agradable sujeto");
// } else if (jugadorPreferido === "Enzo") {
// 	console.log("Teñite de rubio");
// } else if (jugadorPreferido === "Dibu") {
// 	console.log("Mira que te como");
// } else {
// 	console.log("Flaco, te di opciones!");
// }

//Switch

// let jugadorPreferido = prompt(
// 	"Elegi tu jugador preferido (Messi, Di Maria, Enzo, Dibu)"
// );

// switch (jugadorPreferido) {
// 	case "Messi":
// 		console.log("Sos una persona de bien");
// 		break;
// 	case "Di Maria":
// 		console.log("Que agradable sujeto");
// 		break;
// 	case "Enzo":
// 		console.log("Teñite de rubio");
// 		break;
// 	case "Dibu":
// 		console.log("Mira que te como");
// 		break;
// 	default:
// 		console.log("Flaco, te di opciones!");
// 		break;
// }

//Operador ternario

let datoIngresado = prompt("Ingresa tu edad");

let edadUsuario = +datoIngresado;

if (isNaN(edadUsuario)) {
	console.log("Flaco, enviame un numero");
} else {
	edadUsuario >= 18
		? console.log("Sos mayor de edad")
		: console.log("Sos menor de edad");
}
