<template>
    <div class="car-setting-surface-edit">
        <h3 class="car-setting-surface-edit__name">Настройки автомобиля</h3>
        <div class="car-setting-surface-edit__inputs">
            <div 
                class="car-setting-surface-input"
            >
                <h5 
                    class="car-setting-surface-input__description"
                >Модель автомобиля
                </h5>
                <input 
                    class="car-setting-surface-input__field" 
                    type="text" 
                    v-model="this.carData.name"
                >
            </div>
            <div 
                class="car-setting-surface-input"
            >
                <h5 
                    class="car-setting-surface-input__description"
                >Тип автомобиля
                </h5>
                <input 
                    class="car-setting-surface-input__field" 
                    type="text" 
                    v-model="this.carData.categoryId.name"
                >
            </div>
            <div 
                class="
                    car-setting-surface-input 
                    car-setting-surface-input--min"
            >
                <h5 
                    class="
                        car-setting-surface-input__description 
                        car-setting-surface-input__description--min
                    "
                >Доступные цвета
                </h5>
                <input 
                    class="
                        car-setting-surface-input__field 
                        car-setting-surface-input__field--min
                    " 
                    type="text" 
                    v-model="this.addedColor"
                >
            </div>
            <div 
                class="car-setting-surface-edit__plus-block"
                @click="addColor()"
            >
                <h5 class="car-setting-surface-edit__plus"/>
            </div>
        </div>
        <div class="car-setting-surface-edit__colors">
            <div 
                v-for="color in colors" 
                :key="color"
                class="car-setting-surface-edit__option"
            >
                <div class="car-setting-surface-edit__input-block">
                    <input 
                        :id=color 
                        class="car-setting-surface-edit__input"
                        v-model="checkedColors" 
                        type="checkbox" 
                        name="checkbox" 
                        :value=color
                    >
                </div>

                <label 
                    :for=color
                    class="car-setting-surface-edit__option-label"
                    :class="{ 
                        'car-setting-surface-edit__option-label--active': colorCheck(color)
                    }" 
                >{{ color }}
                </label>
            </div>
        </div>
        <div class="car-setting-surface-edit__button-block">
            <div class="car-setting-surface-edit__first-buttons">
                <button 
                    class="car-setting-surface-edit__button"
                    @click="addCar()"
                >Сохранить</button>
                <button 
                    class="
                        car-setting-surface-edit__button 
                        car-setting-surface-edit__button--gray
                    "
                >Отменить</button>
            </div>
            <button 
                class="
                    car-setting-surface-edit__button 
                    car-setting-surface-edit__button--red
                "
            >Удалить</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    name: 'CarSettingSurfaceEdit',

    data() {
        return {
            checkedColors: this.carToChange().colors,
            addedColor: 'Синий',
            colors: this.carToChange().colors,

            carData: this.carToChange(),
        }
    },

    methods: {
        ...mapState(['carToChange']),
        ...mapMutations(['dataSet']),
        ...mapActions(['changeServerData', 'setServerData']),

        colorCheck(colorName) {
            return (this.checkedColors.indexOf(colorName) + 1);
        },

        addColor() {
            this.carData.colors.push(this.addedColor);
        },

        addCar() {
            let path = '/db/car/', functionName = 'setServerData';

            if(this.carData.id) {
                path += this.carData.id;
                functionName = 'changeServerData';
            }
            if(this.carData.id) {
                this[functionName]({ 
                    name: path,
                    data: {
                        "priceMax": this.carData.priceMax,
                        "priceMin": this.carData.priceMin,
                        "name": this.carData.name,
                        "thumbnail": this.carData.thumbnail,
                        "description": this.carData.description,
                        "categoryId": this.carData.categoryId,
                        "colors": this.carData.colors
                    }
                });
            }
        }
    },

    watch: {
        carData() {
            this.dataSet([ 'carToChange', this.carData ]);
        },

        checkedColors() {
            this.carData.colors = this.checkedColors;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .car-setting-surface-edit {
        display: flex;
        flex-direction: column;
        width: calc(70% - 28px);
        height: 700px;

        background: $main-white;
        border-radius: 9px;
        padding: 19.5px 18px;

        box-shadow: 0px 2px 4px rgba(90, 97, 105, 0.12);

        @media ( max-width: 834px ) {
            width: calc(55% - 28px);
            height: fit-content;
        }

        @media ( max-width: 767px ) {
            width: calc(100% - 36px);
            margin-bottom: 50px;
        }

        &__name {
            margin: 0;
            margin-bottom: 43px;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 17.5px;
            line-height: 21px;

            color: $blue-gray;
        }

        &__inputs {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;

            width: 100%;
        }

        &__plus-block {
            position: relative;

            margin-top: 47px;
            margin-left: 0;
            margin-right: auto;

            width: 30px;
            height: 30px;

            border: 1px solid $white-gray;
            border-radius: 4px;

            @media ( max-width: 320px ) {
                margin-top: 59px;
            }
        }

        &__plus {
            position: absolute;
            right: 0px;
            top: 8px;

            margin: 0;
            width: 14px;
            height: 14px;
            opacity: 0.3;
        }

        &__plus:before, &__plus:after {
            position: absolute;
            left: -1.5px;
            content: ' ';

            height: 14px;
            width: 2px;
            
            background-color: $gray;
        }
        &__plus:before {
            transform: rotate(90deg);
        }
        &__plus:after {
            transform: rotate(0deg);
        }

        &__colors {
            margin-top: 15px;
        }

        &__option {
            display: flex;
            flex-direction: row;

            align-items: center;
        }

        &__option-label {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;

            color: $black-gray;
        }

        &__input-block {
            width: 13px;
            margin-right: 10px;
        }

        &__button-block {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            margin-top: auto;
            margin-bottom: 0;

            justify-content: space-between;

            @media ( max-width: 834px ) {
                margin-top: 31px;
            }
        }

        &__first-buttons {
            width: 232px;

            @media ( max-width: 834px ) {
                margin-bottom: 8px;
            }
        }

        &__button {
            width: 110px;
            height: 29px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11.5px;
            line-height: 13px;

            border: none;
            border-radius: 4px;

            color: $main-white;
            background: $admin-blue;

            &--gray {
                margin-left: 12px;

                color: $blue-gray;
                background: $light-gray;
            }

            &--red {
                background: $main-red;
            }
        }
    }

    .car-setting-surface-input {
        width: calc(50% - 10.5px);

        &--min {
            width: calc(50% - 40.5px);
        }

        &__description {
            width: 100%;
            margin: 0;
            margin-bottom: 4.5px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 10.5px;
            line-height: 12px;

            &--min {
                margin-top: 31px;
            }
        }

        &__field {
            width: calc(100% - 22px);
            height: 28px;
            padding-left: 11px;
            padding-right: 11px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            color: $main-black;
            border: 1px solid $white-gray;
            border-radius: 4px;

            &--min {
                width: calc(100% - 30px);
            }
        }
    }
</style>