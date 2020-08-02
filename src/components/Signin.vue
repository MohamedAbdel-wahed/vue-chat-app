<template>
   <div id="signin">
       <div class="container mt-24 py-2 w-full sm:w-7/12  md:w-5/12 lg:w-1/3 flex flex-col items-center mx-auto border border-gray-400 text-center rounded shadow-sm select-none overflow-x-hidden">
            <h1 class="text-3xl font-bold text-indigo-500 my-6">Signin</h1>

            <p v-if="error" class="text-red-600 px-3 mt-1 text-xs">{{error}}</p>
            <div class="my-2 ">
                <input type="text" placeholder="Enter Your Email" v-model="email" class="w-64 px-3 py-2 text-sm text-gray-600 border border-gray-400 rounded focus:outline-none focus:border-indigo-300 focus:bg-gray-100">
            </div>
             <div class="my-2 ">
                <input type="password" autocomplete="off" placeholder="Enter Your Password" v-model="password" class="w-64 px-3 py-2 text-sm text-gray-600 border border-gray-400 rounded focus:outline-none focus:border-indigo-300 focus:bg-gray-100">
            </div>
            <button class="my-4 mr-4 px-4 py-2 text-sm text-white font-semibold bg-indigo-500 bg-transparent hover:text-indigo-200 focus:outline-none focus:bg-indigo-700 rounded" @click="signin()">Enter The Chat</button>
        </div>
   </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '@/firebase/init'

export default {
    name:'Signin',
    data(){
       return {
           email:null,
           password:null,
           error:null
       }
    },
    methods:{
       signin(){
            if(this.email){
               if(this.password){
                  firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                          .then((cred)=>{
                                let userId= cred.user.uid
                                db.collection('users').where('user_id','==',userId).get().then(result=>{
                                   result.docs.forEach(doc=>{
                                      this.error=null
                                      this.$router.push({name: 'Chat', params:{alias: doc.data().alias}})
                                   })
                                })
                          }).catch(err=>{
                             this.error=err.message
                          })
               }
               else{
                  this.error="Make Sure To Fill All Fields!.."
               }
            }
            else{
               this.error="Make Sure To Fill All Fields!.."
            }
       }
    }
}
</script>

