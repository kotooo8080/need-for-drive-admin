<template>
    <div class="order-list">
        <div class="order-list__items">
            <order-surface-list-item :pageIndx="openedPage"/>
        </div>
    </div>
</template>

<script>
import OrderSurfaceListItem from './OrderSurfaceListItem.vue';

export default {
    name: 'OrderSurfaceList',

    components: { OrderSurfaceListItem },

    data() {
        return {
            openedPage: 0,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .order-list {
        background: $main-white;
        width: 100%;
        position: relative;

        @media ( max-width: 767px ) {
            width: 100%;
        }

        &__items {
            width: 100%;

            @media ( max-width: 767px ) {
                width: calc(100% - 48px);
                margin-left: 24px;
                margin-right: 24px;
            }
        }
    }
</style>
