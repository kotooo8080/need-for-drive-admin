import { createWebHistory, createRouter } from 'vue-router'

import { logIn } from '../middleware/auth'

import OrderListPage from '../pages/OrderListPage.vue'
import CarListPage from '../pages/CarListPage.vue'
import LoginPage from '../pages/LoginPage.vue'

const routes = [
    {
        path: '/',
        name: 'OrderListPage',
        component: OrderListPage,
        meta: {
            requiresAuth: true,
            layout: 'AdminLayout',
        },
    },
    {
        path: '/car',
        name: 'CarListPage',
        component: CarListPage,
        meta: {
            requiresAuth: true,
            layout: 'AdminLayout',
        },
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
        meta: {
            layout: 'AuthLayout',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {        
        if (!logIn()) {
            next({ name: 'LoginPage' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router