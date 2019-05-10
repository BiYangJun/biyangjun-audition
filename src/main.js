import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// var VueTouch = require('vue-touch')
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 100 //手指左右滑动距离
}
// Vue.config.productionTip = false
// 注册一个全局自定义指令 `v-lazy`


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
