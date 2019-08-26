async function getComponent() {
  const _ = await import('lodash');
  const el = document.createElement('div');
  el.innerHTML = _.join(['h', 'm', 'r']);
  return el;
}

getComponent().then(el => {
  document.body.appendChild(el);
});
