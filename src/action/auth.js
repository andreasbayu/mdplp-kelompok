import api from '../api'
import qs from 'qs'

const login = data => {

  const PATH = 'account/login/'

  const request = api({
    method: 'POST',
    data: qs.stringify(data),
    url: PATH
  })

  // send request
  request.then(data => {
    // return response data
    return data.data
  })
  .then(res => {
    const token = res.result.token
    if (token !== undefined) {
      alert('Success')
      setToken('token', token)
      window.location.reload()
      window.location.href ='/user/'
    }
  })
  .catch(error => alert('Login Failed, Invalid username or password'))
}

const logout = () => {
  clearToken('token')
}

const isLoggedIn = () => {
  const token = getToken()
  if (token !== null) return true
  return false
}

const getToken = () => {
  return localStorage.getItem('token')
}

const setToken = (key, value) => {
  return localStorage.setItem(key, value)
}

const clearToken = (key) => {
  localStorage.removeItem(key)
}

export {
  login,
  logout,
  isLoggedIn,
  getToken,
  setToken,
  clearToken
}