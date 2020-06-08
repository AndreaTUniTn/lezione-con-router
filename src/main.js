import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';

import VueRouter from 'vue-router';

import './plugins/bootstrap-vue';
import App from './App.vue';

import Products from './pages/Products';
import Product from './pages/Product';

Vue.use(VueRouter);

const router = new VueRouter ({
  mode: 'history',
  routes: [
    {path: '/products', component: Products},
    {path: '/product/:id', component: Product},
    {path: '/',redirect: '/products'},
    
  ]
});

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
