<template>
    <div class="car-surface-list">
        <table class="car-surface-list__table">
            <caption style="display: none;">Список авто</caption>
            <thead class="car-surface-list__table-header">
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
                    class="car-surface-list__table-row"
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
</template>

<script>
export default {
    name: 'CarSurfaceList',

    data() {
        return {
            clickedCar: 0,
            cars: [
                { 
                    brand: 'Opel', 
                    model: 'Astra', 
                    color: 'голубая', 
                    number: '1еее11', 
                    category: 'Эконом' 
                },
                { 
                    brand: 'Skoda', 
                    model: 'Fabia', 
                    color: 'красная', 
                    number: '2еап15', 
                    category: 'Эконом+' 
                },
                { 
                    brand: 'Skoda', 
                    model: 'Octavia', 
                    color: 'белая', 
                    number: '2еае75', 
                    category: 'Комфорт' 
                },
                { 
                    brand: 'Opel', 
                    model: 'Astra', 
                    color: 'голубая', 
                    number: '1еее11', 
                    category: 'Эконом' 
                },
                { 
                    brand: 'Skoda', 
                    model: 'Fabia', 
                    color: 'красная', 
                    number: '2еап15', 
                    category: 'Эконом+' 
                },
                { 
                    brand: 'Skoda', 
                    model: 'Octavia', 
                    color: 'белая', 
                    number: '2еае75', 
                    category: 'Комфорт' 
                },
                { 
                    brand: 'Opel', 
                    model: 'Astra', 
                    color: 'голубая', 
                    number: '1еее11', 
                    category: 'Эконом' 
                },
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

    .car-surface-list {
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

        &__table-header {
            height: 36.5px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;

            color: $blue-gray;
        }

        &__table-row {
            text-align: center;
            height: 36.5px;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;

            color: $admin-gray;
        }

        &__table-row:hover {
            background: $content-background-white;
        }
    }
</style>
