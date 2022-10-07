import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:3333',
// })

const api = axios.create({
  baseURL: 'https://rper-backend.herokuapp.com',
})

export default api
