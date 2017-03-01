import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import { setDPR, remChange } from './js/remChange';
setDPR();
remChange();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
