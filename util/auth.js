import axios from 'axios'

const API_KEY = 'AIzaSyAdfi01YglSjkIopbLNMSTCq-OHCnQAPgM'

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
  const res = await axios.post(url, {
    email,
    password,
  })
}

export async function createUser(email, password) {
  await authenticate('signUp', email, password)
}

export async function login(email, password) {
  await authenticate('signInWithPassword', email, password)
}
