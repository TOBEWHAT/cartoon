import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cartoon',
    name: 'Cartoon',
    component: () => import('../views/Cartoon.vue')
  },
  {
    path: '/user/login',
    name: 'Login',
    component: () => import('../views/user/Login.vue')
  },
  {
    path: '/cartoon/list',
    name: 'list',
    component: () => import('../views/cartoon/list.vue')
  },
  {
    path: '/cartoon/detail',
    name: 'detail',
    component: () => import('../views/cartoon/detail.vue')
  },
  {
    path: '/cartoon/pagelist',
    name: 'pagelist',
    component: () => import('../views/cartoon/pagelist.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})
export default router
