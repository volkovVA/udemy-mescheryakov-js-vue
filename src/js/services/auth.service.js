import axios from '../plugins/axios';
import API_ENV from '../config/api.config';

/**
 * Funxtion login. Make login request to API
 * @param {String} email
 * @param {String} password
 */
export async function login(email, password) {
  try {
    const response = await axios.post(
      `/auth/login`,
      JSON.stringify({ email, password }),
    );

    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export async function register(user) {
  try {
    const response = await axios.post(
      `${API_ENV.apiUrl}/auth/signup`,
      JSON.stringify(user),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export async function getCountries() {
  try {
    const response = await axios.get(`${API_ENV.apiUrl}/location/get-countries`);
    let countries=[];
    for(let item in response){
      countries.push( response[item] )
    }
    return countries;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export async function getCity(COUNTRY_INDEX) {
  try {
    const response = await axios.get(
      `${API_ENV.apiUrl}/location/get-cities/${COUNTRY_INDEX}`,
    );
    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
