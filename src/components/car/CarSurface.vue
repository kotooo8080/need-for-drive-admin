<template>
    <div class="car-surface">
        <h2 class="car-surface__description">Список авто</h2>
        <div class="car-surface__data">
            <table class="car-surface__table">
                <caption style="display: none;">Список авто</caption>
                <thead>
                    <tr>
                        <th scope="col">Марка</th>
                        <th scope="col">Модель</th>
                        <th scope="col">Цвет</th>
                        <th scope="col">Номер</th>
                        <th scope="col">Категория</th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                        v-for="(car, indx) in cars" 
                        :key="indx" 
                        @click="itemClicked(car)"
                    >
                        <td>{{ car.brand }}</td>
                        <td>{{ car.model }}</td>
                        <td>{{ car.color }}</td>
                        <td>{{ car.number }}</td>
                        <td>{{ car.category }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarSurface',

    data() {
        return {
            clickedCar: 0,
            cars: [
                { brand: 'Opel', model: 'Astra', color: 'голубая', number: '1еее11', category: 'Эконом' },
                { brand: 'Skoda', model: 'Fabia', color: 'красная', number: '2еап15', category: 'Эконом+' },
                { brand: 'Skoda', model: 'Octavia', color: 'белая', number: '2еае75', category: 'Комфорт' },
                { brand: 'Opel', model: 'Astra', color: 'голубая', number: '1еее11', category: 'Эконом' },
                { brand: 'Skoda', model: 'Fabia', color: 'красная', number: '2еап15', category: 'Эконом+' },
                { brand: 'Skoda', model: 'Octavia', color: 'белая', number: '2еае75', category: 'Комфорт' },
                { brand: 'Opel', model: 'Astra', color: 'голубая', number: '1еее11', category: 'Эконом' },
                { brand: 'Skoda', model: 'Fabia', color: 'красная', number: '2еап15', category: 'Эконом+' },
                { brand: 'Skoda', model: 'Octavia', color: 'белая', number: '2еае75', category: 'Комфорт' },
            ]
        }
    },

    methods: {
        itemClicked (clickedRow) {
            this.clickedCar = clickedRow.index;
        }
    }

}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .car-surface {
        background: $light-gray;
        width: 80%;
        position: relative;

        &__description {
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 29px;
            line-height: 33px;

            margin-left: 31.5px;
            color: $blue-gray;
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
