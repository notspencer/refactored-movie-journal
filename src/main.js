// imports dependencies
import { fetchPopularMovies, searchFilm } from "./network.js";
import { populateUI, resetCardContainer } from "./mainUI.js";
import { setupSearch } from "./searchUI.js";

// select search-related elements
const searchInputElement = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const suggestionsElement = document.getElementById("suggestions");

// initialize search suggestions
setupSearch(searchInputElement, suggestionsElement);

// fetches and displays popular movies
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

// searches for movies
export const searchMovie = async (title) => {
    try {
        const movies = await searchFilm(title);
        const results = movies.results;
        resetCardContainer(`Search result for "${title}"`);
        results.map((movie) => populateUI(movie));
    } catch (e) {
        console.log(`${e} Error searching movie`);
    }
};

// listens for and handles search button click
searchButton.addEventListener("click", () => {
    const title = searchInputElement.value.trim();
    if (title) {
        searchMovie(title);
    }
});

// listens for and handles the enter key in search input
searchInputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const title = searchInputElement.value.trim();
        if (title) {
            searchMovie(title);
        }
    }
});
