import Home from "./page/home.vue";
import Article from "./page/article";
import Archives from "./page/archives";

export default [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  { path: "/article/:id", component: Article },
  { path: "/archives", component: Archives }
];
