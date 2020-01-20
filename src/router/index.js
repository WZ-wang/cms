import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from "../views/home/Main"
import Program from "../views/home/Program"
import Heat from "../views/home/Heat"
import UserInfo from "../views/home/userInfo"
import ProgramItem from "../views/home/ProgramItem"
import MyLove from "../views/home/user/MyLove"
import MyProgram from "../views/home/user/MyProgram"
import MyStudy from "../views/home/user/MyStudy"
import MyRate from "../views/home/user/MyRate"
import PersonInfo from "../views/home/user/PersonInfo"
import ProgramUpload from "../views/home/user/ProgramUpload"

import Test from "../views/Test"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/main",
    name: 'home',
    component: Home,
    children: [{
        path: '/main',
        name: "main",
        component: Main
      },
      {
        path: '/program',
        name: "program",
        component: Program
      },
      {
        path: '/heat',
        name: "heat",
        component: Heat
      },
      {
        path: '/userInfo',
        name: "userInfo",
        component: UserInfo,
        redirect: "/personInfo",
        children: [{
            path: '/mylove',
            name: "mylove",
            component: MyLove
          },
          {
            path: '/myProgram',
            name: "myProgram",
            component: MyProgram
          },
          {
            path: '/myStudy',
            name: "myStudy",
            component: MyStudy
          },
          {
            path: '/myRate',
            name: "myRate",
            component: MyRate
          },
          {
            path: '/personInfo',
            name: "personInfo",
            component: PersonInfo
          },
          {
            path: '/programUpload',
            name: "programUpload",
            component: ProgramUpload
          },
        ]
      },
      {
        path: '/programItem/:id',
        name: "programItem",
        component: ProgramItem
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