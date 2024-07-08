const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener('blur', () => checkInputEmail())
username.addEventListener('blur', () => checkInputUserName())
password.addEventListener('blur', () => checkInputPassword())
passwordConfirmation.addEventListener('blur', () => checkInputPasswordConfirmation())

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

const checkInputPasswordConfirmation = () => {
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (!passwordConfirmationValue) {
    errorInput(passwordConfirmation, 'A confirmação de senha é um campo obrigatório!')
  } else if (passwordValue !== passwordConfirmationValue) {
    errorInput(passwordConfirmation, 'As senhas precisam ser idênticas.')
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = 'form-content'
  }
}

const checkForm = () => {
  checkInputUserName();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItens = form.querySelectorAll('.form-content');
  const isValid = [...formItens].every((item) => item.className === 'form-content');

  if (isValid) alert('Cadastrado com sucesso');
}

const errorInput = (input, message) => {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector('a');

  textMessage.innerText = message;
  formItem.className = 'form-content error';
}