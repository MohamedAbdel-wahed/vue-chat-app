<template>
  <div class="home">
    
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

},
data(){
  return {
    username:null,
    error:false
  }
},
 methods:{
   enterChat(){
     if(this.username){
         this.$router.push({
           name:'Chat',
           params: {username: this.username}
        })
     }else{
       this.error=true
     }
   },
 }
}
</script>
