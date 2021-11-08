import api from "../api"
import qs from 'qs'

const register = ( data ) => {

  const PATH = 'account/register/'

  const request = api({
    method: 'POST',
    data: qs.stringify(data),
    url: PATH
  })

  // send request 
  request.then(data => {
    return data.data
  })
  .then(res => {
    console.log(res)
    alert('Sueccess')
  })
  .catch((error) => {
    alert('Failed')
    console.log(error.toJSON())
  })

}

export {
  register
}