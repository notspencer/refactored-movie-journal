import { getFavoritesMovies } from "./storage.js";
import { createFavoriteMovieCard } from "./MovieCardFactory.js";
import { cardContainer } from "./journalUI.js";

const RenderFavoriteMovies = () => {
    const movies = getFavoritesMovies();
    console.log("cardContainer", cardContainer);

    //resetCardContainer("Popular Movies");
    movies.map((movie) => cardContainer.appendChild(createFavoriteMovieCard(movie)));
};

RenderFavoriteMovies();
