const input = document.querySelector('input');
const output = document.querySelector('span');
input.addEventListener('input', event => {
  output.textContent = event.currentTarget.value.trim() || 'Anonymous';
});
