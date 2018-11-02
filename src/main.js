import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

//Similar TO

// new Vue({
//   el: "#app",
//   components: { App },
//   template: "<App/>"
// });
