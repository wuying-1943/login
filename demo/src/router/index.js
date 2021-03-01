import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Login = () => import('../pages/login/Login.vue');

const routes = [
  { path: "/login", component: Login },
 
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// 路由前置守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === "/login") {
//     sessionStorage.getItem("token") ? next('/') : next();
//   } else {
//     sessionStorage.getItem("token") ? next() : next('/login');
//   };
// });
export default router
