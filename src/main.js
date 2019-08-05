import Vue from 'vue'
import App from './page/layout'
import Router from 'vue-router';
import routerConfig from './router.config';


Vue.config.productionTip = false

Vue.use(Router);
const router = new Router({
  routes: routerConfig
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
