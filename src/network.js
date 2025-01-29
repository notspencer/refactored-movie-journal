// imports API keys
import { API_KEY, BEARER_TOKEN } from "../config.js";

// defines API endpoints
const popularMoviePath = "https://api.themoviedb.org/3/movie/popular";
const searchPath = "https://api.themoviedb.org/3/search/movie";
const pathKey = `?api_key=${API_KEY}`;

// fetches PopularMovies
export const fetchPopularMovies = async () => {
    try {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        };

        const response = await fetch(
            `${popularMoviePath}${pathKey}?language=en-US&page=1`,
            options
        );
        if (!response.ok) {
            throw new Error("Error in fetching movies!");
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(`${e} Error fetching popular movies`);
    }
};

// Fetches searchFilm: accepts a query parameter(movie title), encodes the query, sends a GET request to TMDB's search API, returns results after converting to JSON
// This is called when a user searched for a movie
export const searchFilm = async (query) => {
    try {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        };
        const response = await fetch(
            `${searchPath}${pathKey}&query=${encodeURIComponent(
                query
            )}&include_adult=false&language=en-US&page=1`,
            options
        );

        if (!response.ok) {
            throw new Error("Error in fetching movies!");
        }
        const data = response.json();
        return data;
    } catch (e) {
        console.log(`${e} Error searching movie`);
    }
};
