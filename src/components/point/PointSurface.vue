<template>
    <div class="point-surface">
        <point-header :changePoint="changePointId"/>
        <point-list @changePoint="changeClick"/>
        <point-footer/>
    </div>
</template>

<script>
import PointFooter from './PointFooter.vue'
import PointHeader from './PointHeader.vue'
import PointList from './PointList.vue'

export default {
    name: 'PointSurface',

    components: { 
        PointFooter,
        PointList,
        PointHeader, 
    },

    data() {
        return {
            changePointId: ''
        }
    },

    methods: {
        changeClick (data) {
            this.changePointId = data;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .point-surface {
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
