var variableVar;
let miArray = [1, 2, ["Hola", "Chau"], "string", true, 6];

// console.log(miArray);

// console.log(miArray[0]);

let variableLet = "Holis";
// console.log(variableLet);

// console.log(variableVar);
var variableVar = "Holis de nuevo";

// let nombreDeUsuario = prompt("Por favor ingrese su usuario");

const miFuncionParaElBack = () => {
	//Codigo que mande datos al back
	"Señor back, le mando el usuario";
	nombreDeUsuario;
};

console.log(4 == "4"); //Igualdad (revisa solo valor)
console.log(4 === "4"); //Igualdad estricta (revisa valor y tipo de dato)

// let respuestaUsuario = prompt("Ingrese su edad");

// let respuestaNumerica = +respuestaUsuario;

// switch (true) {
// 	case respuestaNumerica < 18:
// 		console.log("Sos menor de edad");
// 		break;
// 	case respuestaNumerica === 18:
// 		console.log("Sos mayor de edad por casualidad");
// 		break;
// 	case respuestaNumerica > 18:
// 		console.log("Sos mayor de edad");
// 		break;
// 	default:
// 		console.log("Ingresa un numero valido, capo");
// 		break;
// }

// let nuevaRespuesta = prompt("Ingrese su nombre");

// switch (nuevaRespuesta) {
// 	case "Matias":
// 		console.log("Hola Mati");
// 		break;
// 	case "Yanina":
// 		console.log("Hola Yanina");
// 		break;

// 	default:
// 		console.log("No tengo programado tu nombre");
// 		break;
// }

// let respuestaUsuarioNueva = prompt(
// 	"Te gusta la menta granizada? (Responde solo SI o NO)"
// );

// if (respuestaUsuarioNueva === "SI") {
// 	console.log("Sos de los mios");
// } else {
// 	console.log("Te voy a aumentar la cuota");
// }

// respuestaUsuarioNueva === "SI"
// 	? console.log("Sos de los mios")
// 	: console.log("Te voy a aumentar la cuota");

let edad = 20;

do {
	console.log("Sos menor de edad y tenes " + edad + " años");
	edad++;
} while (edad < 18);

let arrayParaRecorrer = ["Hola", "Chau", "Nucba", 1, 2, 3, 4, 5, "No vimo"];

// for (const elemento of arrayParaRecorrer) {
// 	console.log(elemento);
// }

// console.log("Termine de recorrer el array");

// const duplicar = (num) => {
// 	num = num + num;

// 	if (num > 100) {
// 		return console.log("Te pasaste, numero muy grande");
// 	}

// 	console.log(num);

// 	return duplicar(num);
// };

// duplicar(2);

// const sumarMas5 = (num) => {
// 	if (num < 5) {
// 		console.log("Mandame un numero mas alto");
// 	}

// 	return num + 5;
// };

// console.log(sumarMas5(2));

const tirarAlert = (nombre) => {
	alert(`Hola ${nombre}`);
};

const tirarLog = (nombre) => {
	console.log(`Hola ${nombre}`);
};

const funcionPadre = (callback) => {
	let respuestaUsuario = prompt("Ingresá tu nombre");

	callback(respuestaUsuario);

	console.log("Funcion padre ejecutada");
};

funcionPadre(tirarAlert);
