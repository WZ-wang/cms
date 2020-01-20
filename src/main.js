import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/iconfont/iconfont.css"
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach')
//   if(localStorage.getItem("Token")){
//     next()
//   }else{
//     next("/")
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')