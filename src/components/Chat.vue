<template>
    <div id="chat">
        <div class="relative mt-16 container w-full sm:w-10/12 md:w-2/3 mx-auto bg-gray-200 py-4 border border-gray-300 shadow-sm overflow-y-hidden">
           <div class="container flex flex-col items-center px-10 overflow-scroll pb-64" style="height:37.5rem">
                  <div class="mt-4 w-10/12 sm:w-2/3 border border-green-300 bg-white rounded px-2 pb-3 mr-24 md:mr-48">
                       <h1 class="text-green-600 font-semibold select-none"><b class="text-4xl ">.</b> Mohamed</h1>
                       <p class="ml-3 text-xs md:text-sm text-gray-800">Hello there</p>
                       <p class="text-gray-500 flex mt-2 ml-3 text-xs md:text-sm font-bold select-none">18:20</p>
                  </div>
                  <div class="w-10/12 sm:w-2/3 mt-4 border border-indigo-300 bg-white rounded px-2 pb-3 ml-24 md:ml-48">
                      <h1 class="text-indigo-600 font-semibold select-none"><b class="text-4xl">.</b> Eda</h1>
                      <p class="ml-3 text-xs md:text-sm text-gray-800">hi guys Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam quidem ratione reprehenderit dolorem molestiae maiores non blanditiis aliquam harum!</p>
                      <p class="text-gray-500 flex mt-2 ml-3 text-xs md:text-sm font-bold select-none">18:22</p>
                  </div>
                    <div class="w-10/12 sm:w-2/3 mt-4 border border-green-300 bg-white rounded px-2 pb-3 mr-24 md:mr-48">
                       <h1 class="text-green-600 font-semibold"><b class="text-4xl ">.</b> Mohamed</h1>
                       <p class="ml-3 text-xs md:text-sm text-gray-900">Hello there</p>
                       <p class="text-gray-500 flex mt-2 ml-3 text-xs md:text-sm font-bold">18:20</p>
                    </div>
                    <div class="w-10/12 sm:w-2/3 mt-4 border border-indigo-300 bg-white rounded px-2 pb-3 ml-24 md:ml-48">
                      <h1 class="text-indigo-600 font-semibold"><b class="text-4xl">.</b> Eda</h1>
                      <p class="ml-3 text-xs md:text-sm text-gray-900">hi guys Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam quidem ratione reprehenderit dolorem molestiae maiores non blanditiis aliquam harum!</p>
                      <p class="text-gray-500 flex mt-2 ml-3 text-xs md:text-sm font-bold">18:22</p>
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
</script>