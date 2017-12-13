import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV!='production';
import Axios from 'axios'
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter)

Axios.defaults.baseURL = process.env.API_LOCATION
Axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json';

Object.defineProperty(Vue.prototype,'$http',{
  get(){
    return Axios;
  }
})


export const router = new VueRouter({
  routes
})



import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)
Vue.material.registerTheme('default',{
  primary:'blue',
  accent:'red',
  warn:'pink',
  background:'gainsboro'
})

//import './assets/sass/app.scss'


export default{
  router
}