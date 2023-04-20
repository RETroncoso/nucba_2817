//getElementById

// const logo = document.getElementById("logo");

// console.log(logo);

// console.dir(logo);

// console.log(logo.innerHTML);

// const nombre = prompt("Hola");

// setTimeout(() => {
// 	logo.innerHTML = `Hola! Soy ${nombre}`;
// }, 2000);

//getElementsByClassName

const links = document.getElementsByClassName("link");
// console.log(links);
// console.log(links[0]);
// console.log([...links]);

// const linksARecorrer = [...links];

// links.forEach((link) => {
// 	console.log(link);
// }); //Esto tira error porque el HTMLCollection no tiene el metodo forEach

// linksARecorrer.forEach((link) => {
// 	console.log(link);
// });

// getElementsByTagName

const pTags = document.getElementsByTagName("p");

// console.log(pTags);

// querySelector

const queryPorTag = document.querySelector("header");
const queryPorClass = document.querySelector(".tagName");
const queryPorId = document.querySelector("#soyElP");

// console.log(queryPorTag);
// console.log(queryPorClass);
// console.log(queryPorId);

const p = document.querySelector("p");
// console.log(p);

// querySelectorAll

// const todosLosP = document.querySelectorAll("p");

// console.log(todosLosP);

// todosLosP.forEach((etiqueta) => {
// 	etiqueta.textContent = "Hola desde JS!!!!!";
// });

// Siempre tengo que seleccionar elementos desde el document???????

const contenedor = document.querySelector(".tagName");

const losP = contenedor.querySelectorAll("p");

console.log(losP);
