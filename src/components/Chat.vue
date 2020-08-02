<template>
    <div id="chat">
        <div class="relative mt-16 container w-full sm:w-10/12 md:w-2/3 mx-auto bg-gray-200 py-4 border border-gray-400 shadow-sm overflow-y-hidden">
           <div id="messages" v-chat-scroll class="container flex flex-col items-center px-10 overflow-scroll pb-56" style="height:37.5rem">
            
               <!-- Looping Through All Messages -->
                <div v-for="(msg,index) in messages" :key="index" :class="[auth_id==msg.userId ? ['border-green-300','mr-24','md:mr-48']: ['border-indigo-300','translate-x-24','md:translate-x-48']]" class="transform mt-4 w-10/12 sm:w-2/3 border bg-white rounded px-2 pb-3 mr-24 md:mr-48">
                    <h1 :class="[auth_id==msg.userId ? 'text-green-600': 'text-indigo-600']" class="text-green-600 font-semibold select-none"><b class="text-4xl ">.</b> {{msg.username}}</h1>
                    <p class="ml-3 text-xs md:text-sm text-gray-800">{{msg.content}}</p>
                    <p class="text-gray-500 flex mt-2 ml-3 text-xs md:text-sm font-semibold select-none">{{msg.time}}</p>
                </div>
          
           </div>

           <!-- Rendering Message Component -->
           <Message />

        </div>
    </div>
</template>

<script>
import Message from '@/components/Message'
import moment from 'moment-timezone'
import db from '@/firebase/init'
import firebase from 'firebase/app'
import 'firebase/auth' 


export default {
   name: 'Chat',
   components:{
       Message,
   },
   data(){
       return{
           messages:[],
           auth_id:null
       }
   },
   methods:{
           
   },
   created(){

       // Real Time Adding Messages To the Chat 
     db.collection('messages').orderBy("time", "asc").onSnapshot(snapshot=>{
         let changes= snapshot.docChanges();
         changes.forEach(change=>{
             if(change.type=='added'){
                let timezone= moment.tz(change.doc.data().time, moment.tz.guess())
                this.messages.push({
                    id:change.doc.id,
                    userId:change.doc.data().userId,
                    username:change.doc.data().username,
                    content:change.doc.data().content,
                    time:timezone.format('LT')
                })   
             }

         })
     })


      // Check the user if authenticated or not 
       firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.auth_id=user.uid
            }
        })
    }
}
</script>

<style scoped>
   #messages::-webkit-scrollbar{
       width:3px;
   }

   #messages::-webkit-scrollbar-track{
       background:white
   }

   #messages::-webkit-scrollbar-thumb{
       background:gray
   }

</style>