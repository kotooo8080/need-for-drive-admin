import { createWebHistory, createRouter } from 'vue-router'

import { logIn } from '../middleware/auth'

import AdminPage from '../pages/AdminPage.vue'
import LoginPage from '../pages/LoginPage.vue'

const routes = [
    {
        path: '/',
        name: 'AdminPage',
        component: AdminPage,
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {        
        if (!logIn()) {
            next({ path: '/login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router;