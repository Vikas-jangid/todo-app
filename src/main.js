import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueResource from 'vue-resource'
import router from "./router/route";
import Vuetify from 'vuetify/lib';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Vuetify);

new Vue({
  vuetify,
  router:router,
  render: (h) => h(App),
}).$mount("#app");