import header from './components/header';
import avatar from './assets/avatar.jpeg';
import './index.less';

const dom = document.getElementById('root');
dom.append(header());


const img = document.createElement('img');
img.src = avatar;
img.classList.add('avatar');

dom.append(img);




