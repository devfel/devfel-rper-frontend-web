import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3333',
})

// const api = axios.create({
//   baseURL: 'https://rper-backend.herokuapp.com',
// })

export default api

export const handleUploadImage = (
  files: any,
  info: any,
  uploadHandler: any,
) => {
  const data = new FormData()

  data.append('image', files[0])

  api
    .post('rpers/images', data)
    .then(apiResponse => {
      const response = {
        result: [
          {
            url: apiResponse.data,
            name: files[0].name,
            size: files[0].size,
          },
        ],
      }

      uploadHandler(response)
    })
    .catch((error: any) => uploadHandler(error.toString()))
}
