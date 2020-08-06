 <template>
   <div id="friends">
       <div class="bg-gray-100 mt-0 relative w-full h-screen">
            <div class="container absolute transform sm:translate-x-1/2 w-full mt-20 sm:w-1/2 mx-auto h-screen bg-white overflow-hidden border-r border-l border-gray-300">
                
               <!-- Nav Tabs-->
                <nav class="w-full">
                   <ul class=" flex">
                       <li @click="activeTab='friends'"  :class="[activeTab=='friends'  ? ['border-blue-400','text-blue-600','bg-blue-100'] : '']" class="w-1/2 flex justify-center items-center h-10 border-b-2 text-gray-800 font-semibold transition-all duration-200 ease-linear cursor-pointer">Friends</li>
                       <li @click="activeTab='requests'" :class="[activeTab=='requests' ? ['border-blue-400','text-blue-600','bg-blue-100'] : '' ]" class="w-1/2 flex justify-center items-center h-10 border-b-2 text-gray-800 font-semibold  transition-all duration-200 ease-linear cursor-pointer">Requests</li>
                       <li @click="activeTab='find'" :class="[activeTab=='find' ? ['border-blue-400','text-blue-600','bg-blue-100'] : '' ]" class="w-1/2 flex justify-center items-center h-10 border-b-2 text-gray-800 font-semibold  transition-all duration-200 ease-linear cursor-pointer">Find</li>
                   </ul>
                </nav>
     
                <!-- Tabs Content -->
                <div id="friends" v-if="activeTab=='friends'" class="text-center">
                    <div class="h-screen w-full overflow-scroll pt-8 pb-40">
                        <div class="my-4 flex justify-around items-center bg-gray-200 py-3 rounded-sm">
                            <h1 class="text-gray-700 font-bold">Mohamed El-zoghby</h1>
                            <button class="px-2 py-1 bg-blue-500 text-white text-sm font-bold hover:text-blue-200 focus:outline-none focus:bg-blue-700 rounded">message</button>
                        </div>
                    </div>
                </div>
                <div id="requests" v-if="activeTab=='requests'" class="text-center">
                      <div class="h-screen w-full overflow-scroll pt-8 pb-40">
                        <div class="my-4 flex justify-around items-center bg-gray-200 py-3 rounded-sm">
                            <h1 class="text-gray-700 font-bold">Mohamed El-zoghby</h1>
                            <div>
                                <button class="px-2 py-1 bg-blue-500 text-white text-sm font-bold hover:text-blue-200 focus:outline-none focus:bg-blue-700 rounded">accept</button>
                                <button class="ml-3 px-2 py-1 bg-red-500 text-white text-sm font-bold hover:text-red-200 focus:outline-none focus:bg-red-700 rounded">reject</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="find" v-if="activeTab=='find'" class="text-center mt-12">
                    <img src="@/assets/images/search.png" class="inline-block mt-3 ml-3 w-4 h-4 absolute opacity-75">
                    <input type="text" class="w-10/12 sm:w-2/3 lg:w-1/2 px-10 py-2 border-b border-gray-400 focus:outline-none focus:border-blue-600 text-gray-800" v-model="friendName" :keyup="findFriends()" placeholder="find new friends">
                    <div class="h-screen w-full overflow-scroll pt-8 pb-56">
                        <div class="my-4 flex justify-around items-center bg-gray-200 py-3 rounded-sm" v-for="(user,index) in users" :key="index">
                            <h1 class="text-gray-700 font-bold">{{user.username}}</h1>
                           <div>
                                <button class="px-2 py-1 bg-green-500 text-white text-sm font-bold hover:text-green-200 focus:outline-none focus:bg-green-700 rounded">add</button>
                                <button class="ml-3 px-2 py-1 bg-blue-500 text-white text-sm font-bold hover:text-blue-200 focus:outline-none focus:bg-blue-700 rounded">message</button>
                           </div>
                        </div>
                    </div>
                </div>
           
            </div>
       </div>
   </div>
</template>

<script>
import db from '@/firebase/init'
// import firebase from 'firebase/app'
// import 'firebase/auth'


export default {
    name: 'FindFriends',
    data(){
        return {
           activeTab:'friends',
           users:[],
           friendName:'',
        }
    },
    methods:{
         findFriends(){
             if(this.friendName){
                 this.users=this.users.filter(user=>{
                          return user.username.match(this.friendName)
                 })
            }
        }
    },
    created(){
       db.collection('users').get().then(result=>{
           result.docs.forEach(doc=>{
               this.users.push(doc.data())
           })
       })

    }

}
</script>
