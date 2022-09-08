import {getCards} from "./utils";
import {buildInterestCard} from "./card";

function buildMainArea(deskCards) {

    let cards = getCards();
    let countColumn = 6;
    const mainArea = document.createElement('section')
    mainArea.id = 'main-area'
    let columnMainArea = []

    for (let i = 0; i < countColumn; i++) {
        columnMainArea[i] = document.createElement('div');
        columnMainArea[i].classList.add('columnMainArea__class')
        mainArea.append(columnMainArea[i])
    }

    for( let i = 0; i < cards.length;){
        for (let column of columnMainArea){
            column.append(buildInterestCard(cards[i]))
            i++;
            if(i >= cards.length)
                break;
        }
    }

    return mainArea
}

export{buildMainArea}