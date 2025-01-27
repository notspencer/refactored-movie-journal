import { getFavoritesMovies } from "./storage.js";
import { CreateGlobalMovieCard } from "./MovieCardFactory.js";

export const resetCardContainer = (heading) => {
    const cardContainer = document.querySelector("#movie-container");
    cardContainer.innerHTML = "";
    const headingElement = document.querySelector("#movies-heading");
    headingElement.textContent = heading;
};

export const populateUI = (movie) => {
    const favorites = getFavoritesMovies();
    const cardContainer = document.querySelector("#movie-container");
    const isFavorite = favorites.find((fav) => fav.id === movie.id);
    const withAddBtn = !isFavorite;
    cardContainer.appendChild(CreateGlobalMovieCard(movie, withAddBtn));
};
