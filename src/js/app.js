import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputerror } from './views/form';
import { login } from './services/auth.service'
import { notify } from './views/notifications'

const { form, inputEmail, inputPassword} = UI;
const inputs = [inputEmail, inputPassword];

// Events

form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
});
inputs.forEach(el => el.addEventListener('focus', () =>removeInputerror(el)));

// Handlers

async function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if(!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    form.reset();
    // show success notify
    notify({ msg: 'Login success', className: 'alert-success'});
  } catch (err) {
    // show error notify
    notify({ msg: 'Login faild', className: 'alert-danger'});
  }
}