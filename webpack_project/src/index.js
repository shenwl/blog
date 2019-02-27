import header from './components/header';
import avatar from './assets/avatar.jpeg';

const dom = document.getElementById('root');

dom.append(header());

console.log(avatar);

const img = document.createElement('img');

img.src = avatar;

dom.append(img);




