import { fetchPopularMovies, searchFilm } from "./fetchApi.js";
import { populateUI } from "./mainUI.js";

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const getPopularMovies = async () => {
    const movies = await fetchPopularMovies();

    if (!movies) {
        throw new Error("Something went wrong");
    }
    const result = movies.results;

    result.map((movie) => populateUI(movie));
    // console.log(movies);
};
getPopularMovies();

const searchMovie = async (title) => {
    try {
        // const title = "Venom: The Last Dance";
        const searchAMovie = await searchFilm(title);
        // populateUI(searchAMovie); this already works
        console.log(searchAMovie);
    } catch (e) {
        console.log(`${e} Error searching movie`);
    }
};
searchMovie();

// Event listener for search button click
searchButton.addEventListener("click", () => {
    const title = searchInput.value.trim(); // Get input value
    // console.log(title);
    if (title) {
        searchMovie(title); // Trigger search
    }
});

// Event listener for Enter key in the input field
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const title = searchInput.value.trim();
        // console.log(title);
        if (title) {
            searchMovie(title);
        }
    }
});
// console.log(searchInput, searchButton);
