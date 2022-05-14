<template>
    <div class="order-surface">
        <order-surface-header />
        <order-surface-list/>
        <order-surface-footer/>
    </div>
</template>

<script>
import OrderSurfaceFooter from './components/OrderSurfaceFooter.vue'
import OrderSurfaceHeader from './components/OrderSurfaceHeader.vue'
import OrderSurfaceList from './components/OrderSurfaceList.vue'

export default {
    name: 'OrderSurface',

    components: { 
        OrderSurfaceHeader, 
        OrderSurfaceList, 
        OrderSurfaceFooter 
    },
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .order-surface {
        width: calc(100% - 57px);
        background: $main-white;
        margin-left: 31.5px;
        margin-bottom: 100px;

        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        box-shadow: 
            0px 1px 0px rgba(90, 97, 105, 0.11), 
            0px 2px 4px rgba(90, 97, 105, 0.12), 
            0px 5px 5px rgba(90, 97, 105, 0.06), 
            0px 3.5px 35px rgba(90, 97, 105, 0.1);

        @media ( max-width: 767px ) {
            margin-left: 24px;
            margin-bottom: 48px;
            width: calc(100% - 48px);
        }
    }
</style>