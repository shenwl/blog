async function getComponent() {
  const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
  const el = document.createElement('div');
  el.innerHTML = _.join(['h', 'm', 'r']);
  return el;
}

getComponent().then(el => {
  document.body.appendChild(el);
});
