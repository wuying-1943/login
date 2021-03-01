import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/base.css'
import { Button, Row, Form, FormItem, 
Input, Message, MessageBox,Table,TableColumn,
Checkbox,Loading
} from 'element-ui';
// import axios from 'axios'


Vue.use(Button).use(Row).use(Form).use(FormItem).use(Input).use(Table).use(TableColumn).use(Checkbox).use(Loading)
// Vue.prototype.$axios = axios;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
