import axios from 'axios'

export default axios.create({
  baseURL: 'https://api-testoo.herokuapp.com',
  timeout: 5000,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})