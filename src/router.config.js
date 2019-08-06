import Home from "./page/home.vue";

export default [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: "/home",
    component: Home
  }
];
