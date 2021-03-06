import axios from 'axios'
import {
  Message,
  Loading
} from 'element-ui';
import router from './router'

// 定义loading变量
let loading

// 使用Elem loading-start方法
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '加载中···',
    background: 'rgba(0,0,0,0.7)'
  })
}

// 使用Elem loading-close方法
function endLoading() {
  loading.close()
}

// 请求拦截
axios.interceptors.request.use(config => {
  // 加载
  // startLoading()
  if (localStorage.eleToken)
    config.headers.Authorization = localStorage.eleToken
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
  // endLoading()
  return response
}, error => {
  // 错误提醒
  // endLoading()
  Message.error(error.response.data)
  console.log(error)

  // const {
  //   status
  // } = error.response
  // if (status == 401) {
  //   Message.error('token值无效，请重新登录')
  //   // 清除token
  //   localStorage.removeItem('eleToken')
  //   // 页面跳转
  //   router.push('/login')
  // }

  return Promise.reject(error)
})

export default axios