import { v4 as uuidv4 } from 'uuid';

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
        { id: uuidv4(), name: "Desk 1", cards: [] },
        { id: uuidv4(), name: "Desk 2", cards: [] },
        { id: uuidv4(), name: "Desk 3", cards: [] },
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

function getPromiseCards() {
  return new Promise((resolve, reject) => {
    fetch('https://script.google.com/macros/s/AKfycbyf_dq6dWVvlt5so3VQjvZC0K-UfsHEzXqaCaBHbe4bjMdCDGP2D3RmzuIHfJniWg/exec')
      .then(response => {
        if (response.ok && response.headers.get("Content-Type").includes("application/json")) {
          resolve(response);
        } else {
          reject(new Error('Fetch error'));
        }
      })
  });
}

export { setHiddenPins, setDesks, setCards, getHiddenPins, getDesks, getCards, getPromiseCards };