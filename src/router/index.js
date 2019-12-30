import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from "../views/home/Main"
import Program from "../views/home/Program"
import Heat from "../views/home/Heat"
import UserInfo from "../views/home/userInfo"
import ProgramItem from "../views/home/ProgramItem"


import Test from "../views/Test"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path:'/main',
        name:"main",
        component:Main
      },
      {
        path:'/program',
        name:"program",
        component:Program
      },
      {
        path:'/heat',
        name:"heat",
        component:Heat
      },
      {
        path:'/userInfo',
        name:"userInfo",
        component:UserInfo
      },
      {
        path:'/programItem',
        name:"programItem",
        component:ProgramItem
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
