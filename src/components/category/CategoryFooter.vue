<template>
    <div class="category-footer">
        <div class="category-footer__scroll-cards-buttons">
            <button class="category-footer__scroll-button">«</button>

            <button 
                v-for="(el, indx) in numbersArr" 
                :key="'cat' + indx" 
                class="category-footer__page-button" 
                :class="{ 'category-footer__page-button--active': openedPage == indx}" 
                @click="switchPage(indx)"
            >
                {{ indx + 1 }}
            </button>

            <button class="category-footer__scroll-button">»</button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'CategoryFooter',

    data() {
        return {
            openedPage: 0,
            numbersArr: new Array(1).fill(0),
            numbersNum: 1
        }
    },

    mounted() {
        if(this.categories().length) {
            this.numbersNum = this.categories().length;
            this.numbersArr = new Array(Math.ceil(this.numbersNum/8)).fill(0);
        }
    },

    methods: {
        ...mapState(['categories', 'pagesNumber']),
        ...mapMutations(['dataSet']),

        switchPage(indx) {
            this.openedPage = indx;
            this.dataSet([ 'startIndx', indx ]);
        }
    },
}
</script>

<style lang="scss" scoped>
    @import './src/assets/style/colors.scss';

    .category-footer {
        border-top: 1px solid $light-gray;
        height: 59px;

        &__scroll-cards-buttons {
            display: flex;
            flex-direction: row;

            height: 59px;
            align-items: center;
            justify-content: center;
        }

        &__scroll-button {
            width: 21px;
            height: 21px;
            border: none;
            padding: 0;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 17px;

            background: none;
            color: $admin-blue;
        }

        &__page-button {
            width: 21px;
            height: 21px;
            border: none;
            background: none;
            color: $admin-blue;
            padding: 0;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 17px;

            &--active {
                border-radius: 50%;
                background: $admin-blue;
                color: $main-white;
            }
        }
    }
</style>