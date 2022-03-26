import axios from 'axios'

const URL =
  process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_DEV_API_URL

const instance = axios.create({ baseURL: URL })
instance.interceptors.request.use((config) => {
  config.params = {
    // add your default ones
    // api_key: process.env.NEXT_PUBLIC_API_KEY,
    // spread the request's params
    ...config.params,
  }
  return config
})
export default instance