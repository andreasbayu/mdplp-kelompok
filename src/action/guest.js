import api from "../api"
import qs from 'qs'
import axios from "axios"

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
  })
  .catch((error) => {
    console.log(error.toJSON())
    return "Terjadi masalah"
  })

}

export {
  register
}