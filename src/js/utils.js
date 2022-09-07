function getHiddenPins() {
  return localStorage.getItem("hidden")
    ? JSON.parse(localStorage.getItem("hidden"))
    : [];
}
function setHiddenPins(array) {
  localStorage.setItem("hidden", JSON.stringify(array));
}

function getDesks() {
  return localStorage.getItem("desks")
    ? JSON.parse(localStorage.getItem("desks"))
    : [
        { name: "Desk 1", cards: [] },
        { name: "Desk 2", cards: [] },
        { name: "Desk 3", cards: [] },
      ];
}
function setDesks(array) {
  localStorage.setItem("desks", JSON.stringify(array));
}

function getCards() {
  return localStorage.getItem("cards")
    ? JSON.parse(localStorage.getItem("cards"))
    : [];
}
function setCards(array) {
  localStorage.setItem("cards", JSON.stringify(array));
}

export { setHiddenPins, setDesks, setCards, getHiddenPins, getDesks, getCards };