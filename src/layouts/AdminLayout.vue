<template>
    <main class="admin-layout">
        <admin-menu class="admin-layout__menu" @menuClick="pathChange"/>
        <div class="admin-layout__main">
            <admin-header class="admin-layout__header" />
            <div class="admin-layout__content">
                <content-description :contentIndex="contentIndex"/>
                <slot></slot>
            </div>
            <admin-footer class="admin-layout__footer" />
        </div>
    </main>
</template>

<script>
import AdminMenu from '@/components/admin/AdminMenu'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminFooter from '@/components/admin/AdminFooter'
import ContentDescription from '@/components/ContentDescription.vue'

import { mapState } from 'vuex'

export default {
    name: 'AdminLayout',

    components: {
        AdminMenu,
        AdminHeader,
        AdminFooter,
        ContentDescription
    },

    data() {
        return {
            contentIndex: 0,
            contentPaths: [
                '/car-setting',
                '/car',
                '/order',
                '/point',
                '/category',
                '/rate'
            ]
        }
    },

    created() {
        if(this.activePage) {
            this.contentIndex = this.activePage();
        }
    },

    methods: {
        ...mapState(['activePage']),

        pathChange(componentIndx) {
            this.contentIndex = componentIndx;
            this.$router.push('/admin' + this.contentPaths[componentIndx]);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .admin-layout {
        display: flex;
        height: 100%;
        width: 100%;

        position: relative;

        @media ( max-width: 375px ) {
            height: 150%;
        }

        @media ( max-width: 320px ) {
            height: 160%;
        }
        
        &__main {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            width: 80%;

            @media ( max-width: 767px ) {
                width: 100%;
            }
        }

        &__header {
            width: 100%;
        }

        &__content {
            flex-grow: 1;
            background: $content-background-white;
            width: 100%;
        }

        &__menu {
            @media ( max-width: 767px ) {
                width: 15%;
            }
        }
    }
</style>