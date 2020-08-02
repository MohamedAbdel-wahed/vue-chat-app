<template>
   <div id="signup">
        <div class="container mt-24 py-2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3  flex flex-col items-center mx-auto border border-gray-400 text-center rounded shadow-sm select-none">
            <h1 class="text-3xl font-bold text-indigo-500 my-6">Signup</h1>
            
            <p v-if="error" class="text-red-600 px-3 ext-red-600 mt-1 text-xs">{{error}}</p>
            <div class="my-2 px-16">
                <input type="text" name="username" autocomplete="off" placeholder="John Smith" v-model="username" class="w-64 px-3 py-2 text-sm text-gray-600 border border-gray-400 rounded focus:outline-none focus:border-indigo-300 focus:bg-gray-100">
            </div>
            <div class="my-2 px-16">
                <input type="text" autocomplete="off" placeholder="john99@gmail.com" v-model="email" class="w-64 px-3 py-2 text-sm text-gray-600 border border-gray-400 rounded focus:outline-none focus:border-indigo-300 focus:bg-gray-100">
            </div>
             <div class="my-2 px-16">
                <input type="password" autocomplete="off" placeholder="******" v-model="password" class="w-64 px-3 py-2 text-sm text-gray-600 border border-gray-400 rounded focus:outline-none focus:border-indigo-300 focus:bg-gray-100">
            </div>
            <button class="my-8 mr-4 px-4 py-2 text-sm text-white font-semibold bg-indigo-500 bg-transparent hover:text-indigo-200 focus:outline-none focus:bg-indigo-700 rounded" @click="signup()">Register</button>
        </div>
   </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase/app'
import 'firebase/auth' 
import slugify from 'slugify'

export default {
    name:'Signup',
    data(){
       return {
          username:null,
          email:null,
          password:null,
          error:null,
          slug:null,
    }
},
 methods:{
    signup(){
     if(this.username){
        this.slug= slugify(this.username,{
            replacement: '-',
            remove: /[$*_+~.()'#"!-:@]/g,
            lower: true,
        })
          db.collection('users').doc(this.slug).get()
            .then(doc=>{
              if(doc.exists){
                 this.error="username already exists!.."
              }
              else{
                  if(this.email){
                       if(this.password){
                            firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                                           .then((cred)=>{
                                               db.collection('users').doc(this.slug).set({
                                                    alias:this.slug,
                                                    user_id:cred.user.uid,
                                                    username:this.username
                                               }).then(()=>{
                                                    this.$router.push({name: 'Chat', params:{alias: this.slug}})
                                               })
                                           }).catch(err=>{
                                               this.error=err.message
                                           })
                      }
                      else{
                          this.error='Make Sure To Fill All Fields!..'
                     }
                }
                else{
                     this.error='Make Sure To Fill All Fields!..'
                  }
              }
          })
     }
     else{
       this.error='Make Sure To Fill All Fields!..'
     }

   },
 }
}
</script>

