const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkInputUserName();
  checkInputEmail();
  checkInputPassword();
})

const checkInputUserName = () => {
  const usernameValue = username.value;

  if (!usernameValue) {
    errorInput(username, 'Nome de usuário é um campo obrigatório!')
  } else {
    const formItem = username.parentElement;
    formItem.className = 'form-content'
  }
}

const checkInputEmail = () => {
  const emailValue = email.value;

  if (!emailValue) {
    errorInput(email, 'Email é um campo obrigatório!')
  } else {
    const formItem = email.parentElement;
    formItem.className = 'form-content'
  }
}

const checkInputPassword = () => {
  const passwordValue = password.value;

  if (!passwordValue) {
    errorInput(password, 'Senha é um campo obrigatório!')
  } else if (passwordValue.length < 8) {
    errorInput(password, 'Sua senha deve ter no mínimo 8 caracteres.')
  } else {
    const formItem = password.parentElement;
    formItem.className = 'form-content'
  }
}



const errorInput = (input, message) => {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector('a');

  textMessage.innerText = message;
  formItem.className = 'form-content error';
}