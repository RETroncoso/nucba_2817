// for("desde"; "hasta"; "actualizacion") {
//     "Aca va el codigo a repetirse en el bucle"
// };

//Ciclo for

// for (let i = 0; i < 10; i++) {
// 	console.log(`El numero de i es ${i}`);
// }

//Break

// for (let i = 0; i < 10; i++) {
// 	if (i === 3) {
// 		break;
// 	}
// 	console.log(`El numero de i es ${i}`);
// }

//Continue

// for (let i = 0; i < 10; i++) {
// 	if (i === 3) {
// 		continue;
// 	}
// 	console.log(`El numero de i es ${i}`);
// }

// for (let i = 0; i <= 20; i++) {
// 	if (i % 2 == 0) {
// 		continue;
// 	}
// 	console.log(`El número ${i} es impar`);
// }

//While

// let i = 0;

// while (i < 10) {
// 	console.log(`El numero de i es ${i}`);
// 	i++;
// }

// Do.... While

// let i = 10;

// do {
// 	console.log(`El numero de i es ${i}`);
// 	i++;
// } while (i < 10);

//Arrays

let transportes = [
	"Auto",
	"Moto",
	"Camioneta",
	"Bicicleta",
	"Barco",
	"Submarino",
	"Camion",
];

// console.log(transportes);

// Gallina Tiene Huevos
// console.log(transportes.length);

// console.log(transportes[5]);

// for (let i = 0; i < transportes.length; i++) {
// 	console.log(transportes[i]);
// }

//For of

for (let vehiculo of transportes) {
	console.log(vehiculo);
}
