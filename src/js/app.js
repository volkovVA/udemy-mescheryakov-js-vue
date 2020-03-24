import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'
import '../css/style.css';
import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputerror } from './views/form';
import { login, register, getCity, getCountries } from './services/auth.service';
import { notify } from './views/notifications';
import { getNews } from './services/news.service';

const { form, inputEmail, inputPassword, formReg, country, city, date_of_birth, gender} = UI;
const inputs = [inputEmail, inputPassword];

// Reset city

  country.addEventListener('focus', ()=>{
  city.value = ''
})

// Autocomplite countries

let countries = getCountries()
countries.then(countries=> {
  $(function() {
    $('#country').autocomplete({
      source: countries,
      select: function(event, ui) {

        let selCountry = event.toElement.text;
        let idCountry = countries.indexOf(selCountry)+1;
        console.log(idCountry, selCountry)
        autocompleteCitys(idCountry);
        city.disabled = 0;
      }
    });
  });
});

// Autocomplite cities

function autocompleteCitys(idCountry){
  let cities = getCity(idCountry);
  cities.then(cities => {
    $(function() { $('#city').autocomplete({ source: cities }) });
  })
}

// Events

form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
});
inputs.forEach(el => el.addEventListener('focus', () =>removeInputerror(el)));

formReg.addEventListener('submit', e => {
  e.preventDefault();
  onSubmitRegForm();
});

//Generate user info

function onSubmitRegForm(){
  let inputsReg = formReg.querySelectorAll('.form-control');
  let userReg = {};
  inputsReg.forEach(item => {
    let obj={};
    let key = item.name
    obj[key] = item.value
    // userReg.push(obj)
    Object.assign(userReg, obj);
  })

  let [date_of_birth_year, date_of_birth_month, date_of_birth_day] = date_of_birth.value.split('-');

  userReg.date_of_birth_day = date_of_birth_day;
  userReg.date_of_birth_month = date_of_birth_month;
  userReg.date_of_birth_year = date_of_birth_year;
  userReg.gender_orientation = gender.value;
  delete userReg[''];

  console.log(userReg)
  regUser(userReg);
}

async function regUser(user){
  try {
    await register(user);
    notify({ msg: 'register success', className: 'alert-success' });
  } catch (err) {
    notify({ mas: 'register faild', className: 'alert-danger' });
  }
}

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
    await getNews();
    form.reset();
    // show success notify
    notify({ msg: 'Login success', className: 'alert-success'});
  } catch (err) {
    // show error notify
    notify({ msg: 'Login faild', className: 'alert-danger'});
  }
}