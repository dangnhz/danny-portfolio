import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { BootstrapVue } from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
Vue.component('v-icon', Icon);
Vue.config.devtools = true;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
