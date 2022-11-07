import axios from 'axios'

const upload = (formData: object) =>
  axios
    .post(process.env.VUE_APP_CLOUDINARY_UPLOAD_URL, formData)
    .then(response => response.data.url)
    .catch((err) => {
      console.error(err)
    })
export { upload }
