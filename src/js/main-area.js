import {getCards, getDesks, getHiddenPins} from "./utils";
import {buildInterestCard} from "./card";

function buildMainArea(deskId) {
    const mainArea = document.createElement('section');
    mainArea.id = 'main-area';
    const cards = handleCards(mainArea);

    if (deskId) mainArea.dataset.deskId = deskId;

    fillArea(mainArea, cards);

    window.addEventListener('resize',  adjustColumnsOnResize);

    return mainArea;
}

function handleCards(mainArea) {
    let cards = getCards();
    const hidden = getHiddenPins();
    const deskID = mainArea.dataset.deskId;
    const search = document.querySelector('.main-manu__search');
    
    hidden.forEach(el => {cards = cards.filter(card => card.id != el)});

    if (deskID) {
        const deskCards = getDesks().find(desk => desk.id = deskID);
        const tempArr = [];
        deskCards.forEach(el => {
            let card = cards.find(obj => obj.id === el);
            if (card) {
                tempArr .push(card);
            }
            cards = tempArr;
        })
    }
    if (search.value.length >= 3) {
        cards.filter(card => card.desc.toLowerCase().includes(search.value.toLowerCase()));
    }
    return cards;
}

function fillArea(mainArea, cards) {
    let width = document.body.clientWidth;
    let countColumn;
    if (width >= 1680) {
        countColumn = 6;
    } else if (width >= 1280) {
        countColumn = 5;
    } else if (width >= 1024) {
        countColumn = 4;
    } else if (width >= 768) {
        countColumn = 3;
    } else {
        countColumn = 1;
    }

    let columnMainArea = [];

    for (let i = 0; i < countColumn; i++) {
        columnMainArea[i] = document.createElement('div');
        columnMainArea[i].classList.add('columnMainArea__class');
        columnMainArea[i].style.flex = `0 1 ${1 / countColumn * 100}%`;
        mainArea.append(columnMainArea[i]);
    }

    for( let i = 0; i < cards.length;){
        for (let column of columnMainArea){
            column.append(buildInterestCard(cards[i]))
            i++;
            if(i >= cards.length)
                break;
        }
    }
}

function adjustColumnsOnResize() {
    const mainArea = document.getElementById('main-area');
    const root = document.getElementById('root');
    let deskId;
    if (mainArea.dataset?.deskId) {
        deskId = mainArea.dataset.deskId;
        mainArea.remove();
        root.append(buildMainArea(deskId));
    } else {
        mainArea.remove();
        root.append(buildMainArea());
    }
}

export{buildMainArea}