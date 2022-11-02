import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect:'/home',
    children: [
      {
      path: '/home',
      name: 'home',
      component: () => import('../views/home')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user')
      },
      {
        path: '/huodong',
        name: 'huodong',
        component: () => import('../views/huodong')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user')
      },
      {
        path: '/xueyuan',
        name: 'page1',
        component: () => import('../views/xueyuanguanli/xueyuan.vue')
      },
      {
        path: '/xiaoyou',
        name: 'page2',
        component: () => import('../views/xueyuanguanli/xueyuan.vue')
      },
      {
          path: '/zhufu',
          name: 'zhufu',
          component: () => import('../views/zhufu/index.vue')
      },
      {
          path: '/bkground',
          name: 'bkground',
          component: () => import('../views/bkground/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
