const Home = () => import(/* webpackChunkName: "home" */ "./page/home");
const Article = () => import(/* webpackChunkName: "article" */ "./page/article");
const Archives = () => import(/* webpackChunkName: "archives" */ "./page/archives");
const Tag = () => import(/* webpackChunkName: "tag" */ "./page/tag");
const Classify = () => import(/* webpackChunkName: "classify" */ "./page/classify");
const Gpl = () => import(/* webpackChunkName: "gpl" */ "./page/gpl");
const About = () => import(/* webpackChunkName: "about" */ "./page/about");
export default [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/article/:id",
    component: Article
  },
  {
    path: "/archives/:type/:id",
    component: Archives
  },
  {
    path: "/tag",
    component: Tag
  },
  {
    path: "/classify",
    component: Classify
  },
  {
    path: "/gplProject",
    component: Gpl
  },
  {
    path: "/about",
    component: About
  }
];
