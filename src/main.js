import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-TW'
import '@/assets/scss/style.scss'

// 假資料
 // import '@/mock/index.js'

Vue.use(ElementUI, { locale }) // 設定語言為繁中
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
