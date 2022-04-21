<template>
    <div class="order-surface-filters">
        <select class="order-surface-filters__select">
            <option
                v-for="period in periods"
                :key="period.id"
            >{{ period.name }}</option>
        </select>

        <select class="order-surface-filters__select">
            <option
                v-for="model in models"
                :key="model.id"
            >{{ model.name }}</option>
        </select>

        <select class="order-surface-filters__select">
            <option
                v-for="city in cities"
                :key="city.id"
            >{{ city.name }}</option>
        </select>

        <select class="order-surface-filters__select">
            <option
                v-for="state in states"
                :key="state.id"
            >{{ state.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'OrderSurfaceFilters',

    data() {
        return {
            periods: [
                { id: 'p1', name: 'За неделю' },
                { id: 'p2', name: 'За месяц' },
                { id: 'p3', name: 'За год' }
            ],

            models: [
                { id: 'm1', name: 'Elantra' },
                { id: 'm2', name: 'Mazda 6' },
                { id: 'm3', name: 'Porsche 911' }
            ],

            cities: [
                { id: 's1', name: 'Ульяновск' },
                { id: 's2', name: 'Санкт-Петербург' },
                { id: 's3', name: 'Краснодар' },
                { id: 's4', name: 'Уфа' }
            ],

            states: [
                { id: 'st1', name: 'В процессе' },
                { id: 'st2', name: 'Завершен' },
                { id: 'st3', name: 'Не начат' }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './src/assets/style/colors.scss';

    .order-surface-filters {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;

        height: fit-content;
        padding: 16px 21.5px 14px 21.5px;

        @media ( max-width: 767px ) {
            flex-wrap: wrap;
            height: fit-content;
        }

        &__select {
            width: 110.5px;
            height: 29px;
            background: $main-white;
            margin-right: 15px;

            border: 0.5px solid $white-gray;
            border-radius: 4px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            color: $darken-gray;

            @media ( max-width: 767px ) {
                margin-bottom: 8px;
            }
        }
    }
</style>