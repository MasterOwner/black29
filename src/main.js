import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import "./assets/statics/site/css/style.css";
Vue.config.productionTip = false;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//全局原型axios
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://111.230.232.110:8899'

import moment from 'moment'
//全局过滤器
Vue.filter('timeFormate',(val,templateT)=>{
  console.log(val,templateT)
  if(templateT){
    return moment(val).format(templateT)
  }else{
    return moment(val).format('YYYY/MM/DD')
  }
})

import router from "./router";

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
