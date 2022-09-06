function getHiddenPins() {
  return localStorage.getItem("hidden")
    ? JSON.parse(localStorage.getItem("hidden"))
    : [];
}
function setHiddenPins(array) {
  let items = [];
  items.push(...array);
  localStorage.setItem("hidden", JSON.stringify(items));
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
  let items = [];
  items.push(...array);
  localStorage.setItem("desks", JSON.stringify(items));
}

function getCards() {
  return localStorage.getItem("cards")
    ? JSON.parse(localStorage.getItem("cards"))
    : [];
}
function setCards(array) {
  let items = [];
  items.push(...array);
  localStorage.setItem("cards", JSON.stringify(items));
}
