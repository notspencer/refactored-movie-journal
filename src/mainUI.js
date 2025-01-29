// import dependencies
import { getFavoritesMovies } from "./storage.js";
import { createGlobalMovieCard } from "./MovieCardFactory.js";

// clears and resets the movie container
export const resetCardContainer = (heading) => {
    const cardContainer = document.querySelector("#movie-container");
    cardContainer.innerHTML = "";
    const headingElement = document.querySelector("#movies-heading");
    headingElement.textContent = heading;

    // Add a nice styling effect
    headingElement.classList.add(
        "text-2xl",
        "font-bold",
        "mb-4",
        "transition-all",
        "duration-300",
        "mt-4"
    );

    // Optional animation (e.g., fade-in)
    headingElement.style.opacity = 0;
    setTimeout(() => {
        headingElement.style.opacity = 1;
    }, 100);
};

// populates the UI with movies - lul
export const populateUI = (movie) => {
    const favorites = getFavoritesMovies();
    const cardContainer = document.querySelector("#movie-container");
    const isFavorite = favorites.find((fav) => fav.id === movie.id);
    const withAddBtn = !isFavorite;
    cardContainer.appendChild(createGlobalMovieCard(movie, withAddBtn));
};
