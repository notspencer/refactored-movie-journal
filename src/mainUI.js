// import dependencies
import { getFavoritesMovies } from "./storage.js";
import { CreateGlobalMovieCard } from "./MovieCardFactory.js";

// clears and resets the movie container 
export const resetCardContainer = (heading) => {
    const cardContainer = document.querySelector("#movie-container");
    cardContainer.innerHTML = "";
    const headingElement = document.querySelector("#movies-heading");
    headingElement.textContent = heading;
};

// populates the UI with movies - lul
export const populateUI = (movie) => {
    const favorites = getFavoritesMovies();
    const cardContainer = document.querySelector("#movie-container");
    const isFavorite = favorites.find((fav) => fav.id === movie.id);
    const withAddBtn = !isFavorite;
    cardContainer.appendChild(CreateGlobalMovieCard(movie, withAddBtn));
};
