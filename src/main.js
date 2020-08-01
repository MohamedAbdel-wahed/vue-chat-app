import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import '@/assets/style.css'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.config.productionTip = false

let app=null ;

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    
    app=new Vue({
     router,
     render: h => h(App)
   }).$mount('#app')
  
  }
  
})