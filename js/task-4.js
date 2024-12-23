const form = document.querySelector('.login-form');
form.addEventListener('submit', submitHandler);
function submitHandler(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    return console.log('All form fields must be filled in');
  }
  const storage = {
    email: email,
    password: password,
  };
  console.log(storage);
  form.reset();
}
