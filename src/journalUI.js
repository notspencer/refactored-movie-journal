export const cardContainer = document.getElementById("favMovie-container");
export const removeCardFromUI = (cardId) => {
    const card = document.getElementById(cardId);
    card.remove(card);
};

export function getNoteFromUser(currentNote) {
    console.log("current note", currentNote);
    const note = prompt("Enter your personal note:", currentNote || "");
    return note;
}
