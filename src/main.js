import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import "./assets/statics/site/css/style.css";
Vue.config.productionTip = false;
import index from "./components/index.vue";
import cart from "./components/shopCar.vue";
import detail from "./components/detail.vue";

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
    path: "/detail/:id",
    component: detail,
  },
];
let router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
