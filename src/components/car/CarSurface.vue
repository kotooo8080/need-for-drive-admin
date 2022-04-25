<template>
    <div class="car-surface">
        <car-surface-header />
        <car-surface-list/>
        <car-surface-footer/>
    </div>
</template>

<script>
import CarSurfaceFooter from './components/CarSurfaceFooter.vue';
import CarSurfaceHeader from './components/CarSurfaceHeader.vue'
import CarSurfaceList from './components/CarSurfaceList.vue';

export default {
    name: 'CarSurface',

    components: {
        CarSurfaceHeader,
        CarSurfaceFooter,
        CarSurfaceList
    },
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .car-surface {
        width: calc(100% - 57px);
        background: $main-white;
        margin-left: 31.5px;
        margin-bottom: 100px;

        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        @media ( max-width: 767px ) {
            margin-left: 24px;
            width: calc(100% - 48px);
        }

        &__data {
            width: calc(100% - 57px);
            background: $main-white;
            margin-left: 31.5px;

            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }

        &__table {
            width: 100%;
        }
    }
</style>
