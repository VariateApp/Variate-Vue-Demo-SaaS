import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import config from '../variate.json';
import Variate from '@variate/vue';

Vue.use(Variate, {
  debug: true,
  tracking: true,
  config,
});

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
