import '../scss/main-area.scss';

import{buildMainArea} from "./main-area";

//импорт изображений
// import image from './assets/image.jpg';
// document.getElementById('root').innerHTML = `<img src=${image} />`;

console.log('Hello, world!');
document.body.append(buildMainArea([1,2,3,4,5,6,7,8]));
