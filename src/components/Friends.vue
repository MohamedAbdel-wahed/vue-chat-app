 <template>
   <div id="friends">
       <div class="bg-gray-100 mt-0 relative w-full h-screen">
            <div class="container absolute transform sm:translate-x-1/2 w-full mt-20 sm:w-1/2 mx-auto h-screen bg-white overflow-auto border-r border-l border-gray-300">
                
               <!-- Nav Tabs-->
                <nav class="w-full">
                   <ul class=" flex">
                       <li @click="activeTab='friends'"  :class="[activeTab=='friends'  ? ['border-blue-400','text-blue-600','bg-blue-100'] : '']" class="w-1/2 flex justify-center items-center h-10 border-b-2 text-gray-800 font-semibold transition-all duration-200 ease-linear">Friends</li>
                       <li @click="activeTab='requests'" :class="[activeTab=='requests' ? ['border-blue-400','text-blue-600','bg-blue-100'] : '' ]" class="w-1/2 flex justify-center items-center h-10 border-b-2 text-gray-800 font-semibold  transition-all duration-200 ease-linear">Requests</li>
                   </ul>
                </nav>
     
                <!-- Tabs Content -->
                <div id="friends" v-if="activeTab=='friends'" class="text-center mt-6">
                    <img src="@/assets/images/search.png" class="inline-block mt-3 ml-3 w-4 h-4 absolute opacity-75">
                    <input type="text" class="w-10/12 sm:w-2/3 lg:w-1/2 px-10 py-2 border-b border-gray-400 focus:outline-none focus:border-gray-600 text-gray-800" placeholder="find new friends">
                </div>
                <div id="requests" v-if="activeTab=='requests'" class="text-center mt-6">
                     <h1>Friends Requests</h1>
                </div>

            </div>
       </div>
   </div>
</template>

<script>
export default {
    name: 'FindFriends',
    data(){
        return {
           activeTab:'friends'
        }
    },
    methods:{

    },

}
</script>
