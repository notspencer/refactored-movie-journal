// This page handles local storage for favorites and notes
export function addToFavoritesHandler(movie) {
    const idOfFilm = movie.id;
    const nameOfFilm = movie.title;
    const imageOfFilm = movie.poster_path;
    const overviewOfFilm = movie.overview;
    const filmDetails = {
        id: idOfFilm,
        Name: nameOfFilm,
        Image: `https://image.tmdb.org/t/p/w500${imageOfFilm}`,
        overview: overviewOfFilm,
        userNote: "",
    };

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(filmDetails);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${nameOfFilm} added to Favorites!`);
}

export const getFavoritesMovies = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
};
export const removeFromFavorites = (movieId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavList = favorites.filter((movie) => movie.id !== movieId);
    localStorage.setItem("favorites", JSON.stringify(newFavList));
};
export const addUserNote = (movieId, note) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const currentMovie = favorites.find((movie) => movie.id === movieId);
    currentMovie.userNote = note;
    localStorage.setItem("favorites", JSON.stringify(favorites));
};
