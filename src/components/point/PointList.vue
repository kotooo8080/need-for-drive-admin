<template>
    <div class="point-list">
        <table class="point-list__table">
            <caption style="display: none;"></caption>
            <thead class="point-list__table-header">
                <tr>
                    <th scope="col">Название</th>
                    <th scope="col">Город</th>
                    <th scope="col">Адрес</th>
                    <th class="point-list__empty" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    class="point-list__table-row"
                    v-for="(point, indx) in points().filter((el, i) => 
                        (i >= 8 * startIndx() && i < (8 * startIndx() + 8)))" 
                    :key="indx" 
                    @click="itemClicked(point)"
                >
                    <td class="point-list__table-cell">{{ point.name }}</td>
                    <td v-if="point.cityId" class="point-list__table-cell">
                        {{ point.cityId.name }}</td>
                    <td class="point-list__table-cell">{{ point.address }}</td>
                    <td class="
                        point-list__table-cell 
                        point-list__table-cell--buttons"
                    >
                        <div class="
                            point-list__button-block 
                            point-list__button-block--change"
                        >
                            <img 
                                class="point-list__block-img" 
                                src="../../assets/img/change.svg" 
                                alt=""
                            >
                            <button 
                                class="point-list__block-button"
                                @click="changeListItem(point)"
                            >Изменить</button>
                        </div>
                        <div class="
                            point-list__button-block 
                            point-list__button-block--cancel"
                        >
                            <img 
                                class="point-list__block-img" 
                                src="../../assets/img/cancel.svg" 
                                alt=""
                            >
                            <button 
                                class="point-list__block-button"
                                @click="deleteListItem(point.id)"
                            >Удалить</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    name: 'PointList',

    data() {
        return {
            clickedCar: 0,
            
            pointName: '',
            pointCity: '',
            pointAddress: '',
        }
    },

    methods: {
        ...mapState(['points', 'startIndx']),
        ...mapActions(['changeServerData', 'deleteServerData', 'getServerData']),
        ...mapMutations(['blurSet']),

        itemClicked (clickedRow) {
            this.clickedCar = clickedRow.index;
        },

        changeListItem(point) {
            this.$emit('changePoint', point.id);
        },

        deleteListItem(itemId) {
            this.deleteServerData(`/db/point/${itemId}`);
            this.reloadList();
        },

        reloadList() {
            this.getServerData({ name: '/db/point/', arrName: 'points' });
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .point-list {
        @media ( max-width: 767px ) {
            overflow-x: scroll;
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
            text-align: left;
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

                @media ( max-width: 768px ) {
                    width: 100px;
                }
            }
        }

        &__empty {
            width: 156px;

            @media ( max-width: 768px ) {
                width: 10%;
            }
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

            @media ( max-width: 768px ) {
                width: 30px;
                text-indent: -9999px; 
            }
        }

        &__block-img {
            margin: 0;
            margin-left: 8px;
        }
    }
</style>
