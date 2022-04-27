<template>
    <div class="card-info">
        <img class="card-info__car-img" src='../../../assets/img/car1.png' alt="">

        <div class="card-info__car-info">
            <div class="card-info__car-main-info">
                <h3 class="card-info__car-location">
                    <span class="card-info__car-info-strong">
                        {{ cardsInfo[pageIndx].model }}
                    </span> в 
                    <span class="card-info__car-info-strong">
                        {{ cardsInfo[pageIndx].city }}
                    </span>, 
                    {{ cardsInfo[pageIndx].street }}
                </h3>
            </div>

            <div class="card-info__date">
                <h3 class="card-info__date-text">
                    <span>
                        {{ cardsInfo[pageIndx].date }}
                    </span>
                </h3>
            </div>

            <div class="card-info__color">
                <h3 class="card-info__color-name">Цвет: 
                    <span class="card-info__color-name-strong">
                        {{ cardsInfo[pageIndx].color }}
                    </span>
                </h3>
            </div>
        </div>

        <div class="card-info__options">
            <div 
                v-for="service in services" 
                :key="service.name"
                class="card-info__option"
            >
                <div class="card-info__input-block">
                    <input 
                        :id=service.name 
                        class="card-info__input"
                        v-model="checkedServices" 
                        type="checkbox" 
                        name="checkbox" 
                        :value=service.name
                    >
                    <img 
                        v-if="serviceCheck(service.name)" 
                        class="card-info__input-img"
                        src="../../../assets/img/check.svg" 
                        alt=""
                    >
                </div>

                <label 
                    :for=service.name
                    class="card-info__option-label"
                    :class="{ 'card-info__option-label--active': serviceCheck(service.name)}" 
                >{{ service.description }}{{ service.servPrice }}</label>
            </div>
        </div>

        <div class="card-info__price">
            <h2 class="card-info__price-text">{{ cardsInfo[pageIndx].price }} ₽</h2>
        </div>

        <div class="card-info__buttons-block">
            <div class="card-info__button-block card-info__button-block--ready">
                <img class="card-info__block-img" src="../../../assets/img/ready.svg" alt="">
                <button class="card-info__block-button">Готово</button>
            </div>

            <div class="card-info__button-block card-info__button-block--cancel">
                <img class="card-info__block-img" src="../../../assets/img/cancel.svg" alt="">
                <button class="card-info__block-button">Отмена</button>
            </div>

            <div class="card-info__button-block card-info__button-block--change">
                <img class="card-info__block-img" src="../../../assets/img/change.svg" alt="">
                <button class="card-info__block-button">Изменить</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'OrderSurfaceListItem',

    props: {
        pageIndx: Number
    },

    data() {
        return {
            checkedServices: [],
            cardsInfo: [ 
                { 
                    photo: '../../../assets/img/car1.png', model: 'ELANTRA', 
                    city: 'Санкт-Петербург', street: 'Пушкина 4а', date: '11.04.2022 - 12.04.2022', 
                    color: 'Голубой', fullTank: true, childChair: false, rightWheel: true, 
                    price: '12600' 
                },
                { 
                    photo: '../../../assets/img/car1.png', model: 'i30', 
                    city: 'Уфа', street: 'Нариманова 42', date: '11.04.2022 - 12.04.2022', 
                    color: 'Красный', fullTank: false, childChair: true, rightWheel: false, 
                    price: '11200' 
                },
                { 
                    photo: '../../../assets/img/car1.png', model: 'i30', 
                    city: 'Санкт-Петербург', street: 'Пушкина 4а', date: '11.04.2022 - 12.04.2022', 
                    color: 'Зеленый', fullTank: true, childChair: true, rightWheel: false, 
                    price: '10500' 
                },
                { 
                    photo: '../../../assets/img/car1.png', model: 'ELANTRA', 
                    city: 'Ульяновск', street: 'Нариманова 42', date: '11.04.2022 - 12.04.2022', 
                    color: 'Синий', fullTank: false, childChair: false, rightWheel: false, 
                    price: '8080' 
                },
                { 
                    photo: '../../../assets/img/car1.png', model: 'Rio', 
                    city: 'Санкт-Петербург', street: 'Пушкина 4а', date: '11.04.2022 - 12.04.2022', 
                    color: 'Белый', fullTank: true, childChair: true, rightWheel: true, 
                    price: '3000' 
                }
            ],

            services: [
                { name: 'ch1', description: 'Полный бак', servPrice: ', 500₽' },
                { name: 'ch2', description: 'Детское кресло', servPrice: ', 200₽' },
                { name: 'ch3', description: 'Правый руль', servPrice: ', 1600₽' }
            ],
        }
    },

    methods: {
        serviceCheck(servName) {
            return (this.checkedServices.indexOf(servName) + 1);
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .card-info {
        display: flex;
        flex-direction: row;
        height: 276.5px;
        width: 100%;

        @media ( max-width: 1024px ) {
            flex-wrap: wrap;
            height: auto;
        }

        &__car-img {
            width: 138px;
            height: 68px;

            margin-top: 13.5px;
            margin-left: 21px;
            margin-right: 16px;

            @media ( max-width: 1024px ) {
                width: 30%;
                height: fit-content;
            }

            @media ( max-width: 767px ) {
                width: calc(100% - 37px);
                height: auto;
            }

            @media ( max-width: 320px ) {
                width: calc(100% - 37px);
            }
        }

        &__car-info {
            display: flex;
            flex-direction: column;
            width: 31%;

            @media ( max-width: 1024px ) {
                width: 50%;
            }

            @media ( max-width: 767px ) {
                width: calc(60% - 10px);
                margin-right: 10px;
                flex-wrap: wrap;
            }

            @media ( max-width: 320px ) {
                width: 100%;
            }
        }

        &__car-location {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;

            margin: 0;
            margin-top: 15.5px;
            color: $order-gray;
        }

        &__car-info-strong {
            color: $main-black;
        }

        &__date {
            height: 16px;
            margin-top: 6px;

            @media ( max-width: 767px ) {
                height: fit-content;
            }
        }

        &__date-text {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 15px;

            color: $order-gray;
            margin: 0;
        }

        &__color {
            height: 16px;
            margin-top: 5px;
        }

        &__color-name {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;

            color: $darken-gray;
            margin: 0;
        }

        &__color-name-strong {
            color: $main-black;
        }

        &__options {
            display: flex;
            flex-direction: column;
            width: 16%;
            margin-top: 15.5px;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            margin-bottom: 32px;

            @media ( max-width: 1024px ) {
                width: calc(30% - 21.5px);
                height: 80px;
                padding-left: 21.5px;
                margin-bottom: 0;
            }

            @media ( max-width: 767px ) {
                width: calc(60% - 32px);
                margin-top: 24px;
                padding-left: 32px;
            }

            @media ( max-width: 320px ) {
                width: 100%;
                padding-left: 0;
            }
        }

        &__input-block {
            position: relative;
            width: 14px;
            height: 12px;

            input {
                margin-top: -3px;
            }

            img {
                margin: 0;
                position: absolute;
                width: 8px;
                height: 8px;

                top: 2px;
                left: 3px;
            }
        }

        &__input {
            margin-top: -3px;
        }

        &__input-img {
            margin: 0;
            position: absolute;
            width: 8px;
            height: 8px;

            top: 2px;
            left: 3px;
        }

        &__option {
            width: 100%;
            margin-bottom: 8px;
            display: flex;
            flex-direction: row;

            input[type=checkbox] {
                width: 13px;
                height: 13px;
                margin-left: 0;
                margin-right: 8px;

                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;

                border: 1px solid $order-light-gray;
                transition: 0.2s all linear;
                outline: none;
                position: relative;
                top: 2px;
                color: $order-light-gray;
            }

            input[type=checkbox]:checked {
                border: 1px solid $main-green;
            }
        }

        &__option-label {
            margin-left: 8px;
            color: $order-light-gray;

            &--active {
                color: $main-black;
            }
        }

        &__price {
            @media ( max-width: 1024px ) {
                height: 80px;
            }
        }

        &__price-text {
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;

            margin-top: 28.5px;
            color: $main-black;

            @media ( max-width: 1024px ) {
                margin-left: 21.5px;
            }

            @media ( max-width: 767px ) {
                margin-top: 32px;
                margin-right: 10px;
            }

            @media ( max-width: 320px ) {
                margin: 0;
            }
        }

        &__buttons-block {
            display: flex;
            flex-direction: row;
            width: 213px;
            height: 24px;
            margin: 31.5px 22.5px 31.5px auto;

            border: 0.5px solid $white-gray;
            border-radius: 4px;
        }

        &__button-block {
            display: flex;
            flex-direction: row;
            width: 71px;

            align-items: center;
            justify-content: flex-start;

            &--ready, &--cancel {
                border-right: 0.5px solid $white-gray;
            }

            &--ready {
                img {
                    width: 8px;
                    height: 6.5px;

                    margin-right: 3.5px;
                }
            }

            &--cancel {
                img {
                    width: 6.6px;
                    height: 7px;

                    margin-right: 4.8px;
                }
            }

            &--change {
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