import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@Source/vuex/store.js';

Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    ...App
});

app.$mount('#app');