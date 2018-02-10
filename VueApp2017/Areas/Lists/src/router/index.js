import Vue from 'vue';
import VueRouter from 'vue-router';

const Filter = () => import(/* webpackChunkName: "lists.filter" */ '../components/Filter.vue');
const Additional = () => import(/* webpackChunkName: "lists.additional" */ '../components/Additional.vue');
const Partial = () => import(/* webpackChunkName: "lists.partial" */ '../components/Partial.vue');
const Suppression = () => import(/* webpackChunkName: "lists.suppression" */ '../components/Suppression.vue');

Vue.use(VueRouter);

const router = new VueRouter({
    //mode: 'history',
    base: '/lists/',
    routes: [
        { path: '/', component: Filter, props: { catId: 3 } },
        { path: '/property', component: Filter, props: { catId: 4 } },
        { path: '/mortgage', component: Filter, props: { catId: 5 } },
        { path: '/demographics', component: Filter, props: { catId: 6 } },
        { path: '/distressed', component: Filter, props: { catId: 7 } },
        { path: '/other', component: Filter, props: { catId: 8 } },

        { path: '/additional', component: Additional },
        { path: '/partial', component: Partial },
        { path: '/suppression', component: Suppression }
    ]
});

export default router;