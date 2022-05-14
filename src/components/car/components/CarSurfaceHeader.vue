<template>
    <div class="car-surface-header">
        <car-surface-filters/>
        <div class="car-surface-header__buttons-block">
            <button class="
                car-surface-header__button 
                car-surface-header__button--red
            "
                @click="reloadList()"
            >Обновить</button>
            <button class="car-surface-header__button">Сохранить</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import CarSurfaceFilters from './CarSurfaceFilters.vue'

export default {
    name: 'CarSurfaceHeader',

    components: { 
        CarSurfaceFilters 
    },

    methods: {
        ...mapActions(['getServerData']),
        
        reloadList() {
            this.getServerData({ name: '/db/car', arrName: 'cars' });
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .car-surface-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;

        height: fit-content;
        border-bottom: 1px solid $light-gray;

        &__buttons-block {
            margin-left: auto;
            margin-right: 0;

            @media ( max-width: 834px ) {
                margin-left: 21.5px;
                margin-bottom: 16px;
                margin-right: auto;
            }
        }

        &__button {
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

            &--red {
                background: $main-red;
            }
        }
    }
</style>