<template>
    <div class="car-setting-surface">
        <car-setting-surface-description/>
        <car-setting-surface-edit/>
    </div>
</template>

<script>
import CarSettingSurfaceDescription from './components/CarSettingSurfaceDescription.vue'
import CarSettingSurfaceEdit from './components/CarSettingSurfaceEdit.vue'

export default {
    name: 'CarSettingSurface',

    components: { 
        CarSettingSurfaceDescription, 
        CarSettingSurfaceEdit 
    },
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .car-setting-surface {
        display: flex;
        flex-direction: row;

        width: calc(100% - 63px);
        padding: 0 31.5px;

        @media ( max-width: 767px ) {
            flex-direction: column;

            width: calc(100% - 48px);
            padding: 0 24px;
        }
    }
</style>
