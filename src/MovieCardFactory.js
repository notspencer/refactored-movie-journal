// imports dependencies
import { addToFavoritesHandler, removeFromFavorites, addUserNote } from "./storage.js";
import { removeCardFromUI, getNoteFromUser } from "./journalUI.js";

// creates the global movie card, including: movie poster image, "add to favorites" button, and styling
export const CreateGlobalMovieCard = (movie, withAddBtn) => {
    let imgSource = ``;
    let poster_path = movie.poster_path;
    if (poster_path === null) {
        imgSource = `https://picsum.photos/id/1/5000/3333`;
    } else {
        imgSource = `https://image.tmdb.org/t/p/w500${poster_path}`;
    }

    const card = CreateMovieCard(movie, imgSource);
    const addToFavoritesBtn = document.createElement("button");

    // Check if the movie is already in favorites
    const isFavorite = isMovieInFavorites(movie.id);

    if (withAddBtn && !isFavorite) {
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
            addToFavoritesBtn.textContent = "Added to Favorites";
            addToFavoritesBtn.disabled = true;
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
};

// creates favorite movie card, including: personal note, "remove from favorites" button, "add/edit note" button, and styling
export const createFavoriteMovieCard = (movie) => {
    const card = CreateMovieCard(movie, movie.Image);
    card.classList.add("border");
    // Personal Note Section
    const containerPersonalNote = document.createElement("div");
    containerPersonalNote.className = "note-section mt-4 w-full"; // Ensure it spans full width
    const noteTitle = document.createElement("h4");
    const defaultNote = movie.userNote.trim() ? movie.userNote.trim() : "";
    noteTitle.textContent = "Your note:";
    noteTitle.className = "text-sm font-bold text-gray-700";
    const noteContent = document.createElement("p");
    noteContent.className = "personal-note text-sm text-gray-600 mt-1";
    noteContent.textContent = defaultNote;
    containerPersonalNote.appendChild(noteTitle);
    containerPersonalNote.appendChild(noteContent);

    // Creating container for buttons
    const btnsContainer = document.createElement("div");
    btnsContainer.className = "flex justify-between items-center mt-4 w-full space-x-4"; // Adds spacing between buttons

    // Remove from Favorites Button
    const removeFromFavoritesBtn = document.createElement("button");
    removeFromFavoritesBtn.textContent = "Remove Movie";
    removeFromFavoritesBtn.classList.add(
        "px-3",
        "py-1",
        "bg-gradient-to-r",
        "from-red-500",
        "to-red-700",
        "text-white",
        "font-semibold",
        "rounded-full",
        "hover:from-red-600",
        "hover:to-red-800",
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

    // Add Note Button
    const addNoteBtn = document.createElement("button");
    addNoteBtn.textContent = "Add/Edit Note";
    addNoteBtn.classList.add(
        "px-3",
        "py-1",
        "bg-gradient-to-r",
        "from-green-500",
        "to-blue-700",
        "text-white",
        "font-semibold",
        "rounded-full",
        "hover:from-green-600",
        "hover:to-blue-800",
        "shadow-md",
        "hover:shadow-lg",
        "transition-all",
        "duration-300",
        "transform",
        "hover:scale-105"
    );

    addNoteBtn.addEventListener("click", () => {
        const note = getNoteFromUser(noteContent.innerText);
        if (note) {
            addUserNote(movie.id, note);
            noteContent.innerText = note; // Update note content dynamically
        }
    });

    // Append buttons to the container
    btnsContainer.appendChild(addNoteBtn);
    btnsContainer.appendChild(removeFromFavoritesBtn);

    // Add everything to the card
    card.appendChild(containerPersonalNote); // Add the note section
    card.appendChild(btnsContainer); // Add the buttons container
    return card;
};

// Helper function to check if a movie is in favorites
const isMovieInFavorites = (movieId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((favMovie) => favMovie.id === movieId);
};

// helper function to set the reusable movie card structure of filmImage, filmTitle, and returns the card
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
