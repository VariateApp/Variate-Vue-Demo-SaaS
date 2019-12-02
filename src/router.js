import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Features from './views/Features.vue'
import Company from './views/Company.vue'
import Pricing from './views/Pricing.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Docs from './views/Docs.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/company',
            name: 'company',
            component: Company
        },
        {
            path: '/pricing',
            name: 'pricing',
            component: Pricing
        },
        {
            path: '/features',
            name: 'features',
            component: Features
        },
        {
            path: '/docs',
            name: 'docs',
            component: Docs
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
})

router.beforeEach((to, from, next) => {
    router.app.$variate.initialize({
        view: to,
    }, next);
});

export default router