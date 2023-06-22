class Pelicula {
	constructor(nombre, id) {
		this.nombre = nombre;
		this.id = id;
	}

	reproducir() {
		return `La peli ${this.nombre} esta ao vivo y su id es ${this.id}`;
	}
}

const peliculaClase = new Pelicula("Spiderman", 1);

// console.log(peliculaClase);
// console.log(peliculaClase.reproducir());

const peliculaClase2 = new Pelicula("LOTR", 2);

// console.log(peliculaClase2);
// console.log(peliculaClase2.reproducir());

class Serie extends Pelicula {
	constructor(nombre, id, capitulo) {
		super(nombre, id);
		this.capitulo = capitulo;
	}

	reproducirCapitulo() {
		return `Reproduciendo capitulo ${this.capitulo} de la serie ${this.nombre}`;
	}
}

const lost = new Serie("Lost", 3, 24);
// console.log(lost);
// console.log(lost.reproducirCapitulo());
// console.log(lost.reproducir());

class Persona {
	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
		this.displayName = function () {
			return `${this.name} ${this.lastname}`;
		};
	}
}

const lionel = new Persona("Lionel", "Messi");
// console.log(lionel.name);

lionel.name = "Leo";

// console.log(lionel.name);

// console.log(lionel.displayName());

// lionel.saludar = function () {
// 	return `Hola! Soy ${this.name} ${this.lastname}`;
// };

// console.log(lionel.saludar());

const cristiano = new Persona("Cristiano", "Ronaldo");

// console.log(cristiano.name);
// console.log(cristiano.displayName());

Persona.prototype.saludar = function () {
	return `Hola! Soy ${this.name} ${this.lastname}`;
};

// console.log(cristiano.saludar());

// console.log(typeof "Holis");
// console.log(typeof 100);
// console.log(typeof false);

// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof new Date());

// console.log(new String("holis"));

const usuario = {
	name: "Pepito",
};

const producto = {
	name: "Joystick",
};

function showInfo(pedidos, cuotas) {
	return `${this.name} tiene ${pedidos} pedidos en ${cuotas} cuotas sin interés`;
	// return this;
}

// console.log(showInfo(5, 3));

// console.log(showInfo.call(usuario, 5, 3));
// console.log(showInfo.call(producto, 5, 3));

// console.log(showInfo.apply(usuario, [6, 9]));

const nuevaFn = showInfo.bind(producto);

console.log(showInfo.bind(usuario)(12, 9));

console.log(nuevaFn(20, 6));
