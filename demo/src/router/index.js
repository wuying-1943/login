import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Login = () => import('../pages/login/Login.vue');
const Home = () => import('../pages/home/Home.vue');
const Category = () => import('../pages/category/Category.vue');
const Params = () => import('../pages/params/Params.vue');
const Goods = () => import('../pages/goods/Goods.vue');

const routes = [
  { path: '/', redirect: '/goods' },
  { path: "/login", component: Login },
  { path: "/home", component: Home, meta: { checkLogin: true } },
  { path: "/category", component: Category },
  { path: "/params", component: Params },
  { path: "/goods", component: Goods },
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
