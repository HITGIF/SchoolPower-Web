import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(require('vue-cookie'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
