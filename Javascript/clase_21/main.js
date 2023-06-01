// fetch("https://pokeapi.co/api/v2/pokemon/62")
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))
// 	// .then((data) => console.log(`Hola, soy ${data.name}`))
// 	// .then((data) => console.log(data.sprites.front_default))
// 	.catch((error) => console.log(error));

const getPoliwrath = async () => {
	try {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon/gengar");
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

const contenedor = document.querySelector(".contenedor");

const templatePokemon = (pokemon) => {
	const { name, sprites, types } = pokemon;
	const pokemonHTML = `
        <div class="card">
            <img src="${sprites.other.home.front_default}" alt="${name}">
            <h2>${name}</h2>
            <p>${types[0].type.name}</p>
        </div>
    `;
	contenedor.innerHTML = pokemonHTML;
};

const renderPokemon = async () => {
	try {
		const pokemon = await getPoliwrath();
		templatePokemon(pokemon);
	} catch (error) {
		console.error(error);
	}
};

renderPokemon();
