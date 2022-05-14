<template>
    <div class="category-list">
        <table class="category-list__table">
            <caption style="display: none;"></caption>
            <thead class="category-list__table-header">
                <tr>
                    <th scope="col">Название</th>
                    <th scope="col">Описание</th>
                    <th class="category-list__empty" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    class="category-list__table-row"
                    v-for="(category, indx) in 
                        categories().filter((el, i) => 
                        (i >= 8 * startIndx() && i < (8 * startIndx() + 8)))" 
                    :key="'category' + indx" 
                    @click="itemClicked(category)"
                >
                    <td class="category-list__table-cell">{{ category.name }}</td>
                    <td class="category-list__table-cell">{{ category.description }}</td>
                    <td class="
                        category-list__table-cell 
                        category-list__table-cell--buttons"
                    >
                        <div class="
                            category-list__button-block 
                            category-list__button-block--change"
                        >
                            <img 
                                class="category-list__block-img" 
                                src="../../assets/img/change.svg" 
                                alt=""
                            >
                            <button 
                                class="category-list__block-button"
                                @click="changeListItem(category)"
                            >Изменить</button>
                        </div>
                        <div class="
                            category-list__button-block 
                            category-list__button-block--cancel"
                        >
                            <img 
                                class="category-list__block-img" 
                                src="../../assets/img/cancel.svg" 
                                alt=""
                            >
                            <button 
                                class="category-list__block-button"
                                @click="deleteListItem(category.id)"
                            >Удалить</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    name: 'CategoryList',

    data() {
        return {
            clickedCar: 0,
        }
    },

    methods: {
        ...mapState(['categories', 'startIndx']),
        ...mapActions(['deleteServerData', 'getServerData']),
        ...mapMutations(['dataSet']),

        reloadList() {
            this.getServerData({ name: '/db/category/', arrName: 'categories' });
        },

        itemClicked (clickedRow) {
            this.clickedCar = clickedRow.index;
        },

        changeListItem(category) {
            this.$emit('changeCategory', category.id);
        },

        deleteListItem(itemId) {
            this.deleteServerData(`/db/category/${itemId}`);
            this.reloadList();
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .category-list {
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
