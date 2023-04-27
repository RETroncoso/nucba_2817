let card = document.createElement("div");
card.classList.add("card");

let cardImg = document.createElement("img");
cardImg.src = "https://via.placeholder.com/150";
cardImg.classList.add("card-img");

let cardTitle = document.createElement("h3");
cardTitle.classList.add("card-title");
cardTitle.innerText = "Título de la tarjeta";

let cardBody = document.createElement("div");
cardBody.classList.add("card-body");
cardBody.innerText = "Contenido de la tarjeta";

let cardButton = document.createElement("button");
cardButton.classList.add("card-button");
cardButton.innerText = "Click";

let contenedorTemporal = document.createElement("div");
contenedorTemporal.classList.add("card-container");

card.appendChild(cardImg);
card.appendChild(cardTitle);
card.appendChild(cardBody);
card.appendChild(cardButton);

// const cardContainer = document.querySelector(".card-container");

// cardContainer.appendChild(card);

contenedorTemporal.appendChild(card);

const main = document.querySelector("main");

// main.appendChild(contenedorTemporal);

const parrafo = document.querySelector(".parrafo");

parrafo.innerHTML = "Este es el nuevo contenido del parrafo";

const contenido = parrafo.innerHTML;

const caja = document.querySelector(".caja");

// caja.innerHTML = "<h2>Este es el nuevo contenido de la caja</h2>";

const titulo = "Titulo de la caja";
const animales = ["Perro", "Gato", "Pez", "Tortuga"];

caja.innerHTML = `
    <h2> ${titulo} </h2>
    <p> Lorem ipsum </p>
    ${animales
			.map((animal) => {
				return `<p>- ${animal} </p>`;
			})
			.join("")}
    <button class="card-button" > Click </button>
`;

const contenedorGeneradora = document.querySelector(".fn-generadora");

const animalesInfo = [
	{
		name: "Perro",
		description: "Animal que ladra",
	},
	{
		name: "Gato",
		description: "Animal que maulla",
	},
	{
		name: "Pez",
		description: "Animal que Nada",
	},
];

const createCardTemplate = (animal) => {
	const { name, description } = animal;

	return `
        <div class="card">
            <h3 class="card-title">${name}</h3>
            <p>${description}</p>
        </div>
    `;
};

const cardsTemplate = animalesInfo.map(createCardTemplate).join("");

contenedorGeneradora.innerHTML = cardsTemplate;

console.log(
	JSON.stringify({
		name: "Angel",
		age: 43,
	})
);

console.log(JSON.parse('{"name":"Angel","age":43}'));

// localStorage.setItem("usuario", "miNombreDeUsuarioSuperSecreto");
// localStorage.Curso = "Javascript";

// sessionStorage.setItem("Item que se va a borrar", "Hola! Me voy a borrar");

const usuario = localStorage.getItem("usuario");

const pUser = document.querySelector(".localStorage");

pUser.innerHTML = usuario;
