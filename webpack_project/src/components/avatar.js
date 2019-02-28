import avatar from '../assets/avatar.jpeg';
import '../styles/avatar.less'

export default () => {
  const img = document.createElement('img');
  img.src = avatar;
  img.classList.add('avatar');
  return img;
}
