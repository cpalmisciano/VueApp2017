import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import(/* webpackChunkName: "home.home" */ '../components/Home.vue');
const View1 = () => import(/* webpackChunkName: "home.view1" */ '../components/View1.vue');

Vue.use(VueRouter);

const router = new VueRouter({
    //mode: 'history',
    base: '/',
    routes: [
        { path: '/', component: Home },
        { path: '/view1', component: View1 }
    ]
});

export default router;