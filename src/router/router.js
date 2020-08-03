import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Chat from '@/components/Chat'
import Friends from '@/components/Friends'
import NotFound from '@/components/NotFound'
import db from '@/firebase/init'
import firebase from 'firebase/app'
import 'firebase/auth'



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
      path: '/chat/:alias',
      name:'Chat',
      component: Chat,
      props: true,
      beforeEnter:(to,from,next)=>{
        firebase.auth().onAuthStateChanged(user=>{
          if(user){
            db.collection('users').where('alias','==', to.params.alias).get().then(result=>{
              
                if(result.docs.length>0){
                   result.docs.forEach(doc=>{
                         let sus_user_id= doc.data().user_id;
                         if(sus_user_id === user.uid){
                              next()
                         }
                         else{
                           next({name: 'NotFound'})
                         }
                    })
                }
                else{
                  next({name: 'NotFound'})
                }
            })
          }
          else{
            next({name:'Signin'})
          }
        })
      }
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path:'*',
      name: 'NotFound',
      component: NotFound
    }
  
  ]
})
  