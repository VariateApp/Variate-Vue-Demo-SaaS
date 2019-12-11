import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import config from '../variate.json';
import Variate from '@variate/vue';

Vue.use(Variate, {
  debug: true,
  tracking: true,
  reporter: (event) => {
    console.log('Sending to Google Analytics: ' + event.name);
    console.log(event)

    // Create tracker
    ga('create', 'UA-82876270-8', 'auto');

    if (event.type === 'pageview') {

      // Send pageview as nonInteraction event to avoid affecting bounce rate
      ga('send', {
        hitType: 'event',
        eventCategory: 'Variate Experiments',
        eventAction: 'pageview',
        eventLabel: 'Exp' + event.value.experimentId + '|Var' + event.value.variationId,
        nonInteraction: true
      });
    }
    else {

      // Send custom/purchase event 
      ga('send', {
        hitType: 'event',
        eventCategory: 'Variate Experiments',
        eventAction: event.type,
        eventLabel: event.name,
        eventValue: event.value
      });
    }
    return true
  },
  config
});

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
