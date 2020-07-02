import request from '../utils/request'
// import qs from 'qs'

const codeLogin = query => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: query
    // data: qs.stringify(query)
  })
}
export {
  codeLogin
}
