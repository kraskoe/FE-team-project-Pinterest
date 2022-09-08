function buildMainMenu() {
    const menuSection = document.createElement('section');
    const menuLogo = document.createElement('img');
    const menuInput = document.createElement('input');
    const menuList = document.createElement('button');
    const root = document.getElementById('root')

    menuSection.id = "main-menu";

    menuLogo.classList.add("main-menu__logo");
    menuLogo.setAttribute('src', 'https://i.pinimg.com/236x/a5/4b/f4/a54bf4dddd898c6172beda106217d3d0.jpg');
    menuLogo.setAttribute('alt', 'logo');

    menuInput.classList.add("main-manu__search");
    menuInput.setAttribute('type', 'text');
    menuInput.setAttribute('placeholder', 'Поиск');
    
    menuList.classList.add("main-menu__list");
    menuList.textContent = 'Выбрать доску';

    menuSection.append(menuLogo, menuInput, menuList);
    root.append(menuSection);
    return menuSection;
}
function  buildDeskMenu(mode) {

    let deskScreen = document.createElement('div');
    let itemWrapperUp = document.createElement('div');
    itemWrapperUp.classList.add('wrapper__up');

    let inputDesk;
    let addBtnDesk;
    let saveBtnDesk;
    let canselBtnDesk;
    let wrapperDown;
    const arrayDesk = [
        {id:1},
        {id:2},
        {id:3}
    ];

    deskScreen.classList.add('desk');
    arrayDesk.forEach(item =>  itemWrapperUp.append(buildItemDesk(mode, item.id)));
    deskScreen.append(itemWrapperUp);

    if (mode === 1){

        wrapperDown = document.createElement('div');
        inputDesk = document.createElement('input');
        addBtnDesk = document.createElement('button');
        saveBtnDesk = document.createElement('button');
        canselBtnDesk = document.createElement('button');

        wrapperDown.classList.add('wrapper__down');
        inputDesk.classList.add('desk__input');
        addBtnDesk.classList.add('desk__btn_add');
        saveBtnDesk.classList.add('desk__btn_save');
        canselBtnDesk.classList.add('desk__btn_cansel');

        addBtnDesk.textContent = 'Add';
        canselBtnDesk.textContent = 'Cancel';
        saveBtnDesk.textContent = 'Save';

        canselBtnDesk.style.display = 'none';
        saveBtnDesk.style.display = 'none';
        inputDesk.style.display = 'none';

        wrapperDown.append(addBtnDesk, inputDesk, saveBtnDesk, canselBtnDesk);
        deskScreen.append( wrapperDown);

    }
    return deskScreen;
}

function buildItemDesk(mode, id) {
    let itemDesk;
    let wrapperItem;
    let editBtnItem;
    let saveBtnItem;
    let cancelBtnItem;
    let deleteBtnItem;

    itemDesk = document.createElement('input');
    wrapperItem = document.createElement('div');
    wrapperItem.classList.add('wrapper__item')
    itemDesk.classList.add('desk-item__input-true');
    itemDesk.setAttribute('type', 'text');
    itemDesk.setAttribute('date', `${id}'`);

    wrapperItem.append(itemDesk);

    if (mode === 1) {
        itemDesk.classList.remove('desk-item__input-true');
        itemDesk.classList.add('desk-item__input-false');

        editBtnItem = document.createElement('button');
        saveBtnItem = document.createElement('button');
        cancelBtnItem = document.createElement('button');
        deleteBtnItem = document.createElement('button');

        editBtnItem.classList.add('desk__btn-edit_item');
        cancelBtnItem.classList.add('desk__btn-cancel_item');
        deleteBtnItem.classList.add('desk__btn-delete_item');
        saveBtnItem.classList.add('desk__btn-save_item');

        editBtnItem.textContent = 'Edit';
        saveBtnItem.textContent = 'Save';
        cancelBtnItem.textContent = 'Cancel';
        deleteBtnItem.textContent = 'Delete';

        saveBtnItem.style.display = "none";
        cancelBtnItem.style.display = "none";

        wrapperItem.append(editBtnItem, saveBtnItem, cancelBtnItem, deleteBtnItem);
    }

    return wrapperItem;
}

export {buildMainMenu, buildDeskMenu};