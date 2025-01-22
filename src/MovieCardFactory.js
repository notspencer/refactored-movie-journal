import { addToFavoritesHandler, removeFromFavorites } from "./storage.js";
import { removeCardFromUI } from "./journalUI.js";

export function CreateGlobalMovieCard(movie, withAddBtn) {
    let imgSource = ``;
    let poster_path = movie.poster_path;
    if (poster_path === null) {
        imgSource = `https://picsum.photos/id/1/5000/3333`;
    } else {
        imgSource = `https://image.tmdb.org/t/p/w500${poster_path}`;
    }

    const card = CreateMovieCard(movie, imgSource);
    const addToFavoritesBtn = document.createElement("button");
    if (withAddBtn) {
        addToFavoritesBtn.textContent = "Add to Favorites";
        addToFavoritesBtn.classList.add(
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

        addToFavoritesBtn.addEventListener("click", () => {
            addToFavoritesHandler(movie);
        });
    } else {
        addToFavoritesBtn.textContent = "Added to Favorites";
        addToFavoritesBtn.classList.add(
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
        addToFavoritesBtn.disabled = true;
    }
    card.appendChild(addToFavoritesBtn);
    return card;
}
export const createFavoriteMovieCard = (movie) => {
    const card = CreateMovieCard(movie, movie.Image);
    const removeFromFavoritesBtn = document.createElement("button");
    removeFromFavoritesBtn.textContent = "Remove from Favorites";
    removeFromFavoritesBtn.classList.add(
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

    removeFromFavoritesBtn.addEventListener("click", () => {
        removeFromFavorites(movie.id);
        removeCardFromUI(movie.id);
    });
    card.appendChild(removeFromFavoritesBtn);
    return card;
};
const CreateMovieCard = (movie, imgSource) => {
    const card = document.createElement("div");
    card.setAttribute("id", movie.id);
    const filmImage = document.createElement("img");
    const filmTitle = document.createElement("h3");
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

    filmImage.setAttribute("src", `${imgSource}`);
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

    card.appendChild(filmImage);
    card.appendChild(filmTitle);
    return card;
};
