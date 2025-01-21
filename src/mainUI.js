import { addToFavoritesHandler } from "./favorites.js";

export const resetCardContainer = (heading) => {
    const cardContainer = document.querySelector("#movie-container");
    cardContainer.innerHTML = "";
    const headingElement = document.querySelector("#movies-heading");
    headingElement.textContent = heading;
};

export const populateUI = (movie) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const cardContainer = document.querySelector("#movie-container");
    const card = document.createElement("div");
    const filmImage = document.createElement("img");
    const filmTitle = document.createElement("h3");
    // const filmOverview = document.createElement("h3");
    const addToFavorites = document.createElement("button");

    let poster_path = movie.poster_path;

    card.classList.add(
        "p-2",
        "shadow-md",
        "rounded-lg",
        "hover:shadow-xl",
        "transition-all",
        "duration-300",
        "gap-6",
        "items-center",
        "flex",
        "flex-col"
    );

    if (poster_path === null) {
        filmImage.setAttribute("src", "https://picsum.photos/id/1/5000/3333");
    } else {
        filmImage.setAttribute("src", `https://image.tmdb.org/t/p/w500${poster_path}`);
    }
    filmImage.alt = movie.title;
    filmImage.classList.add(
        "object-fill",
        "rounded-lg",
        "border-gray-200",
        "hover:shadow-xl",
        "transition-transform",
        "duration-300",
        "hover:scale-105",
        "cursor-pointer",
        "items-center"
    );

    filmTitle.textContent = movie.title;
    filmTitle.classList.add(
        "font-bold",
        "text-xl",
        "text-white",
        "text-center",
        "truncate",
        "w-full"
    );

    const isFavorite = favorites.find((fav) => fav.id === movie.id);

    if (!isFavorite) {
        addToFavorites.textContent = "Add to Favorites";
        addToFavorites.classList.add(
            "px-6",
            "py-3",
            "bg-gradient-to-r",
            "from-purple-500",
            "to-purple-700",
            "text-white",
            "font-semibold",
            "rounded-full",
            "hover:from-purple-600",
            "hover:to-purple-800",
            "shadow-md",
            "hover:shadow-lg",
            "transition-all",
            "duration-300",
            "transform",
            "hover:scale-105"
        );
        addToFavorites.addEventListener("click", () => {
            addToFavoritesHandler(movie);
        });
    } else {
        addToFavorites.textContent = "Delete to Favorites";
        addToFavorites.classList.add(
            "px-6",
            "py-3",
            "bg-gradient-to-r",
            "from-purple-500",
            "to-purple-700",
            "text-white",
            "font-semibold",
            "rounded-full",
            "hover:from-purple-600",
            "hover:to-purple-800",
            "shadow-md",
            "hover:shadow-lg",
            "transition-all",
            "duration-300",
            "transform",
            "hover:scale-105"
        );
        addToFavorites.disabled = true;
    }

    card.appendChild(filmImage);
    card.appendChild(filmTitle);
    card.appendChild(addToFavorites);

    cardContainer.appendChild(card);
};
