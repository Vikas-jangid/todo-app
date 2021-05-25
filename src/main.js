import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VueResource from "vue-resource";
import router from "./router/route";
import Vuetify from "vuetify/lib";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

 /* eslint-disable no-alert */ 

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Vuetify);
Vue.use(VueSweetalert2);


new Vue({
  vuetify,
  router:router,
  render: (h) => h(App),
}).$mount("#app");