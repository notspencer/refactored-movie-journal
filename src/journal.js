import { getFavoritesMovies } from "./storage.js";
import { createFavoriteMovieCard } from "./MovieCardFactory.js";
import { cardContainer } from "./journalUI.js";
const RenderFavoriteMovies = async () => {
    const movies = getFavoritesMovies();
    console.log("favorites", movies);
    if (!movies) {
        //resetCardContainer("Popular Movies");
        results.map((movie) => populateUI(movie));
    }
};

RenderFavoriteMovies();
export const populateUI = (movie) => {
    cardContainer.appendChild(createFavoriteMovieCard(movie));
};
