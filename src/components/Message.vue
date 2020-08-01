<template>
   <div id="message" >
       <div class="fixed w-full md:w-8/12 -mt-48 h-20 bottom-0 flex items-center  bg-white">
           <input @keyup="activateBtn()" type="text" class="w-10/12 -mt-2 p-4  border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out text-gray-800" v-model="message" placeholder="type new message" autocomplete="off">
           <button class="ml-2 md:ml-4 focus:outline-none opacity-25" :class="[active ? 'opacity-100' : 'opacity-25']" @click="addMessage()">
              <img src="@/assets/images/send.png" class="h-8 w-8 md:h-10 md:w-10">
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
           message:null,
           active:false
        }
    },
    methods:{
       addMessage(){
           if(this.message!==null){
                db.collection('messages').add({
                username:this.username,
                content: this.message,
                time: Date.now()
             })
           }
          this.message=null
          this.active=false
       },
    activateBtn(){
       if(this.message!==''){
           this.active=true
      }else{
          this.active=false
      }
    },
  }
}
</script>
