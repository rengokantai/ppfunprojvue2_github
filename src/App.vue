<template>
  <div id="app">
        <pre>{{user}}</pre>

    <md-toolbar class="md-medium">
      <md-button>
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">github</h2>
      <md-input-container style="flex:1">
        <md-input placeholder="search"></md-input>
      </md-input-container>
    </md-toolbar>

    <md-sidenav class="md-left">
      <md-toolbar class="md-medium">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
         <h2 class="md-title">github</h2>
      </md-toolbar>
    </md-sidenav>
    <div class="main-content">
    <md-layout>
    <router-view></router-view>
    </md-layout>
    </div>
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
        //this.user = res.data
      })
    }
  },
 mounted() {
   this.fetchUser('rengokantai')
 }
}
</script>

<style lang="scss">
  @import './assets/sass/app.scss'
</style>

