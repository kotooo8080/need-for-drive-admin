<template>
    <div class="car-surface-list">
        <table class="car-surface-list__table">
            <caption style="display: none;">Список авто</caption>
            <thead class="car-surface-list__table-header">
                <tr>
                    <th scope="col">Модель</th>
                    <th class="car-surface-list__colors-column" scope="col">Цвета</th>
                    <th scope="col">Цена</th>
                    <th class="car-surface-list__empty" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    class="car-surface-list__table-row"
                    v-for="(car, indx) in cars().filter((el, i) => 
                        (i >= 8 * startIndx() && i < (8 * startIndx() + 8)))" 
                    :key="'car' + indx" 
                    @click="itemClicked(car)"
                >
                    <td>{{ car.name }}</td>
                    <td class="car-surface-list__cell-colors">
                        <h4 
                            v-for="color in car.colors"
                            :key="color"
                        >{{ color }}</h4>
                    </td>
                    <td>{{ car.priceMin }} - {{ car.priceMax }}</td>
                    <td class="
                        car-surface-list__table-cell 
                        car-surface-list__table-cell--buttons"
                    >
                        <div class="
                            car-surface-list__button-block 
                            car-surface-list__button-block--change"
                        >
                            <img 
                                class="car-surface-list__block-img" 
                                src="../../../assets/img/change.svg" 
                                alt=""
                            >
                            <button 
                                class="car-surface-list__block-button"
                                @click="changeListItem(car)"
                            >Изменить</button>
                        </div>
                        <div class="
                            car-surface-list__button-block 
                            car-surface-list__button-block--cancel"
                        >
                            <img 
                                class="car-surface-list__block-img" 
                                src="../../../assets/img/cancel.svg" 
                                alt=""
                            >
                            <button 
                                class="car-surface-list__block-button"
                                @click="deleteListItem(car.id)"
                            >Удалить</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
    name: 'CarSurfaceList',

    data() {
        return {
            clickedCar: 0,
        }
    },

    methods: {
        ...mapState(['cars', 'startIndx']),
        ...mapMutations(['dataSet']),
        ...mapActions(['getServerData', 'deleteServerData']),

        itemClicked (clickedRow) {
            this.clickedCar = clickedRow.index;
        },

        reloadList() {
            this.getServerData({ name: '/db/car', arrName: 'cars' });
        },

        async deleteListItem(itemId) {
            await this.deleteServerData(`/db/car/${itemId}`);
            this.reloadList();
        },

        changeListItem(car) {
            this.dataSet([ 'carToChange', car ]);
            this.$router.push({ name: 'CarSettingPage' });
        },
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

        &__colors-column {
            width: 30%;
        }

        &__cell-colors {
            display: flex;
            flex-direction: row;

            justify-content: flex-start;
            justify-items: start;
            align-content: flex-start;

            width: 100%;
            flex-wrap: wrap;

            padding: 0 20px;

            h4 {
                margin: 5px 10px;
                text-align: left;
            }
        }

         &__table-cell {
            padding: 0 20px;

            &--buttons {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;

                width: 156px;
                height: 36.5px;
                text-align: right;
            }
        }

        &__empty {
            width: 156px;
        }

        &__button-block {
            display: flex;
            flex-direction: row;

            height: 20px;
            width: 71px;

            align-items: center;
            justify-content: flex-start;

            border: 0.5px solid $white-gray;
            border-radius: 4px;

            &--cancel {
                img {
                    width: 6.6px;
                    height: 7px;

                    margin-right: 4.8px;
                }
            }

            &--change {
                margin-right: 10px;
                img {
                    width: 4px;
                    height: 8px;

                    margin-left: 6px;
                    margin-right: 4px;
                }
            }
        }

        &__block-button {
            border: none;
            background: none;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            text-align: center;

            padding: 0;
            color: $gray;
        }

        &__block-img {
            margin: 0;
            margin-left: 8px;
        }
    }
</style>
