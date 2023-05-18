const productsContainer = document.querySelector(".products-container");
const showMoreBtn = document.querySelector(".btn-load");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const cartBtn = document.querySelector(".cart-label");
const cartMenu = document.querySelector(".cart");
const menuBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

const createProductTemplate = (product) => {
	const { id, name, bid, user, userImg, cardImg } = product;

	return `
    <div class="product">
        <img src=${cardImg} alt=${name} />
        <div class="product-info">
            <div class="product-top">
                <h3>${name}</h3>
                <p>Current Bid</p>
            </div>
            <div class="product-mid">
                <div class="product-user">
                    <img src=${userImg} alt="user" />
                    <p>@${user}</p>
                </div>
                <span>${bid} eTH</span>
            </div>
            <div class="product-bot">
                <div class="product-offer">
                    <div class="offer-time">
                        <img src="./assets/img/fire.png" alt="" />
                        <p>05:12:07</p>
                    </div>
                    <button
                        class="btn-add"
                        data-id="${id}"
                        data-name="${name}"
                        data-bid="${bid}"
                        data-img="${cardImg}"
                    >
                    Add
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
};

const renderProducts = (productsList) => {
	productsContainer.innerHTML += productsList
		.map(createProductTemplate)
		.join("");
};

const isLastIndexOf = () => {
	return appState.currentProductsIndex === appState.productsLimit - 1;
};

const showMoreProducts = () => {
	appState.currentProductsIndex += 1;
	let { products, currentProductsIndex } = appState;
	renderProducts(products[currentProductsIndex]);
	if (isLastIndexOf()) {
		showMoreBtn.classList.add("hidden");
	}
};

const isInactiveFilterBtn = (element) => {
	return (
		element.classList.contains("category") &&
		!element.classList.contains("active")
	);
};

const changeBtnActiveState = (selectedCategory) => {
	const categories = [...categoriesList];
	categories.forEach((categoryBtn) => {
		if (categoryBtn.dataset.category !== selectedCategory) {
			categoryBtn.classList.remove("active");
			return;
		}
		categoryBtn.classList.add("active");
	});
};

const setShowMoreVisibility = () => {
	if (!appState.activeFilter) {
		showMoreBtn.classList.remove("hidden");
		return;
	}
	showMoreBtn.classList.add("hidden");
};

const changeFilterState = (btn) => {
	appState.activeFilter = btn.dataset.category;
	changeBtnActiveState(appState.activeFilter);
	setShowMoreVisibility();
};

const renderFilteredProducts = () => {
	const filteredProducts = productsData.filter((product) => {
		return product.category === appState.activeFilter;
	});
	renderProducts(filteredProducts);
};

const applyFilter = ({ target }) => {
	//Chequear que sea boton y no este activo
	if (!isInactiveFilterBtn(target)) {
		return;
	}
	//cambiar el estado del filtro
	changeFilterState(target);

	//si hay filtro activo, renderizo prod filtrados
	productsContainer.innerHTML = "";
	if (appState.activeFilter) {
		renderFilteredProducts();
		appState.currentProductsIndex = 0;
		return;
	}
	//Si no hay filtro activo, renderizo 1er array
	renderProducts(appState.products[0]);
};

const toggleCart = () => {
	cartMenu.classList.toggle("open-cart");
	if (barsMenu.classList.contains("open-menu")) {
		barsMenu.classList.remove("open-menu");
		return;
	}
	overlay.classList.toggle("show-overlay");
};

const toggleMenu = () => {
	barsMenu.classList.toggle("open-menu");
	if (cartMenu.classList.contains("open-cart")) {
		cartMenu.classList.remove("open-cart");
		return;
	}
	overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () => {
	if (
		!barsMenu.classList.contains("open-menu") &&
		!cartMenu.classList.contains("open-cart")
	) {
		return;
	}
	barsMenu.classList.remove("open-menu");
	cartMenu.classList.remove("open-cart");
	overlay.classList.remove("show-overlay");
};

const closeOnClick = (e) => {
	if (!e.target.classList.contains("navbar-link")) {
		return;
	}
	barsMenu.classList.remove("open-menu");
	overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
	barsMenu.classList.remove("open-menu");
	cartMenu.classList.remove("open-cart");
	overlay.classList.remove("show-overlay");
};

const init = () => {
	renderProducts(appState.products[appState.currentProductsIndex]);
	showMoreBtn.addEventListener("click", showMoreProducts);
	categoriesContainer.addEventListener("click", applyFilter);
	cartBtn.addEventListener("click", toggleCart);
	menuBtn.addEventListener("click", toggleMenu);
	window.addEventListener("scroll", closeOnScroll);
	barsMenu.addEventListener("click", closeOnClick);
	overlay.addEventListener("click", closeOnOverlayClick);
};

init();
