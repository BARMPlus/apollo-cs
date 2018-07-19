import Vue from 'vue'
import App from './App'
import router from './router'
import provide from './apollo';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  provide,
  render: h => h(App)
});
