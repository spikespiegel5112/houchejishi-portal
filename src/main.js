import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./utils/permission"; // permission control

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
