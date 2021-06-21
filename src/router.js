import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

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
export default router