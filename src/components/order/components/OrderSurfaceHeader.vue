<template>
    <div class="order-surface-header">
        <order-surface-filters/>
        <button class="order-surface-header__button">Применить</button>
    </div>
</template>

<script>
import OrderSurfaceFilters from './OrderSurfaceFilters.vue'

export default {
    name: 'OrderSurfaceHeader',

    components: { 
        OrderSurfaceFilters 
    },
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .order-surface-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;

        height: fit-content;
        border-bottom: 1px solid $light-gray;

        &__button {
            margin-left: auto;
            margin-right: 21.5px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            width: 95px;
            height: 29px;

            background: $admin-blue;
            border: none;
            border-radius: 4px;
            color: $main-white;

            @media ( max-width: 834px ) {
                margin-left: 21.5px;
                margin-bottom: 16px;
                margin-right: auto;
            }
        }
    }
</style>