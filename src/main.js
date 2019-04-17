// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import antDesignVue from "ant-design-vue";
import App from './App'
import router from './router'
import store from './store';
import { SStorage,remoteLoad} from './core/util'
import "./assets/css/reset.styl";
import "ant-design-vue/dist/antd.css";
Vue.use(antDesignVue);
import axios from './core/axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
router.beforeEach((to, from, next) => {
  const ZTTOKEN = SStorage.get('ZTTOKEN') || null;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (ZTTOKEN && ZTTOKEN !== 'null') {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
