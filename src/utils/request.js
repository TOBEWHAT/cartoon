import axios from 'axios'
// import store from '@/store'
import NProgress from 'nprogress'
import { Message } from 'element-ui'

NProgress.configure({ showSpinner: false })
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 232000,
  headers: {
    'Content-Type': 'application/json',
    // eslint-disable-next-line quote-props
    'Accept': 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // eslint-disable-next-line dot-notation
    // 看token存不存在
    if (localStorage.userToken) {
      // 設置統一的請求header
      // console.log(localStorage.userToken)
      config.headers.auth = localStorage.userToken
    }
    NProgress.start()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
request.interceptors.response.use(
  response => {
    NProgress.done()
    return response
  },
  error => {
    Message.error({
      message: error.message
    })
    NProgress.done()
    return Promise.reject(error)
  }
)
export default request
