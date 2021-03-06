import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '../node_modules/bulma/css/bulma.min.css';
import '../node_modules/bulma-divider/dist/css/bulma-divider.min.css';
import 'vue-good-table/dist/vue-good-table.css';

import { VueMaskDirective } from 'v-mask';

import GSignInButton from 'vue-google-signin-button';
import VueCookies from 'vue-cookies';
import VueGoodTablePlugin from 'vue-good-table';
import Toasted from 'vue-toasted';
import VuePlyr from 'vue-plyr';

import Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import VueHighcharts from 'vue-highcharts';

Vue.config.productionTip = false;

Vue.directive('mask', VueMaskDirective);

Vue.use(VueCookies);
Vue.use(GSignInButton);
Vue.use(Toasted);
Vue.use(VueGoodTablePlugin);
Vue.use(VuePlyr);

highchartsMore(Highcharts);
Vue.use(VueHighcharts);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
