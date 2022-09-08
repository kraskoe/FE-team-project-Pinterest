import "../scss/main.scss";
import { buildInterestCard } from "./card";
import {buildMainMenu, buildDeskMenu} from "./main-menu";
import {getCards, getDesks, getHiddenPins, setCards, setDesks, setHiddenPins} from "./utils";

//импорт изображений
// import image from './assets/image.jpg';
// document.getElementById('root'c).innerHTML = `<img sr=${image} />`;

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
	const container = document.getElementById("root");
	const scrt = document.createElement("script");

	getCards()
		.then(data => data.forEach(obj => {
			const item = document.createElement('div');
			item.innerHTML = `${obj.id} ${obj.desc}`;
			container.append(item);
		}))

	scrt.src = `https://kit.fontawesome.com/7b1e4a4b61.js`;
	scrt.crossOrigin = `anonymous`;
	document.querySelector("body").append(scrt);

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
}

