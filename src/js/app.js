import "../scss/main.scss";
import { buildInterestCard } from "./card";

//импорт изображений
// import image from './assets/image.jpg';
// document.getElementById('root'c).innerHTML = `<img sr=${image} />`;
console.log("Hello, world!!!55!");
const container = document.getElementById("root");
container.append(
  buildInterestCard({
    id: "1",
    imgUrl:
      "https://media.istockphoto.com/photos/cityscape-of-minsk-belarus-summer-season-sunset-time-picture-id499206036?k=20&m=499206036&s=612x612&w=0&h=0QZJ3fa6YO4R51n2NGx24dtwv2RgrOZXmK_NF99ksCY=",
    desc: "Hashtag it is my first card",
    avatarUrl:
      "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
    userName: "UserName",
  })
);

//add fontawesome
let scrt = document.createElement("script");
scrt.src = `https://kit.fontawesome.com/7b1e4a4b61.js`;
scrt.crossOrigin = `anonymous`;
document.querySelector("body").append(scrt);
//////////
