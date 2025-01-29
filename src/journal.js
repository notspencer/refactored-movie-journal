import { getFavoritesMovies } from "./storage.js";
import { createFavoriteMovieCard } from "./MovieCardFactory.js";
import { cardContainer } from "./journalUI.js";

// This component renders fave movies to the journal page
const RenderFavoriteMovies = () => {
    const movies = getFavoritesMovies();
    console.log("cardContainer", cardContainer); // Optional code for troubleshooting

    //resetCardContainer("Popular Movies");
    movies.map((movie) => cardContainer.appendChild(createFavoriteMovieCard(movie))); // Generated cards and moves them to cardContainer
};

RenderFavoriteMovies(); //executes function
