import { API_KEY, BEARER_TOKEN } from "../config.js";

const popularMoviePath = "https://api.themoviedb.org/3/movie/popular";
const searchPath = "https://api.themoviedb.org/3/search/movie";
const pathKey = `?api_key=${API_KEY}`;

//fetching PopularMovies
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

//fetching searchFilm
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
