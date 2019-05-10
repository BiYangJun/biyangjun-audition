import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fillImg from '@/assets/zhanwei.png';
// var VueTouch = require('vue-touch')
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 100 //手指左右滑动距离
}
// Vue.config.productionTip = false
// 注册一个全局自定义指令 `v-focus`
Vue.directive('lazy', {
  inserted: function (el,binding) {
    // 聚焦元素
    el.setAttribute('src',fillImg)
    if(binding.value){
      el.setAttribute('src',binding.value)
    }
    // console.log(el)
    // console.log(binding.value)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
