 <template>
   <div id="navbar">
       <nav class="w-full h-16 px-4 sm:px-8 md:px-32 bg-indigo-500 fixed top-0 flex items-center text-white select-none z-20">
            <div class="text-xl md:text-2xl font-extrabold">
                <a href="/">Edchat</a>
            </div>
            <ul class="ml-auto flex font-semibold text-base md:text-lg">
                <li v-if="!loggedIn" class="mr-3 sm:mr-4 md:mr-6 hover:text-indigo-200">
                    <router-link :to="{name: 'Signup'}">SignUp</router-link>
                </li>
                <li v-if="!loggedIn" class="mr-3 sm:mr-4 md:mr-6 hover:text-indigo-200">
                    <router-link :to="{name: 'Signin'}">SignIn</router-link>
                </li>
                <li v-if="loggedIn" class="mr-3 sm:mr-4 md:mr-6 hover:text-indigo-200">
                    <a class="cursor-pointer" @click="signout()">SignOut</a>
                </li>
            </ul>      
       </nav>
   </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    name:'Navbar',
    data(){
       return {
           loggedIn:false
       }
    },
    methods:{
        signout(){
           firebase.auth().signOut().then(()=>{
               this.$router.push({name: 'Signin'})
           })
       }
   },
   created(){
       firebase.auth().onAuthStateChanged(user=>{
           if(user){
               //console.log(user);
               this.loggedIn=true
           }else{
               this.loggedIn=false
           }
       })
   },
   mounted(){

   }

}
</script>

<style scoped>
   .router-link-exact-active{
       color:darkred
   }
</style>

