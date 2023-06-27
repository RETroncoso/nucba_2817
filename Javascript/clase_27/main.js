//Opcion 1 - Importar todo el módulo

import * as funciones from "./funciones.js";

console.log(funciones);

funciones.saludar("Mundo");
funciones.despedir("Mundo");
funciones.saludar(funciones.nombre);

//Opcion 2 - Importar una funcion específica y renombrarla

import {
	saludar as saludo,
	despedir as despedida,
	nombre as lucas,
} from "./funciones.js";

saludo("Mundo2");
despedida("Mundo2");
saludo(lucas);

//Opción 3 - Importar una función específica (MAS USADO)

import { saludar, despedir, nombre } from "./funciones.js";

saludar("Mundo3");
despedir("Mundo3");
saludar(nombre);
