<template>
   <div id="message">
       <div class="relative flex items-center -mt-32 px-2">
           <input type="text" class="w-10/12 -mt-2 p-4 border-b border-gray-300 focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out text-sm" v-model="message" placeholder="type new message" autocomplete="off">
           <button class="ml-2 focus:outline-none" @click="addMessage()">
              <img src="@/assets/send.png" class="h-8 w-8">
           </button>
       </div>
   </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'Message',
    props:['username'],
    data(){
        return {
           message:null
        }
    },
    methods:{
       addMessage(){
           if(this.message){
                db.collection('messages').add({
                username:this.username,
                content: this.message,
                time: Date.now()
             })
           }
          this.message=null
       }
    },
    created(){
    }
}
</script>

    