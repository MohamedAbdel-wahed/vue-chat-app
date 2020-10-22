 <template>
   <div id="navbar">
       <nav class="w-full h-16 px-4 sm:px-8 md:px-32 bg-indigo-500 fixed top-0 flex items-center text-white select-none z-20">
            <div class="text-xl md:text-2xl font-extrabold">
                <a href="/">AbbyChat</a>
            </div>
            <ul class=" ml-auto hidden sm:flex font-semibold text-base md:text-lg">
                <li v-if="!loggedIn" class="mr-3 sm:mr-4 md:mr-6 font-semibold hover:text-indigo-200">
                    <router-link :to="{name: 'Signup'}">SignUp</router-link>
                </li>
                <li v-if="!loggedIn" class="sm:mr-4 md:mr-6 font-semibold hover:text-indigo-200">
                    <router-link :to="{name: 'Signin'}">SignIn</router-link>
                </li>
                <li v-if="loggedIn" class="sm:mr-4 md:mr-6 font-semibold hover:text-indigo-200">
                   <router-link :to="{name: 'Chat',params:{alias: alias}}">Chat</router-link>
                </li>
                <li v-if="loggedIn" class="sm:mr-4 md:mr-6 font-semibold hover:text-indigo-200">
                    <a class="cursor-pointer" @click="signout()">SignOut</a>
                </li>
            </ul>
            <button class="ml-auto mr-2 inline-block sm:hidden focus:outline-none">
                <img @click="showMenu=true" v-if="!showMenu" src="@/assets/images/menu.png" alt="" class="w-6 h-6 opacity-75 hover:opacity-100">
                <img @click="showMenu=false" v-if="showMenu" src="@/assets/images/close.png" alt="" class="w-6 h-6 opacity-75 hover:opacity-100">
            </button>
            <button v-if="showMenu" @click="showMenu=false" class="fixed inset-0 mt-16 w-full h-full bg-gray-800 opacity-25"></button>
            <div v-if="showMenu" class="fixed top-0 mt-16 right-0 h-screen w-1/2 bg-white py-6 px-3 border-l border-gray-400">
                <ul>
                    <li  v-if="!loggedIn" @click="showMenu=false" class="text-gray-700 py-2 border-b border-gray-200 mt-4 font-bold text-center hover:bg-gray-200 cursor-pointer rounded">
                        <router-link :to="{name: 'Signup'}">SignUp</router-link>
                    </li>
                    <li  v-if="!loggedIn" @click="showMenu=false" class="text-gray-700 py-2 border-b border-gray-200 mt-4 font-bold text-center hover:bg-gray-200 cursor-pointer rounded">
                        <router-link :to="{name: 'Signin'}">SignIn</router-link>
                    </li>
                     <li  v-if="loggedIn" @click="showMenu=false" class="text-gray-700 py-2 border-b border-gray-200 mt-4 font-bold text-center hover:bg-gray-200 cursor-pointer rounded">
                        <router-link :to="{name: 'Chat', params:{alias: alias}}">Chat</router-link>
                    </li>
                    <li  v-if="loggedIn" class="text-gray-700 py-2 border-b border-gray-200 mt-4 font-bold text-center hover:bg-gray-200 cursor-pointer rounded">
                        <a class="cursor-pointer" @click="signout()">SignOut</a>
                    </li>
                </ul>
            </div>
       </nav>
   </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    name:'Navbar',
    data(){
       return {
           loggedIn:false,
           alias:'default',
           showMenu:false
       }
    },
    methods:{
        signout(){
           firebase.auth().signOut().then(()=>{
               this.$router.push({name: 'Signin'})
               this.showMenu=false
           })
       }
   },
   created(){
       firebase.auth().onAuthStateChanged(user=>{
           if(user){
               this.loggedIn=true
                db.collection('users').where('user_id' ,'==', user.uid).get().then(result=>{
                    result.docs.forEach(doc=>{
                        this.alias= doc.data().alias
                    })
                })
           }
           else{
               this.loggedIn=false
           }
       })
   },
   

}
</script>

<style scoped>
   .router-link-exact-active{
       color:darkred
   }
</style>

