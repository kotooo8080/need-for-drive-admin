<template>
    <div class="order-surface-filters">
        <select 
            class="order-surface-filters__select"
            v-for="dataArr in allArrNames"
            :key="dataArr.id"
        >
            <option
                class="order-surface-filters__option"
                v-for="arrElem in this[dataArr.name]"
                :key="arrElem.id"
            >{{ arrElem.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'OrderSurfaceFilters',

    data() {
        return {
            allArrNames: [
                { id: 'arrF1', name: 'periods' },
                { id: 'arrF2', name: 'models' },
                { id: 'arrF3', name: 'cities' },
                { id: 'arrF4', name: 'states' }
            ],

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

        @media ( max-width: 320px ) {
            justify-content: center;
        }

        &__select {
            width: 110.5px;
            height: 29px;
    
            margin-right: 15px;
            padding-left: 14px;

            border: 0.5px solid $white-gray;
            border-radius: 4px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            background: $main-white;
            color: $darken-gray;

            @media ( max-width: 767px ) {
                margin-bottom: 8px;
            }

            @media ( max-width: 320px ) {
                margin-right: 3px;
            }
        }
    }
</style>