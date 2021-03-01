import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/base.css'
import VueUeditorWrap from 'vue-ueditor-wrap'
Vue.component('vue-ueditor-wrap', VueUeditorWrap)
import { Button, Row, Form, FormItem, Input, Message, MessageBox,Table,TableColumn} from 'element-ui';

Vue.use(Button).use(Row).use(Form).use(FormItem).use(Input).use(Table).use(TableColumn)

import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
