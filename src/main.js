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

import index from "./components/index.vue";
import cart from "./components/shopCar.vue";
import detail from "./components/detail.vue";
import container from "./components/container.vue";
import center from "./components/center.vue";
import centerdetail from "./components/centerdetail.vue";
import order from "./components/order.vue";

let routes = [
  {
    path: "/",
    component: index,
  },
  {
    path: "/index",
    component: index,
  },
  {
    path: "/cart",
    component: cart,
  },
  {
    path: "/detail/:id",
    component: detail,
  },
  {
    path: "/container",
    component: container,
    children:[
      {
        path:'center',
        component:center
      },
      {
        path:'centerdetail',
        component:centerdetail
      },
      {
        path:'order',
        component:order
      },
    ]
  },
];
let router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
