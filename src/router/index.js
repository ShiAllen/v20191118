import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
//import Home from '../views/Home.vue'
import Login from '@/views/login/Login.vue'
//import MyUI from '@/components/MyUI.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    //component: Home
    component: () => import(/* webpackChunkName: "home" */  '@/views/Home.vue')
  
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/myui',
    name: 'myui',
    //component: MyUI
    component: () => import(/* webpackChunkName: "myui" */  '@/components/MyUI.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const middleware = function (to, from, next) {
  // -- 登入權限處理 --
   console.log( "----------middleware---------",from);
   console.log( "---------- to ---------" ,to);
   console.log( "---------- to ---------",next );
   debugger ;

  let promiseIsLogin = store.dispatch('actionCheckLoginStatus') ;

  promiseIsLogin 
    .then(data => {
      if (data.success === true) {
        // -- 已登入 --
        if (to.name === 'login') {
          next({ name: 'home' }) //不需 由login 轉回 進到 home
        } else {
          next() // 進入  指定
        }
      } else {
        // -- 未登入 --
        if (to.name === 'login') {
          next()
        } else {
          next({ name: 'login' })
        }
      }
    })
    .catch(e => {
      next()
    })
}


router.beforeEach(middleware) ;


export default router
