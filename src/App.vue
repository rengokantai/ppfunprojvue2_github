<template>
  <div id="app">
        <pre>{{user}}</pre>
    <router-view></router-view>
  </div>
</template>

<script>
import {router} from './bootstrap'

export default {
  name: 'github',
  router,
  data(){
    return{
      user:null
    }
  },
  methods:{
    fetchUser(username){
      this.$http.get(`https://api.github.com/users/${username}`).then((res)=>{
        this.user = res.data
      })
    }
  },
 mounted() {
   this.fetchUser('rengokantai')
 }
}
</script>

<style>

</style>
