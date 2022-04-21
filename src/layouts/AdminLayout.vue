<template>
    <main class="admin-layout">
        <admin-menu class="admin-layout__menu" />
        <div class="admin-layout__main">
            <admin-header class="admin-layout__header" />
            <div class="admin-layout__content">
                <h2 class="admin-layout__content-name">Заказы</h2>
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

export default {
    name: 'AdminLayout',

    components: {
        AdminMenu,
        AdminHeader,
        AdminFooter,
    },
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
            height: 140vh;
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

        &__content-name {
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 29px;
            line-height: 33px;

            margin-left: 31.5px;
            color: $blue-gray;

            @media ( max-width: 1024px ) {
                font-size: 24px;
                line-height: 24px;
            }

            @media ( max-width: 767px ) {
                margin-left: 24px;
            }
        }
    }
</style>