import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@Source/vuex/store.js';

Vue.config.productionTip = false;

/** Global Event Bus **/
const EventBus = new Vue({
    created() {
        this.$on('my-event', this.handleMyEvent)
    },
    methods: {
        handleMyEvent($event) {
            console.log('My event caught in global event bus', $event)
        }
    }
});

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
});
/** end Event Bus definition **/

// declare global component (global for this app)
const Footer = () => import(/* webpackChunkName: "shared.footer" */ '@Source/components/shared/Footer.vue');
Vue.component('Footer', Footer);

const app = new Vue({
    router,
    store,
    ...App,
    created () {
        this.$bus.$on('my-event', ($event) => {
            console.log('My event has been triggered', $event)
        })
    }
});

//if we are here then the user is already authenticated
app.$mount('#app');

app.getToken();
