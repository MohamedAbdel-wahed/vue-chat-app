import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Chat from '@/components/Chat'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
     {
      path: '/chat/:username',
      name:'Chat',
      component: Chat,
      props: true,
    }
  
  ]
})
  