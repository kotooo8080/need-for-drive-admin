<template>
    <div class="rate-footer">
        <div class="rate-footer__scroll-cards-buttons">
            <button class="rate-footer__scroll-button">«</button>

            <button 
                v-for="(card, indx) in cardsInfo" 
                :key="'card' + indx" 
                class="rate-footer__page-button" 
                :class="{ 'rate-footer__page-button--active': openedPage == indx}" 
            >
                {{ indx + 1 }}
            </button>

            <button class="rate-footer__scroll-button">»</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RateFooter',

    data() {
        return {
            openedPage: 0,
            cardsInfo: [ 
                { 
                    photo: '../../../assets/img/car1.png', 
                    model: 'ELANTRA', 
                    city: 'Санкт-Петербург', 
                    street: 'Пушкина 4а', 
                    date: '11.04.2022 - 12.04.2022', 
                    color: 'Голубой', 
                    fullTank: true, 
                    childChair: false, 
                    rightWheel: true, 
                    price: '12600' 
                },
                { 
                    photo: '../../../assets/img/car1.png', 
                    model: 'i30', 
                    city: 'Уфа', 
                    street: 'Нариманова 42', 
                    date: '11.04.2022 - 12.04.2022', 
                    color: 'Красный', 
                    fullTank: false, 
                    childChair: true, 
                    rightWheel: false, 
                    price: '11200' 
                },
                { 
                    photo: '../../../assets/img/car1.png', 
                    model: 'i30', 
                    city: 'Санкт-Петербург', 
                    street: 'Пушкина 4а', 
                    date: '11.04.2022 - 12.04.2022',
                    color: 'Зеленый', 
                    fullTank: true, 
                    childChair: true, 
                    rightWheel: false, 
                    price: '10500' 
                },
                { 
                    photo: '../../../assets/img/car1.png', 
                    model: 'ELANTRA', 
                    city: 'Ульяновск', 
                    street: 'Нариманова 42', 
                    date: '11.04.2022 - 12.04.2022', 
                    color: 'Синий', 
                    fullTank: false, 
                    childChair: false, 
                    rightWheel: false, 
                    price: '8080' 
                },
                { 
                    photo: '../../../assets/img/car1.png', 
                    model: 'Rio', 
                    city: 'Санкт-Петербург', 
                    street: 'Пушкина 4а', 
                    date: '11.04.2022 - 12.04.2022', 
                    color: 'Белый', 
                    fullTank: true, 
                    childChair: true, 
                    rightWheel: true, 
                    price: '3000' 
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './src/assets/style/colors.scss';

    .rate-footer {
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