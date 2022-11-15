import axios from 'axios'

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dh8mksait/image/upload'

const upload = (formData: object) =>
  axios
    .post(CLOUDINARY_UPLOAD_URL, formData)
    .then(response => response.data.url)
    .catch((err) => {
      console.error(err)
    })
export { upload }
