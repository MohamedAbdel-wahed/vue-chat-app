<template>
   <div id="navbar">
       <nav class="w-full h-16 px-4 sm:px-8 md:px-32 bg-indigo-500 flex items-center text-white select-none overflow-x-hidden">
            <div class="text-xl md:text-2xl font-extrabold">Edchat</div>
            <ul class="ml-auto flex font-semibold text-base md:text-lg">
                <li class="mr-3 sm:mr-4 md:mr-6 hover:text-indigo-200">
                    <router-link :to="{name: 'Signup'}">SignUp</router-link>
                </li>
                <li class="mr-3 sm:mr-4 md:mr-6 hover:text-indigo-200">
                    <router-link :to="{name: 'Signin'}">SignIn</router-link>
                </li>
            </ul>      
       </nav>
   </div>
</template>

<script>
export default {
    name:'Navbar',
}
</script>

<style scoped>
   .router-link-exact-active{
       color:darkred
   }
</style>

