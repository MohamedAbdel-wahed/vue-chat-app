<template>
   <div id="signin">
       <div class="container mt-12 py-2 w-full sm:w-7/12  md:w-5/12 lg:w-1/3 flex flex-col items-center mx-auto border text-center rounded shadow-sm select-none overflow-x-hidden">
            <h1 class="text-3xl font-bold text-indigo-500 my-6">Signin</h1>
            <div class="my-2 ">
                <input type="text" autocomplete="off" placeholder="Enter Your Email" v-model="email" class="w-64 px-3 py-2 text-sm text-gray-600 border border-gray-200 rounded focus:outline-none focus:border-indigo-300 focus:bg-gray-100">
                <p v-if="error" class="text-red-600 mt-1 text-sm">You must enter your username :(</p>
            </div>
             <div class="my-2 ">
                <input type="text" autocomplete="off" placeholder="Enter Your Password" v-model="password" class="w-64 px-3 py-2 text-sm text-gray-600 border border-gray-200 rounded focus:outline-none focus:border-indigo-300 focus:bg-gray-100">
                <p v-if="error" class="text-red-600 mt-1 text-sm">You must enter your username :(</p>
            </div>
            <button class="my-8 mr-4 px-4 py-2 text-sm text-white font-semibold bg-indigo-500 bg-transparent hover:text-indigo-200 focus:outline-none focus:bg-indigo-700 rounded" @click="enterChat()">Enter The Chat</button>
        </div>
   </div>
</template>

<script>
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

    }
}
</script>

