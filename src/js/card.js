//import { buildComplaintCard } from "./card?";
import { buildDeskMenu, buildMainMenu } from "./main-menu";

import {
  getCards,
  getDesks,
  getHiddenPins,
  getPromiseCards,
  setCards,
  setDesks,
  setHiddenPins,
} from "./utils";
import { buildComplainWindow } from "./complain";
import { v4 as uuidv4 } from "uuid";
import { buildMainArea } from "./main-area";
import { assertRootMode } from "@babel/core/lib/config/validation/option-assertions";

function buildInterestCard(card) {
  const element = document.createElement("div");
  const img = document.createElement("img");
  const user = document.createElement("div");
  const ava = document.createElement("img");
  const userName = document.createElement("div");
  const saveBtn = document.createElement("button");
  const reportBtn = document.createElement("button");
  const hideBtn = document.createElement("button");
  const photo = document.createElement("div");

  element.dataset.id = card.id;

  element.classList.add("card");
  photo.classList.add("card__photo");

  img.classList.add("card__img");
  img.src = card.imgUrl;
  img.alt = "img";

  ava.classList.add("card__user-photo");
  ava.src = card.avatarUrl;
  ava.alt = "img";

  userName.classList.add("card__user-name");
  userName.innerHTML = card.userName;

  user.classList.add("card__user");

  //on hover
  saveBtn.classList.add("card__img-save");
  saveBtn.innerHTML = `save`;

  reportBtn.classList.add("card__img-add");
  reportBtn.innerHTML = `report`;

  hideBtn.classList.add("card__img-hide");
  hideBtn.innerHTML = `hide`;
  //////////////

  photo.append(img, saveBtn, reportBtn, hideBtn);

  user.append(ava, userName);
  element.append(photo, user);

  hideBtn.addEventListener("click", hidePin);
  saveBtn.addEventListener("click", savePin);
  reportBtn.addEventListener("click", sendComplain);

  return element;
}

function sendComplain(e) {
  const card = e.target.closest(".card");
  const complaintWindow = buildComplainWindow(card.dataset.id);
  card.appendChild(complaintWindow);

  // const id = e.currentTarget.closest(".card").id;
  // buildComplaintCard(id);
}

function hidePin(e) {
  const card = e.target.closest(".card");
  const id = card.dataset.id;
  let items = getHiddenPins();
  items.push(card.dataset.id);
  setHiddenPins(items);
  const content = document.getElementById("main-area");
  content.remove();
  document.getElementById("root").appendChild(buildMainArea());
  //buildMainArea();
  //card.classList.add("blur");
}
let flag = true;
function savePin(e) {
  /*
  saveBtn.classList.add("disable");
  document.getElementsByClassName("card__img-save").add.classList("disabled");
  
  card.disabled = true;
  document.getElementsByClassName("card__img-save").disabled = true;
  console.log(document.getElementsByClassName("card__img-save"));

  const body = document.getElementById("root");
  body.classList.add("background");

  */

  const button = e.target;
  // button.disabled = true;
  const card = e.target.closest(".card");
  const deskMenu = buildDeskMenu();
  if (flag) {
    card.appendChild(deskMenu);
    flag = false;
    console.log("if", flag);
  } else {
    console.log(card);
    flag = true;
    console.log("else", flag);
    console.log(deskMenu);
    console.log();
    card.removeChild(card.lastChild);
  }

  // window.addEventListener("click", (e) => {
  //   let hero = document.getElementById("root");
  //   hero.classList.add("background");
  //   console.log(hero);
  //   console.log(e.target);

  // if (e.target !== deskMenu) {
  //   card.removeChild(deskMenu);
  //   console.log(hero);
  // }
  // });

  deskMenu.addEventListener("click", function (e) {
    const element = e.target;
    console.log(e.target);
    if (element.classList.contains("wrapper__item")) {
      const id = element.dataset.id;
      const deskMenuItems = getDesks();
      deskMenuItems.forEach((item) => {
        if (item.id === id) {
          let array = item.cards;
          array.push(card.dataset.id);
        }
      });
    }
    card.removeChild(deskMenu);
    flag = true;
    button.disabled = false;
  });

  console.log("saveButton");
}

// const input = document.querySelector(".main-manu__search");
const input = buildMainMenu();
console.log(input);

input.addEventListener("input", search);

function search(e) {
  console.log(e.target.value);
  let array = getCards();
  let searchArray = [];
  console.log(array);

  array.forEach((item) => console.log(typeof item.desc));
  array.forEach((card) => {
    if (card.desc.includes(e.target.value)) searchArray.push(card);
  });
  console.log(searchArray);
  setDesks(searchArray)
  buildMainArea(searchArray);
}

export { buildInterestCard };
