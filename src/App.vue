<template>
    <div id="app">
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'App',

    components: {
        AdminLayout: defineAsyncComponent(() => import('@/layouts/AdminLayout.vue')),
        AuthLayout: defineAsyncComponent(() => import('@/layouts/AuthLayout.vue')),
    },

    computed: {
        layout () {
            return this.$route.meta.layout
        },
    },
}
</script>