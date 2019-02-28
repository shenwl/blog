import avatar from '../assets/avatar.jpeg';
import style from '../styles/avatar.less'

export default () => {
  const img = document.createElement('img');
  img.src = avatar;
  img.classList.add(style.avatar);
  return img;
}
