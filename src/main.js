import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import routes from './routes';
import App from './App.vue';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.use(VueRouter);

// const router = new VueRouter({routes});
const router = new VueRouter({mode: 'history', routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
