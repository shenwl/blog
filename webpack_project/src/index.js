import '@babel/polyfill';

import './style.css';
import header from './components/header';
import avatar from './components/avatar';

const dom = document.getElementById('root');
dom.append(header());
dom.append(avatar());

console.log("hello world");

const btn = document.createElement('button');
btn.innerText = '新增';
document.body.appendChild(btn);

btn.onclick = () => {
  const div = document.createElement('div');
  div.innerHTML = 'item';
  document.body.appendChild(div);
};
