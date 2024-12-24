function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');
button.addEventListener('click', () => {
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = span.textContent;
});
