import { cartActionsInit } from "./assets/cart/cart";
import { menuIntefaceInit } from "./assets/menu-interface/menu-interface";
import { productsSectionInit } from "./assets/products-section/products-section";
import { scrollEffectsInit } from "./assets/scroll-effects/scroll";
import { typewriterInit } from "./assets/typewriter/typewriter";

//Función inicializadora
const init = () => {
	productsSectionInit();
	cartActionsInit();
	menuIntefaceInit();
	typewriterInit();
	scrollEffectsInit();
};

init();
