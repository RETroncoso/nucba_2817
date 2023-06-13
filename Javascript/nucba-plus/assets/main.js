const cardsContainer = document.querySelector(".cards-container");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");
const pageNumber = document.querySelector(".page-number");
const filterContainer = document.querySelector(".filter-container");
const filterButtons = document.querySelectorAll(".btn");

const ImgBaseUrl = "https://image.tmdb.org/t/p/original";

const appState = {
	page: null,
	total: null,
	searchParameter: TRENDING,
};

const showMovies = async () => {
	cardsContainer.innerHTML = renderLoader();
	const movies = await fetchMovies(appState.searchParameter);
	appState.total = movies.total_pages;
	appState.page = movies.page;
	setPaginationState();
	renderCards(movies.results);
};

const createCardTemplate = (movie) => {
	const { title, poster_path, vote_average, release_date } = movie;
	return `
        <div class="card">
            <img
                loading="lazy"
                src= ${
									poster_path
										? ImgBaseUrl + poster_path
										: "./assets/img/placeholder.png"
								} 
                alt="${title}"
                class="card-img"
            />
            <div class="card-popularity">${formatVoteAverage(
							vote_average
						)}% de popularidad</div>
            <div class="card-content">
                <h2>${title}</h2>
                <p>Fecha de estreno: ${formatDate(release_date)}</p>
            </div>
        </div>
    `;
};

const formatDate = (date) => {
	const [year, month, day] = date.split("-");
	return `${day}/${month}/${year}`;
};

const formatVoteAverage = (voteAverage) => {
	return Math.floor(voteAverage * 10);
};

const renderCards = (movies) => {
	cardsContainer.innerHTML = movies
		.map((movie) => createCardTemplate(movie))
		.join("");
};

const setPaginationState = () => {
	pageNumber.innerHTML = appState.page;
	togglePreviousBtn(appState.page);
	toggleNextBtn(appState.page, appState.total);
};

const togglePreviousBtn = (page) => {
	if (page === 1) {
		prevBtn.classList.add("disabled");
	} else {
		prevBtn.classList.remove("disabled");
	}
};

const toggleNextBtn = (page, total) => {
	if (page === total) {
		nextBtn.classList.add("disabled");
	} else {
		nextBtn.classList.remove("disabled");
	}
};

const renderLoader = () => {
	return `
    <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
     </div>
    `;
};

const nextPage = () => {
	if (appState.page === appState.total) return;
	appState.page += 1;
	changePage();
};

const previousPage = () => {
	if (appState.page === 1) return;
	appState.page -= 1;
	changePage();
};

const changePage = async () => {
	cardsContainer.innerHTML = renderLoader();
	const movies = await fetchMovies(appState.searchParameter, appState.page);
	setPaginationState();
	loadAndShow(movies);
};

const loadAndShow = (movies) => {
	setTimeout(() => {
		renderCards(movies.results);
		filterContainer.scrollIntoView({
			behavior: "smooth",
		});
	}, 1500);
};

const changeSearchParameter = (e) => {
	if (!isActiveCategoryBtn(e.target)) return;
	const selectedParameter = e.target.dataset.filter;
	appState.searchParameter = parameterSelector(selectedParameter);
	setActiveButton(selectedParameter);
	showMovies();
};

const setActiveButton = (selectedParameter) => {
	const buttons = [...filterButtons];

	buttons.forEach((btn) => {
		if (btn.dataset.filter !== selectedParameter) {
			btn.classList.remove("btn--active");
		} else {
			btn.classList.add("btn--active");
		}
	});
};

const parameterSelector = (filterType) => {
	return filterType === "TOPRATED"
		? TOPRATED
		: filterType === "UPCOMING"
		? UPCOMING
		: TRENDING;
};

const isActiveCategoryBtn = (btn) => {
	return (
		btn.classList.contains("btn") && !btn.classList.contains("btn--active")
	);
};

const init = () => {
	window.addEventListener("DOMContentLoaded", showMovies);
	nextBtn.addEventListener("click", nextPage);
	prevBtn.addEventListener("click", previousPage);
	filterContainer.addEventListener("click", changeSearchParameter);
};

init();
