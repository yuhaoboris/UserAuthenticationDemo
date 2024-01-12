import axios from 'axios'

const API_KEY = 'AIzaSyAdfi01YglSjkIopbLNMSTCq-OHCnQAPgM'

export async function createUser(email, password) {
  const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  })
}
