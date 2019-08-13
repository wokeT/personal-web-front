import Home from "./page/home.vue";
import Article from "./page/article";
import Archives from "./page/archives";
import Tag from "./page/tag";
import Classify from "./page/classify";
import GPL from "./page/gpl";
import About from './page/about'

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
  { path: "/archives/:type/:id", component: Archives },
  { path: "/tag", component: Tag },
  { path: "/classify", component: Classify },
  { path: "/gpl", component: GPL },
  { path: "/about", component: About },
];
