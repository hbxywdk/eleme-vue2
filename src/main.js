import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import { setDPR, remChange } from './remChange';
setDPR();
remChange();
// 自定义上拉加载指令
/* Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    // binding.value()执行组件中的方法 value是=“    ”等号后的
    window.onscroll = function (e) {
      var dHeight = document.body.clientHeight || document.documentElement.clientHeight
      var dscrollTop = document.body.scrollTop || document.documentElement.scrollTop

      // console.error(dHeight, dscrollTop, window.innerHeight)
      if (dHeight <= (dscrollTop + window.innerHeight)) {
        console.error('触发加载')
        binding.value && binding.value()
      }
    }
  }
}) */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
