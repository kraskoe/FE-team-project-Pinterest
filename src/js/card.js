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
  const desc = document.createElement("div");

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

  desc.classList.add("card__desc");
  desc.innerHTML = card.desc;

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
  element.append(photo, user, desc);

  hideBtn.addEventListener("click", hidePin);
  saveBtn.addEventListener("click", savePin);
  reportBtn.addEventListener("click", sendComplain);
  element.addEventListener("click", popUp);

  return element;
}

function sendComplain(e) {
  const card = e.target.closest(".card");
  const complaintWindow = buildComplainWindow(card.dataset.id);
  card.appendChild(complaintWindow);
  document.body.style.overflow = "hidden";
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

function savePin(e) {
  const card = e.target.closest(".card");
  let deskMenu = card.querySelector(".desk_card");
  if (deskMenu) {
    deskMenu.remove();
  } else {
    deskMenu = buildDeskMenu();
    card.appendChild(deskMenu);
    deskMenu.addEventListener("click", function (e) {
      const element = e.target;
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
    });
  }
}

function popUp(e) {
  const card = e.target.closest(".card");

  const desc = card.lastChild;
  const cloneDesc = desc.cloneNode(true);

  const image = e.target.closest(".card__img");
  const cloneImage = image.cloneNode(true);

  const btns = card.firstChild.children;

  const saveBtn = btns.item(1);
  const cloneSaveBtn = saveBtn.cloneNode(true);

  const reportBtn = btns.item(2);
  const cloneReportBtn = reportBtn.cloneNode(true);

  const hideBtn = btns.item(3);
  const cloneHideBtn = hideBtn.cloneNode(true);

  const hero = document.createElement("div");
  const modal = document.createElement("div");
  const photo = document.createElement("div");
  const body = document.querySelector("body");

  modal.dataset.id = card.id;

  hero.classList.add("modal");
  modal.classList.add("modal__popUp");
  photo.classList.add("modal__photo");
  desc.classList.add("modal__desc");

  cloneImage.classList.add("modal__img");
  cloneDesc.style.display = "block";
  cloneSaveBtn.style.display = "block";
  cloneReportBtn.style.display = "block";
  cloneHideBtn.style.display = "block";

  photo.append(cloneImage);
  modal.append(photo, cloneReportBtn, cloneHideBtn, cloneSaveBtn, cloneDesc);
  hero.append(modal);
  body.append(hero);

  cloneSaveBtn.addEventListener("click", savePin);

  window.addEventListener("click", function (e) {
    if (e.target === hero) {
      hero.style.display = "none";
    }
  });
}

export { buildInterestCard };
