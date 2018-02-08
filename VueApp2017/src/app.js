import Vue from 'vue';
import App from './components/App.vue';
import router from './router';
import store from '@Source/vuex/store.js';

Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    ...App
});

//if we are here then the user is already authenticated
app.$mount('#app');

app.getToken();
