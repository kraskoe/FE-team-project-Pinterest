// const card = {
//   id: "1",
//   imgUrl: "../images/img-1.jpg",
//   desc: "Hashtag it is my first card",
//   avatarUrl: "../images/img-1.jpg",
//   userName: "UserName",
// };

//checking
// const container = document.getElementById("root");
// container.append(buildInterestCard(card));
//
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
  reportBtn.innerHTML = `<i class="fa-solid fa-triangle-exclamation fa-2x"></i>`;

  hideBtn.classList.add("card__img-hide");
  hideBtn.innerHTML = `<i class="fa-solid fa-upload fa-2x"></i>`;
  //////////////

  photo.append(img, saveBtn, reportBtn, hideBtn);

  user.append(ava, userName);
  element.append(photo, user);
  return element;
}

export { buildInterestCard };
