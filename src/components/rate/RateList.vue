<template>
    <div class="rate-list">
        <table class="rate-list__table">
            <caption style="display: none;"></caption>
            <thead class="rate-list__table-header">
                <tr>
                    <th scope="col">Название</th>
                    <th scope="col">Продолжительность</th>
                    <th scope="col">Цена</th>
                    <th class="rate-list__empty" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    class="rate-list__table-row"
                    v-for="(rate, indx) in rates()" 
                    :key="indx" 
                    @click="itemClicked(rate)"
                >
                    <td v-if="rate.rateTypeId" 
                        class="rate-list__table-cell">{{ rate.rateTypeId.name }}</td>
                    <td v-if="rate.rateTypeId" 
                        class="rate-list__table-cell">{{ rate.rateTypeId.unit }}</td>
                    <td class="rate-list__table-cell">{{ rate.price }}</td>
                    <td class="rate-list__table-cell rate-list__table-cell--buttons">
                        <div class="rate-list__button-block rate-list__button-block--change">
                            <img 
                                class="rate-list__block-img" 
                                src="../../assets/img/change.svg" 
                                alt=""
                            >
                            <button 
                                class="rate-list__block-button"
                                @click="changeListItem(rate)"
                            >Изменить</button>
                        </div>
                        <div class="rate-list__button-block rate-list__button-block--cancel">
                            <img 
                                class="rate-list__block-img" 
                                src="../../assets/img/cancel.svg" 
                                alt=""
                            >
                            <button 
                                class="rate-list__block-button"
                                @click="deleteListItem(rate.id)"
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
    name: 'RateList',

    data() {
        return {
            clickedCar: 0,
            ratesData: []
        }
    },

    methods: {
        ...mapState(['rates', 'activePage']),
        ...mapActions(['changeServerData', 'deleteServerData', 'getServerData']),
        ...mapMutations(['blurSet']),

        itemClicked (clickedRow) {
            this.clickedCar = clickedRow.index;
        },

        changeListItem(rate) {
            this.$emit('changeRate', rate.id);
        },

        deleteListItem(itemId) {
            this.deleteServerData(`/db/rate/${itemId}`);
            this.reloadList();
        },

        reloadList() {
            this.getServerData({ name: '/db/rate/', arrName: 'rates' });
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .rate-list {
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
