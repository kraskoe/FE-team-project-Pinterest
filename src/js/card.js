const card = {
    id: "1",
    imgUrl: "./images/img-1.jpg",
    desc: "Hashtag it is my first card",
    avatarUrl: "Avatar",
    userName: "UserName",
};

 function buildInterestCard(card) {
     console.log('gfdtdg')
    const element = document.createElement("div");
    const img = document.createElement("img");
    const userName = document.createElement("div");
    const avatarUrl = document.createElement("div");
    const desc = document.createElement("div");

    element.classList.add("card");

    img.classList.add("card__photo");
    img.src = card.imgUrl;
    img.alt = "img";

    avatarUrl.classList.add("card__avatar");
    avatarUrl.innerHTML = card.avatarUrl;

    desc.classList.add("card__desc");
    desc.innerHTML = card.desc;

    userName.classList.add("card__user");
    userName.innerHTML = card.userName;

    element.append(img, avatarUrl, userName, desc);
    return element;
}

export {buildInterestCard};