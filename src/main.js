import Vue from "vue";
import App from "./page/layout";
import {
  Pagination,
  Tag,
  Timeline,
  Card,
  TimelineItem,
  Loading
} from "element-ui";
import axios from "axios";
import VueAxios from "vue-axios";
import Router from "vue-router";
import store from "./vuex/store";
import routerConfig from "./router.config";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(Pagination)
  .use(Tag)
  .use(Timeline)
  .use(Card)
  .use(TimelineItem)
  .use(Loading);

Vue.use(Router);
const router = new Router({
  routes: routerConfig
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
