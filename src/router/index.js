import { createWebHistory, createRouter } from 'vue-router'

import AdminPage from '../pages/AdminPage.vue'

const routes = [
    {
        path: '/',
        name: 'AdminPage',
        component: AdminPage,
    },
];

const router = createRouter({
    history: createWebHistory('need-for-drive-admin'),
    routes,
  });

export default router;