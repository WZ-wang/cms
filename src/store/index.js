import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state: {
    userInfo:{},
    isLogin:false,
    isShowLoading:true
  },
  mutations: {
    getUser(state,userInfo){
      state.userInfo = userInfo
    },
    editUser(state){
    },
    checkToken(state){
      if (localStorage.getItem("Token")) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
    changeLoading(state,isShow){
      state.isShowLoading = isShow
    }
  },
  actions: {
    editUser({commit}){
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
