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

// const Bus = new Vue({
//   data: {
//     isLoggedIn: false,
//   }
// });
// window.Bus = Bus;

let readyToken;
const whenReady = new Promise(resolve => {
  readyToken = resolve;
})

// const router = new VueRouter({routes});
const router = new VueRouter({mode: 'history', routes});

router.beforeEach(function (to, from, next) {
  whenReady.then(() => { 
    const pageIsProtected = to.matched.some(record => record.meta.requiresAuth)

    // Protected and user is not logged in, get the bouncers!!!
    if (pageIsProtected && !window.vm.isLoggedIn) {
      router.push({name: 'login'})
      return; // Return so next() is not called after we bundled the user out
    }

   
    next(); // Proceed with navigation. Must be called or your web app will hang! WHITE SCREEN OF DEATH
  })
})

// Root component let's call it vm so we can access it outside a component's scope
window.vm = new Vue({
  router,
  data: {
    isAppReady: false,
    isLoggedIn: false,
  },
  created() {
    this.checkAuth();
  },
  // watch: {
  //   isLoggedIn: {
  //     immediate: true,
  //     handler() {
  //       Bus.isLoggedIn = true;
  //     }
  //   }
  // },
  methods: {
    checkAuth() {
      setTimeout(() => {
        this.isLoggedIn = true;
        this.isAppReady = true;
        readyToken();
        console.debug('ready');
      }, 1000);


    }
  },
  render: h => h(App)
}).$mount('#app');
