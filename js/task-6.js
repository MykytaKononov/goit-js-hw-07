function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttoncreate = document.querySelector('[data-create]');
const buttonremove = document.querySelector('[data-destroy]');
const amount = document.querySelector('input');
const divboxes = document.querySelector('#boxes');

function createBoxes(amount) {
  const result = document.createDocumentFragment();
  if (amount.value <= 100) {
    for (let i = amount.value; i > 0; i -= 1) {
      const div = document.createElement('div');
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = '30px';
      div.style.height = '30px';
      div.classList.add('created-div');
      result.appendChild(div);
    }
    divboxes.appendChild(result);
  } else {
    alert('Please enter a number less than 100');
  }
}

function removeBoxes() {
  const divs = document.querySelectorAll('.created-div');
  divs.forEach(divs => divs.remove());
}

buttoncreate.addEventListener('click', () => {
  removeBoxes();
  createBoxes(amount);
});

buttonremove.addEventListener('click', () => {
  removeBoxes();
});
