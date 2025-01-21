import { fetchPopularMovies, searchFilm } from "./fetchApi.js";
import { populateUI } from "./mainUI.js";

const getPopularMovies = async () => {
    const movies = await fetchPopularMovies();

    if (!movies) {
        throw new Error("Something went wrong");
    }
    const result = movies.results;

    result.map((movie) => populateUI(movie));
    console.log(movies);
};
getPopularMovies();

const searchMovie = async () => {
    const title = "Venom: The Last Dance";
    const searchAMovie = await searchFilm(title);
    console.log(searchAMovie);
};
searchMovie();
