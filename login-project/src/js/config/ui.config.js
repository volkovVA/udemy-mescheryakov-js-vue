const UI = {
  form: document.forms['loginForm'],
  inputEmail: document.getElementById('email'),
  inputPassword: document.getElementById('password'),

  formReg: document.forms['registerForm'],
  country: document.getElementById('country'),
  city: document.getElementById('city'),
  date_of_birth: document.getElementById('date_of_birth'),
  gender: document.querySelector('.custom-select'),
}

export default UI;