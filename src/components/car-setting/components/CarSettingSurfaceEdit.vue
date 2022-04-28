<template>
    <div class="car-setting-surface-edit">
        <h3 class="car-setting-surface-edit__name">Настройки автомобиля</h3>
        <div class="car-setting-surface-edit__inputs">
            <car-setting-surface-input 
                v-for="item in inputs"
                :key="item.id"
                :description="item.name"
                :inputData="item.data"
                :inputWidth="item.maxWidth"
            />
            <div class="car-setting-surface-edit__plus-block">
                <a href="#" class="car-setting-surface-edit__plus"/>
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
                <button class="car-setting-surface-edit__button">Сохранить</button>
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
import CarSettingSurfaceInput from './CarSettingSurfaceInput.vue'

export default {
    name: 'CarSettingSurfaceEdit',

    components: { 
        CarSettingSurfaceInput 
    },

    data() {
        return {
            checkedColors: [],
            inputs: [
                { id: 'inp1', name: 'Модель автомобиля', data: 'Hyndai, i30 N', maxWidth: true },
                { id: 'inp2', name: 'Тип автомобиля', data: 'Компакт-кар', maxWidth: true },
                { id: 'inp3', name: 'Доступные цвета', data: 'Синий', maxWidth: false },
            ],

            colors: [
                'Красный',
                'Белый',
                'Чёрный'
            ]
        }
    },

    methods: {
        colorCheck(colorName) {
            return (this.checkedColors.indexOf(colorName) + 1);
        },
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

            color: $blak-gray;
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
</style>