import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home=()=>import('@/views/Home.vue')
const Find=()=>import('@/views/Find.vue')
const Cart=()=>import('@/views/Cart.vue')
const User=()=>import('@/views/User.vue')
const Detail=()=>import('@/views/Detail.vue')
const Sign=()=>import('@/views/Sign.vue')
const Register=()=>import('@/views/Register.vue')

const router = new VueRouter({
  routes:[
    {path:'/home',component:Home},
    {path:'/find',component:Find},
    {path:'/cart/:id',component:Cart},
    {path:'/user',component:User},
    {path:'/detail/:id',component:Detail},
    {path:'/sign',component:Sign},
    {path:'/register',component:Register},
    {path:'/*',redirect:'/home'}
  ]
})

export default router
