import VueRouter from 'vue-router';
import Vue from "vue";

import routes from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router;
