export const cardContainer = document.getElementById("favMovie-container");
export const removeCardFromUI = (cardId) => {
    const card = document.getElementById(cardId);
    card.remove(card);
};
