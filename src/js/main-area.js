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


function buildInterestCard(card) {
    const cardWrapper = document.createElement('div');

    cardWrapper.style.backgroundColor = '#ccc';
    cardWrapper.style.borderRadius = '1rem';
    cardWrapper.style.width = '4rem';
    cardWrapper.style.height = '25rem';

    return cardWrapper;
}

function getCards(){
    return [{
        id: 'photo',
        desc: 'img',
        avatarUrl: 'serg',
        userName: 'sergg'
    }]
}
export{buildMainArea}