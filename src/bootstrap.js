import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV!='production';
import Axios from 'axios'
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter)


Axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json';

Object.defineProperty(Vue.prototype,'$http',{
  get(){
    return Axios;
  }
})


export const router = new VueRouter({
  routes
})


import './assets/sass/app.scss'


export default{
  router
}