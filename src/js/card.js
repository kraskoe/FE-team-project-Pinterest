//import { buildComplaintCard } from "./card?";
import { buildDeskMenu } from "./main-menu";

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
}

function savePin(e) {
  const card = e.target.closest(".card");
  const photo = card.firstElementChild;
  console.log(photo);
  const deskMenu = buildDeskMenu();
  deskMenu.classList.add("visiable");
  card.append(deskMenu);


  deskMenu.addEventListener("click", function (e) {
    const element = e.target.closest(".wrapper__item");
    if (element.classList.contains("wrapper__item")) {
      const id = element.dataset.id;
      const deskMenuItems = getDesks();
      deskMenuItems.forEach((item) => {
        if (item.id === id) {
          let array = item.cards;
          array.push(card.dataset.id);
          setDesks(deskMenuItems);
        }
      });
    }
    card.removeChild(deskMenu);
  });
}

export { buildInterestCard };
