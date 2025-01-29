export const cardContainer = document.getElementById("favMovie-container"); // selects the favMovie container
export const removeCardFromUI = (cardId) => { // removes movie card when called
    const card = document.getElementById(cardId);
    card.remove(card);
};

export function getNoteFromUser(currentNote) { // opens a prompt box asking user to enter their notes
    console.log("current note", currentNote);
    const note = prompt("Enter your personal note:", currentNote || "");
    return note;
}
