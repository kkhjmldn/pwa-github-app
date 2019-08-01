import axios from 'axios'

// eslint-disable-next-line no-trailing-spaces
export default() => { 
  return axios.create({
    baseURL: 'https://api.github.com/'
  })
// eslint-disable-next-line eol-last
}