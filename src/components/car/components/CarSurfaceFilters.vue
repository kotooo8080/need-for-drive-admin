<template>
    <div class="car-surface-filters">
        <select class="car-surface-filters__select"
            v-for="dataArr in allArrNames"
            :key="dataArr.id"
        >
            <option
                v-for="arrElem in this[dataArr.name]"
                :key="arrElem.id"
            >{{ arrElem.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'CarSurfaceFilters',

    data() {
        return {
            allArrNames: [
                { id: 'arr1', name: 'brands' },
                { id: 'arr2', name: 'colors' },
                { id: 'arr3', name: 'categories' }
            ],

            brands: [
                { id: 'b1', name: 'KIA' },
                { id: 'b2', name: 'Skoda' },
                { id: 'b3', name: 'Hyndai' }
            ],

            colors: [
                { id: 'c1', name: 'Белый' },
                { id: 'c2', name: 'Синий' },
                { id: 'c3', name: 'Красный' },
                { id: 'c4', name: 'Черный' }
            ],

            categories: [
                { id: 'cat1', name: 'Эконом' },
                { id: 'cat2', name: 'Эконом+' },
                { id: 'cat3', name: 'Бизнес' },
                { id: 'cat4', name: 'Спорт' },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './src/assets/style/colors.scss';

    .car-surface-filters {
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
        }
    }
</style>