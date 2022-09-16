import "../scss/main.scss";
import {buildInterestCard} from "./card";
import {buildMainArea} from "./main-area"
import {buildMainMenu, buildDeskMenu} from "./main-menu";
import {getCards, getDesks, getHiddenPins, getPromiseCards, setCards, setDesks, setHiddenPins} from "./utils";

//импорт изображений
// import image from './assets/image.jpg';
// document.getElementById('root'c).innerHTML = `<img sr=${image} />`;
//----------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
	const root = document.getElementById("root");
	const scrt = document.createElement("script");

	scrt.src = `https://kit.fontawesome.com/7b1e4a4b61.js`;
	scrt.crossOrigin = `anonymous`;
	document.querySelector("body").append(scrt);

	getPromiseCards()
		.then(resolve => resolve.json())
		.then(data => setCards(data))
		.catch(e => console.log(`Error: ${e}`))
		.then(() => {
			root.append(buildMainMenu());
			root.append(buildMainArea());
		})
}
