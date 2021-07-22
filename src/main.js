// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 引入重置css样式
import './assets/css/reset.css'


// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
