import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config'

const { form, inputEmail, inputPassword} = UI;

// Events

form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
})

// Handlers

function onSubmit() {

}