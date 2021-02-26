import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Login = () => import('./../components/Login.vue');
const Home = () => import('./../components/Home.vue');

const routes = [
  { path: '/', redirect: '/login' },
  { path: "/login", component: Login },
  { path: "/home", component: Home, meta: { checkLogin: true } }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// 路由前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    sessionStorage.getItem("token")?next('/home'):next();
  }else{
    sessionStorage.getItem("token")?next():next('/login');
  };
});
export default router
