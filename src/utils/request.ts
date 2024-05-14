import axios from "axios";

export const request = axios.create({
  baseURL: process.env.TARO_APP_BASE_URL,
  timeout: 10000
})

const LOGIN_PATH: string[] = []
request.interceptors.request.use(async config => {
  const isLoginPath = LOGIN_PATH.some(path => config.url?.includes(path))
  if (!isLoginPath) {
    // todo 等待确定后端认证方式
    // config.headers.set('Authorization', await null)
  }
  return config
})

request.interceptors.response.use(
  response => {
    const { status, data } = response
    if (status === 200 && data) {
      // TODO handle more server response codes
      if (data.code === 200) {
        return data.data
      } else {
        throw new Error(data.message)
      }
    }
    return response
})

