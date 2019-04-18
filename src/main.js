// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import antDesignVue from "ant-design-vue";
import App from './App'
import router from './router'
import store from './store';
import VueI18n from 'vue-i18n'
import { SStorage,remoteLoad} from './core/util'
import "./assets/css/reset.styl";
import "ant-design-vue/dist/antd.css";

Vue.use(antDesignVue);
Vue.use(VueI18n)

import axios from './core/axios'
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  }
})

Vue.config.productionTip = false
Vue.prototype.$http = axios;
process.env.MOCK && require('./mock')

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
  i18n,
  components: { App },
  template: '<App/>'
})
