function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttoncreate = document.querySelector('[data-create]');
const buttonremove = document.querySelector('[data-destroy]');

buttoncreate.addEventListener('click', () => {
  const div = document.createElement('div');
  div.style.backgroundColor = getRandomHexColor();
  div.style.width = '30px';
  div.style.height = '30px';
  div.classList.add('created-div');
  document.body.appendChild(div);
});

buttonremove.addEventListener('click', () => {
  const div = document.querySelector('.created-div');
  if (div) {
    div.remove();
  }
});
