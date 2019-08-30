document.addEventListener('click', () => {
  import('./handleClick.js').then(({ default: handleClick }) => {
    handleClick();
  });
});
