import { searchFilm } from "./fetchApi.js";
import { searchMovie } from "./script.js";

export const setupSearch = async (inputElement, suggestionsContainer) => {
    inputElement.addEventListener("input", async function (e) {
        const query = e.target.value.trim().toLowerCase();

        suggestionsContainer.innerHTML = "";

        if (!query || query.length < 3) {
            suggestionsContainer.classList.add("hidden");
            return;
        }

        const movies = await searchFilm(query);

        const filteredSuggestions = movies.results
            .filter((item) => item.title.toLowerCase().includes(query))
            .slice(0, 5);

        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach((suggestion) => {
                const suggestionItem = document.createElement("div");
                suggestionItem.classList.add(
                    "p-2",
                    "cursor-pointer",
                    "hover:bg-gray-400",
                    "border-b",
                    "border-gray-700",
                    "last:border-none"
                );
                suggestionItem.textContent = suggestion.title;

                suggestionsContainer.appendChild(suggestionItem);

                suggestionItem.addEventListener("click", () => {
                    inputElement.value = suggestion.title;
                    suggestionsContainer.innerHTML = "";
                    suggestionsContainer.classList.add("hidden");
                    searchMovie(suggestion.title);
                });
            });
            suggestionsContainer.classList.remove("hidden");
        } else {
            suggestionsContainer.classList.add("hidden");
        }
    });
};
