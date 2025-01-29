// imports dependencies
import { searchFilm } from "./network.js";
import { searchMovie } from "./main.js";

// sets up event listener for search
export const setupSearch = async (inputElement, suggestionsContainer) => {
    inputElement.addEventListener("input", async function (e) {  // listens for and handles user input
        const query = e.target.value.trim().toLowerCase();

// the next 6 lines resets suggestions if query is too short, ie. no input
        suggestionsContainer.innerHTML = "";

        if (!query || query.length < 3) {
            suggestionsContainer.classList.add("hidden");
            return;
        }

// fetches movie suggestions from API
        const movies = await searchFilm(query);

// filters suggestions to match query input, then displays suggestions if available
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

                // adds suggestions to dropdown
                suggestionsContainer.appendChild(suggestionItem);

// listens for and handles click on suggestion
                suggestionItem.addEventListener("click", () => {
                    inputElement.value = suggestion.title;
                    suggestionsContainer.innerHTML = "";
                    suggestionsContainer.classList.add("hidden");
                    searchMovie(suggestion.title);
                });
            });
            suggestionsContainer.classList.remove("hidden"); // hides suggestions if no matches
        } else {
            suggestionsContainer.classList.add("hidden");
        }
    });
};
