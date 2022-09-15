import {getDesks, setDesks} from "./utils";
import {buildMainArea} from "./main-area";
import {v4 as uuidv4} from "uuid";

function Desk(id, name) {
    this.id = id
    this.name = name
    this.cards = []
}
function buildMainMenu() {
    const menuSection = document.createElement('section');
    const menuLogo = document.createElement('img');
    const menuInput = document.createElement('input');
    const menuList = document.createElement('button');
    const root = document.getElementById('root');

    menuSection.id = "main-menu";

    menuLogo.classList.add("main-menu__logo");
    menuLogo.setAttribute('src', 'https://i.pinimg.com/236x/a5/4b/f4/a54bf4dddd898c6172beda106217d3d0.jpg');
    menuLogo.setAttribute('alt', 'logo');

    menuInput.classList.add("main-manu__search");
    menuInput.setAttribute('type', 'text');
    menuInput.setAttribute('placeholder', 'Поиск');

    menuList.classList.add("main-menu__list");
    menuList.textContent = 'Выбрать доску';

    let deskScreen = buildDeskMenu(1);

    menuSection.append(deskScreen);
    menuSection.append(menuLogo, menuInput, menuList);
    root.append(menuSection);

    menuList.addEventListener('click',function () {
        deskScreen.classList.toggle('active');
    })
    menuLogo.addEventListener('click',function () {
        const content = document.getElementById("main-area");
        content.remove();
        document.getElementById('root').append(buildMainArea());
    })

    return menuSection;
    }

function  buildDeskMenu(mode) {

    let deskScreen = document.createElement('div');
    let itemWrapperUp = document.createElement('div');
    itemWrapperUp.classList.add('wrapper__up');
    deskScreen.id = 'desk';

    let inputDesk;
    let addBtnDesk;
    let saveBtnDesk;
    let canselBtnDesk;
    let wrapperDown;

    const arrayDesk = getDesks();
    deskScreen.classList.add('desk');
    arrayDesk.forEach(item =>  itemWrapperUp.append(buildItemDesk(mode, item.id, item.name)));
    deskScreen.append(itemWrapperUp);

    if (mode === 1){

        wrapperDown = document.createElement('div');
        inputDesk = document.createElement('input');
        addBtnDesk = document.createElement('button');
        saveBtnDesk = document.createElement('button');
        canselBtnDesk = document.createElement('button');
        inputDesk.setAttribute('type', 'text');

        deskScreen.classList.add('false');
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

        addBtnDesk.addEventListener('click', function () {
            canselBtnDesk.style.display = 'block';
            saveBtnDesk.style.display = 'block';
            inputDesk.style.display = 'block';
            addBtnDesk.style.display = 'none';
         })
        saveBtnDesk.addEventListener('click', function () {
          if(inputDesk.value !== '') {
              const array = getDesks();
              array.push(new Desk(uuidv4(),inputDesk.value));
              setDesks(array);
              itemWrapperUp.append(buildItemDesk(1, uuidv4(), inputDesk.value));
              array.forEach(item => console.log(item));
              inputDesk.value = '';
              canselBtnDesk.style.display = 'none';
              saveBtnDesk.style.display = 'none';
              inputDesk.style.display = 'none';
              addBtnDesk.style.display = 'block';
          }else {
              inputDesk.placeholder = 'Введите текст';
          }
        })
        canselBtnDesk.addEventListener('click',function () {
            inputDesk.value = '';
            canselBtnDesk.style.display = 'none';
            saveBtnDesk.style.display = 'none';
            inputDesk.style.display = 'none';
            addBtnDesk.style.display = 'block';
        })
    }
    return deskScreen;
}

function buildItemDesk(mode, id, name) {
    let itemDesk;
    let wrapperItem;
    let editBtnItem;
    let saveBtnItem;
    let cancelBtnItem;
    let deleteBtnItem;

    itemDesk = document.createElement('input');
    wrapperItem = document.createElement('div');
    wrapperItem.classList.add('wrapper__item');
    itemDesk.setAttribute('value', `${name}`);
    itemDesk.setAttribute('type', 'text');
    wrapperItem.dataset.id = id;
    itemDesk.readOnly = true;

    wrapperItem.append(itemDesk);
    if(mode === 1){
        itemDesk.classList.add('desk-item__input-false');
    }else itemDesk.classList.add('desk-item__input-true');

    if (mode === 1) {
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

        editBtnItem.addEventListener('click', function () {
            editBtnItem.style.display = "none";
            deleteBtnItem.style.display = "none";
            saveBtnItem.style.display = "block";
            cancelBtnItem.style.display = "block";
            itemDesk.readOnly = false;
        })

        cancelBtnItem.addEventListener('click', function () {
           const array = getDesks();
           const cardId = wrapperItem.dataset.id;
            itemDesk.value = array.find(item => item.id === cardId).name;
            editBtnItem.style.display = "block";
            deleteBtnItem.style.display = "block";
            saveBtnItem.style.display = "none";
            cancelBtnItem.style.display = "none";
            itemDesk.readOnly = true;
        })

        deleteBtnItem.addEventListener('click',function () {
            const array = getDesks();
            const cardId = wrapperItem.dataset.id;
            const deskIndex = array.findIndex(item => item.id === cardId);
            array.splice(deskIndex, 1);
            setDesks(array);
            wrapperItem.remove();
            buildDeskMenu(1);
        })

        saveBtnItem.addEventListener('click', function () {
           if (itemDesk.value !== ''){
                const array = getDesks();
                const cardId = wrapperItem.dataset.id;
               const deskItem = array.find(item => item.id === cardId);
               deskItem.name = itemDesk.value;
                setDesks(array);
                editBtnItem.style.display = "block";
                deleteBtnItem.style.display = "block";
                saveBtnItem.style.display = "none";
                cancelBtnItem.style.display = "none";
                itemDesk.readOnly = true;
            } else itemDesk.placeholder = 'Введите текст';
        })
    }
    itemDesk.addEventListener('click', function () {
        let deskId = wrapperItem.dataset.id;
        const content = document.getElementById("main-area");
        content.remove();

        document.getElementById("root").append(buildMainArea(deskId));
    })
    return wrapperItem;
}
export {buildMainMenu, buildDeskMenu};