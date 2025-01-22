import { fetchPopularMovies, searchFilm } from "./fetchApi.js";
import { populateUI, resetCardContainer } from "./mainUI.js";
import { setupSearch } from "./searchUI.js";

const searchInputElement = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const suggestionsElement = document.getElementById("suggestions");

setupSearch(searchInputElement, suggestionsElement);

const getPopularMovies = async () => {
    const movies = await fetchPopularMovies();

    if (!movies) {
        throw new Error("Something went wrong");
    }
    const results = movies.results;

    resetCardContainer("Popular Movies");
    results.map((movie) => populateUI(movie));
};
getPopularMovies();

export const searchMovie = async (title) => {
    try {
        const movies = await searchFilm(title);
        const results = movies.results;
        resetCardContainer(`Searchresult for "${title}"`);
        results.map((movie) => populateUI(movie));
    } catch (e) {
        console.log(`${e} Error searching movie`);
    }
};

searchButton.addEventListener("click", () => {
    const title = searchInputElement.value.trim();
    if (title) {
        searchMovie(title);
    }
});

searchInputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const title = searchInputElement.value.trim();
        if (title) {
            searchMovie(title);
        }
    }
});
