<template>
    <div class="admin-page">
        <auth-form
            v-if="display"
        />
        <div v-else class="admin-panel-info">
            <admin-header />
            <div class="admin-page-info">
                <menu-block @tabClick="tabClick"/>
                <order-list />
            </div>
        </div>
    </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue'
import AdminHeader from '@/components/AdminHeader.vue'
import MenuBlock from '@/components/MenuBlock.vue'
import OrderList from '@/components/OrderList.vue'

export default {
    name: 'AdminPage',

    data() {
        return {
            display: false,
            selectedComponent: 'AutoCard'
        }
    },

    components: {
        AuthForm,
        AdminHeader,
        MenuBlock,
        OrderList
    },
}
</script>

<style lang="scss" scoped>
    .admin-page {
        height: 100%;
        display: flex;
        flex-direction: column;

        .admin-panel-info {
            height: 100%;

            .admin-page-info {
                display: flex;
                flex-direction: row;
                height: calc(100% - 67.5px);
            }
        }
    }

    @media ( max-width: 767px ) {
        .admin-page {
            height: 120vh;
        }
    }

    @media ( max-width: 320px ) {
        .admin-page {
            height: 150vh;
        }
    }
</style>