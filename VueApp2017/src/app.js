import Vue from 'vue';
//import Vuex from 'vuex';

import App from './App.vue';
import router from './router';
import store from '@Source/vuex/store.js';

Vue.config.productionTip = false;
//Vue.use(Vuex);  // define Vuex as global

/** Global Event Bus **/
const EventBus = new Vue({
    created() {
        this.$on('token-received', this.tokenReceived);
    },
    methods: {
        tokenReceived($event) {
            console.log('Token received (m)', $event);
        }
    }
});

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus;
        }
    }
});
/** end Event Bus definition **/

// declare global component (global for this app)

//const Footer = () => import(/* webpackChunkName: "shared.footer" */ '@Source/components/shared/Footer.vue');
//Vue.component('Footer', Footer);

const app = new Vue({
    router,
    store,
    ...App,
    beforeMount() {
        const token = window.localStorage.getItem('token');
        if (token) {
            window.localStorage.removeItem('token');
        }
        this.$store.dispatch('GET_TOKEN');
    }
});

//if we are here then the user is already authenticated
app.$mount('#app');