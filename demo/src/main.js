import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/base.css'
import { Button,Row,Form,FormItem,Input} from 'element-ui';

Vue.use(Button);
Vue.use(Row);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

import axios from 'axios'
axios.defaults.baseURL = '127.0.0.1:8888/api/private/v1/'
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
