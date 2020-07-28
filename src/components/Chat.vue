<template>
    <div id="chat">
        <div class="select-none overflow-y-hidden container w-full sm:w-10/12 md:w-2/3 mx-auto bg-gray-100 py-6 border border-gray-300 shadow-sm">
           <div class="container h-screen px-6">
               <div class="my-2">
                   <p class="text-center text-red-500 font-bold">Hi, {{username}}</p>
                   <p class="text-center text-sm">You just entered the chat :)</p>
              </div>
              <div class="mt-6">
                  <div class="w-10/12 mt-3 border border-green-300 rounded px-2 pb-3">
                       <h1 class="text-green-600"><b class="text-4xl ">.</b> Mohamed</h1>
                       <p class="ml-3 text-xs">Hello there</p>
                  </div>
                  <div class="w-10/12 mt-3 border border-indigo-300 rounded px-2 pb-3 ml-12">
                      <h1 class=" text-indigo-600"><b class="text-4xl ">.</b> Eda</h1>
                      <p class="ml-3 text-xs">hi guys Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam quidem ratione reprehenderit dolorem molestiae maiores non blanditiis aliquam harum!</p>
                  </div>
              </div>
           </div>
           <!-- Rendering Message Component -->
           <Message :username="username" />
        </div>
    </div>
</template>

<script>
import Message from '@/components/Message'

export default {
   name: 'Chat',
   props:['username'],
   components:{
       Message
   },
   data(){
       return{

    }
   },
}
</script>just