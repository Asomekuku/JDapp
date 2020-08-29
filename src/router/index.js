import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home=()=>import('@/views/Home.vue')

const router = new VueRouter({
  routes:[
    {path:'/home',component:Home},
    {path:'*',redirect:'/home'}
  ]
})

export default router
