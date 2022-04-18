<template>
    <div class="admin-page">
        <div class="admin-panel-info">
            <admin-header />
            <div class="admin-page-info">
                <menu-block @tabClick="tabClick"/>
                <order-list />
            </div>
        </div>
    </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue'
import MenuBlock from '@/components/MenuBlock.vue'
import OrderList from '@/components/OrderList.vue'

export default {
    name: 'AdminPage',
    
    components: {
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
                height: calc(100% - 68px);
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