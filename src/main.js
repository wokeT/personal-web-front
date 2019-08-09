import Vue from 'vue'
import App from './page/layout'
import ElementUI from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router';
import store from './vuex/store'
import '@/theme/index.css';
import routerConfig from './router.config';
import moment from "moment";

Vue.config.productionTip = false
Vue.prototype.$moment = moment;

Vue.use(VueAxios, axios);
Vue.use(ElementUI);

Vue.use(Router);
const router = new Router({
  routes: routerConfig
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
