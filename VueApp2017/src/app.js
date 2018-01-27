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

app.$mount('#app');

app.getToken();
/*
if (typeof window !== 'undefined') {
    let token = window.localStorage.getItem('token')
    if (!token || typeof token === 'undefined') {
        app.getToken();
    } else {
        console.info('Token: ' + token);
    }
}
*/