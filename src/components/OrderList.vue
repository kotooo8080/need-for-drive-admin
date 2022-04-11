<template>
    <div class="order-list">
        <h2>Заказы</h2>
        <div class="order-cards">
            <div class="filters">
                <select>
                    <option
                        v-for="period in periods"
                        :key="period.id"
                    >{{ period.name }}</option>
                </select>
                <select>
                    <option
                        v-for="model in models"
                        :key="model.id"
                    >{{ model.name }}</option>
                </select>
                <select>
                    <option
                        v-for="city in cities"
                        :key="city.id"
                    >{{ city.name }}</option>
                </select>
                <select>
                    <option
                        v-for="state in states"
                        :key="state.id"
                    >{{ state.name }}</option>
                </select>
                <button>Применить</button>
            </div>
            <div class="card-info">
                <img src="../assets/img/car1.png" alt="">
                <div class="car-info">
                    <div class="car-main-info">
                        <h3><span>ELANTRA</span> в <span>Ульяновск</span>, Нариманова 42</h3>
                    </div>
                    <div class="date">
                        <h3><span>12.06.2019 12:00</span> - <span>13.06.2019 12:00</span></h3>
                    </div>
                    <div class="color">
                        <h3>Цвет: <span>Голубой</span></h3>
                    </div>
                </div>
                <div class="options">
                    <div 
                        v-for="service in services" 
                        :key="service.name"
                        class="option"
                    >
                        <div class="input-block">
                            <input 
                                :id=service.name 
                                v-model="checkedServices" 
                                type="checkbox" 
                                name="checkbox" 
                                :value=service.name
                            >
                            <img 
                                v-if="serviceCheck(service.name)" 
                                src="../assets/img/check.svg" 
                                alt=""
                            >
                        </div>
                        <label 
                            :for=service.name
                            :class="{ 'active-label': serviceCheck(service.name)}" 
                        >{{ service.description }}{{ service.servPrice }}</label>
                    </div>
                </div>
                <div class="price">
                    <h2>4 300 ₽</h2>
                </div>
                <div class="buttons-block">
                    <div class="button-ready">
                        <img src="../assets/img/ready.svg" alt="">
                        <button>Готово</button>
                    </div>
                    <div class="button-cancel">
                        <img src="../assets/img/cancel.svg" alt="">
                        <button>Отмена</button>
                    </div>
                    <div class="button-change">
                        <img src="../assets/img/change.svg" alt="">
                        <button>Изменить</button>
                    </div>
                </div>
            </div>
            <div class="card-choice">
                <div class="cards-buttons">
                    <button class="to-start">«</button>
                    <button 
                        v-for="(card, indx) in cardsInfo"
                        :key="'card' + indx"
                        :class="{ 'active-page': openedPage == indx}" 
                    >
                    {{ indx + 1 }}
                    </button>
                    <button class="to-end">»</button>
                </div>
            </div>
        </div>
        <admin-footer />
    </div>
</template>

<script>
import AdminFooter from '@/components/AdminFooter.vue'

export default {
    name: 'OrderList',

    components: {
        AdminFooter
    },

    data() {
        return {
            checkedServices: [],
            openedPage: 0,
            cardsInfo: [ 
                { photo: '../assets/img/car1.png', model: 'ELANTRA', city: 'Санкт-Петербург', street: 'Пушкина 4а', date: '11.04.2022 - 12.04.2022', color: 'Голубой', fullTank: true, childChair: false, rightWheel: true, price: '12600' },
                { photo: '../assets/img/car1.png', model: 'i30', city: 'Уфа', street: 'Нариманова 42', date: '11.04.2022 - 12.04.2022', color: 'Красный', fullTank: false, childChair: true, rightWheel: false, price: '11200' },
                { photo: '../assets/img/car1.png', model: 'i30', city: 'Санкт-Петербург', street: 'Пушкина 4а', date: '11.04.2022 - 12.04.2022', color: 'Зеленый', fullTank: true, childChair: true, rightWheel: false, price: '10500' },
                { photo: '../assets/img/car1.png', model: 'ELANTRA', city: 'Ульяновск', street: 'Нариманова 42', date: '11.04.2022 - 12.04.2022', color: 'Синий', fullTank: false, childChair: false, rightWheel: false, price: '8080' },
                { photo: '../assets/img/car1.png', model: 'Rio', city: 'Санкт-Петербург', street: 'Пушкина 4а', date: '11.04.2022 - 12.04.2022', color: 'Белый', fullTank: true, childChair: true, rightWheel: true, price: '3000' }
            ],

            periods: [
                { id: 'p1', name: 'За неделю' },
                { id: 'p2', name: 'За месяц' },
                { id: 'p3', name: 'За год' }
            ],

            models: [
                { id: 'm1', name: 'Elantra' },
                { id: 'm2', name: 'Mazda 6' },
                { id: 'm3', name: 'Porsche 911' }
            ],

            cities: [
                { id: 's1', name: 'Ульяновск' },
                { id: 's2', name: 'Санкт-Петербург' },
                { id: 's3', name: 'Краснодар' },
                { id: 's4', name: 'Уфа' }
            ],

            states: [
                { id: 'st1', name: 'В процессе' },
                { id: 'st2', name: 'Завершен' },
                { id: 'st3', name: 'Не начат' }
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
    .order-list {
        background: #F5F6F8;
        width: 80%;

        position: relative;

        h2 {
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 29px;
            line-height: 33px;

            margin-left: 31.5px;
            color: #3D5170;
        }

        .order-cards {
            width: calc(100% - 57px);
            background: white;
            margin-left: 31.5px;

            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            .option {
                width: 100%;
                margin-bottom: 8px;
                display: flex;
                flex-direction: row;
    
                label {
                    margin-left: 8px;
                }
            }

            .filters {
                height: 29px;
                padding: 16px 21.5px 14px 21.5px;
                border-bottom: 1px solid #E1E5EB;

                display: flex;
                flex-direction: row;

                select {
                    width: 110.5px;
                    height: 29px;
                    background: white;
                    margin-right: 15px;

                    border: 0.5px solid #BECAD6;
                    border-radius: 4px;

                    font-family: 'Helvetica';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 11px;
                    line-height: 13px;
                    color: #868E96;
                }

                button {
                    margin-left: auto;
                    margin-right: 0;

                    font-family: 'Helvetica';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 11px;
                    line-height: 13px;

                    width: 95px;
                    height: 29px;

                    background: #007BFF;
                    border: none;
                    border-radius: 4px;
                    color: #FFFFFF;
                }
            }

            .card-info {
                display: flex;
                flex-direction: row;
                height: 276.5px;

                img {
                    width: 138px;
                    height: 63px;

                    margin-top: 13.5px;
                    margin-left: 21px;
                    margin-right: 16px;
                }

                .car-info {
                    display: flex;
                    flex-direction: column;
                    width: 31%;

                    .car-main-info {
                        h3 {
                            font-family: 'Roboto', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 13px;
                            line-height: 15px;

                            margin: 0;
                            margin-top: 15.5px;
                            color: #889098;

                            span {
                                color: #121212;
                            }
                        }
                    }

                    .date {
                        height: 16px;
                        margin-top: 6px;

                        h3 {
                            font-family: 'Roboto', sans-serif;
                            font-style: normal;
                            font-weight: 300;
                            font-size: 13px;
                            line-height: 15px;

                            color: #889098;
                            margin: 0;
                        }
                    }

                    .color {
                        height: 16px;
                        margin-top: 5px;

                        h3 {
                            font-family: 'Roboto', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 13px;
                            line-height: 15px;

                            color: #868E96;
                            margin: 0;

                            span {
                                color: #121212;
                            }
                        }
                    }
                }

                .options {
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

                    .input-block {
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

                    .option {
                        width: 100%;
                        margin-bottom: 8px;
                        display: flex;
                        flex-direction: row;

                        label {
                            margin-left: 8px;
                            color: #999999;
                        }

                        .active-label {
                            color: #121212;
                        }

                        input[type=checkbox] {
                            width: 13px;
                            height: 13px;
                            margin-left: 0;
                            margin-right: 8px;

                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;

                            border: 1px solid #999999;
                            transition: 0.2s all linear;
                            outline: none;
                            position: relative;
                            top: 2px;
                            color: #999999;
                        }

                        input[type=checkbox]:checked {
                            border: 1px solid #0EC261;
                        }
                    }
                }

                .price {
                    h2 {
                        font-family: 'Helvetica';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 24px;
                        line-height: 28px;

                        margin-top: 28.5px;
                        color: #121212;
                    }
                }

                .buttons-block {
                    display: flex;
                    flex-direction: row;
                    width: 213px;
                    height: 24px;
                    margin: 31.5px 22.5px 31.5px auto;

                    border: 0.5px solid #BECAD6;
                    border-radius: 4px;

                    div {
                        display: flex;
                        flex-direction: row;
                        width: 71px;

                        align-items: center;
                        justify-content: flex-start;

                        button {
                            border: none;
                            background: none;

                            font-family: 'Helvetica';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 11px;
                            line-height: 13px;
                            text-align: center;

                            padding: 0;
                            color: #5A6169;
                        }

                        img {
                            margin: 0;
                            margin-left: 8px;
                        }
                    }

                    .button-ready, .button-cancel {
                        border-right: 0.5px solid #BECAD6;
                    }

                    .button-ready {
                        img {
                            width: 8px;
                            height: 6.5px;

                            margin-right: 3.5px;
                        }
                    }

                    .button-cancel {
                        img {
                            width: 6.6px;
                            height: 7px;

                            margin-right: 4.8px;
                        }
                    }

                    .button-change {
                        img {
                            width: 4px;
                            height: 8px;

                            margin-left: 6px;
                            margin-right: 4px;
                        }
                    }
                }
            }

            .card-choice {
                border-top: 1px solid #E1E5EB;
                height: 59px;

                .cards-buttons {
                    display: flex;
                    flex-direction: row;

                    height: 59px;
                    align-items: center;
                    justify-content: center;

                    button {
                        width: 21px;
                        height: 21px;
                        border: none;
                        background: none;
                        color: #007BFF;
                        padding: 0;

                        font-family: 'Helvetica';
                        font-style: normal;
                        font-weight: 300;
                        font-size: 15px;
                        line-height: 17px;
                    }

                    .active-page {
                        border-radius: 50%;
                        background: #007BFF;
                        color: white;
                    }

                    .to-start, .to-end {
                        padding: 0;
                    }
                }
            }
        }
    }

    @media ( max-width: 1024px ) {
        .order-list {
            h2 {
                font-size: 24px;
                line-height: 24px;
            }

            .order-cards {
                .card-info {
                    flex-wrap: wrap;
                    height: auto;

                    img {
                        width: 30%;
                        height: fit-content;
                    }

                    .car-info {
                        width: 50%;
                    }

                    .options {
                        width: calc(30% - 21.5px);
                        height: 80px;
                        padding-left: 21.5px;
                        margin-bottom: 0;
                    }

                    .price {
                        height: 80px;

                        h2 {
                            margin-left: 21.5px;
                        }
                    }
                }
            }
        }
    }

    @media ( max-width: 767px ) {
        .order-list {
            width: 100%;

            h2 {
                margin-left: 24px;
            }

            .order-cards {
                width: calc(100% - 48px);
                margin-left: 24px;
                margin-right: 24px;

                .filters {
                    flex-wrap: wrap;
                    height: fit-content;

                    select {
                        margin-bottom: 8px;
                    }

                    button {
                        margin-left: 0;
                        margin-right: auto;
                    }
                }

                .card-info {
                    .car-info {
                        width: calc(60% - 10px);
                        margin-right: 10px;
                        flex-wrap: wrap;

                        .date {
                            height: fit-content;
                        }
                    }

                    .options {
                        width: calc(60% - 32px);
                        margin-top: 24px;
                        padding-left: 32px;
                    }

                    .price {
                        h2 {
                            margin-top: 32px;
                            margin-right: 10px;
                        }
                    }

                    img {
                        width: calc(40% - 37px);
                    }
                }
            }
        }
    }
</style>
