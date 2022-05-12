<template>
    <div class="rate-header">
        <div 
            v-if="rateAddFormView"
            class="rate-header__add-form"
        >
            <h3 v-if="!needChange" class="rate-header__form-header">Добавить тариф</h3>
            <h3 v-else class="rate-header__form-header">Изменить тариф</h3>

            <h4 class="rate-header__input-description">Название</h4>
            <input
                v-model="rateName"
                class="rate-header__input-field"
                type="text"
                placeholder="Введите название"
            >
            <h4 class="rate-header__input-description">Длительность</h4>
            <input
                v-model="rateDuration"
                class="rate-header__input-field"
                type="text"
                placeholder="Введите длительность"
            >
            <h4 class="rate-header__input-description">Цена</h4>
            <input
                v-model="ratePrice"
                class="
                    rate-header__input-field
                    rate-header__input-field--last
                "
                type="text"
                placeholder="Введите цену"
            >
            <h4 v-if="notAllData"
                class="
                rate-header__input-description 
                rate-header__input-description--error
            ">Вы ввели не все данные</h4>

            <button 
                class="rate-header__button"
                @click="rateAdd()"
            >Готово</button>
            <button class="
                rate-header__button 
                rate-header__button--red
                rate-header__button--in-form
            "
                @click="openForm()"
            >Отмена</button>
        </div>
        <div class="rate-header__add">
            <v-icon
                class="rate-header__svg"
                :icon-path="'#plus-svg'"
            />
            <button 
                class="rate-header__button rate-header__button--add-btn"
                @click="openForm()"
            >Добавить</button>
        </div>
        <div class="rate-header__buttons-block">
            <button class="
                rate-header__button 
                rate-header__button--red
            "   
                @click="reloadList()"
            >Обновить</button>
            <button class="rate-header__button">Сохранить</button>
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/VIcon.vue'
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    name: 'RateHeader',

    components: { 
        VIcon
    },

    props: [
        'changeRate'
    ],

    data() {
        return {
            rateAddFormView: false,

            rateName: '',
            rateDuration: '',
            ratePrice: '',

            notAllData: false,
            needChange: false,
            changeRateId: ''
        }
    },

    methods: {
        ...mapMutations(['blurSet']),
        ...mapActions(['setServerData', 'getServerData', 'changeServerData']),
        ...mapState(['rates', 'answer']),

        openForm() {
            this.rateAddFormView = !this.rateAddFormView;
            this.blurSet(this.rateAddFormView);

            if(!this.rateAddFormView) {
                this.rateName = '';
                this.rateDuration = '';
                this.ratePrice = '';

                this.needChange = false;
            }
        },

        reloadList() {
            this.getServerData({ name: '/db/rate', arrName: 'rates' });
        },

        async rateAdd() {
            let path = '/db/rate/', functionName = 'setServerData';

            if(this.needChange) {
                path += this.changeRateId;
                functionName = 'changeServerData'
            }

            if(this.rateName && this.rateDuration && this.ratePrice) {
                await this[functionName]({ name: path, data: {
                    "price": this.ratePrice,
                    "rateTypeId": {
                        "unit": this.rateDuration,
                        "name": this.rateName,
                }}});
                this.openForm();
                this.reloadList();
            }
            this.needChange = false;
        }
    },

    watch: {
        changeRate() {
            const changedRate = this.rates().find(
                el => el.id === this.changeRate); 
            
            if(changedRate) {
                this.rateName = changedRate.rateTypeId.name;
                this.rateDuration = changedRate.rateTypeId.unit;
                this.ratePrice = changedRate.price;
            }

            this.changeRateId = changedRate.id;

            this.openForm();
            this.needChange = true;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .rate-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;

        height: fit-content;
        border-bottom: 1px solid $light-gray;

        padding: 20px;

        &__add {
            position: relative;

            width: 95px;
            height: 29px;
        }

         &__add-form {
            position: absolute;
            top: 30%;
            left: calc(50% - 200px);

            width: 400px;
            padding: 30px 40px;

            font-family: 'Helvetica';
            font-style: normal;

            background: $main-white;
            box-shadow: 
                0px 1px 0px rgba(90, 97, 105, 0.11), 
                0px 2px 4px rgba(90, 97, 105, 0.12), 
                0px 5px 5px rgba(90, 97, 105, 0.06), 
                0px 3.5px 35px rgba(90, 97, 105, 0.1);

            border-radius: 6px;
            color: $blue-gray;

            z-index: 4;
        }

        &__form-header {
            margin-top: 0;
            margin-bottom: 24px;

            font-weight: 400;
            font-size: 29px;
            line-height: 33px;
        }

        &__input-description {
            margin-top: 8px;
            margin-bottom: 8px;

            font-weight: 400;
            font-size: 15px;
            line-height: 15px;

            &--error {
                color: $main-red;
            }
        }

        &__input-field {
            width: 100%;
            height: 29px;
            border: 1px solid $white-gray;
            box-sizing: border-box;
            border-radius: 3px;
            margin-bottom: 15px;
            padding: 8px 12px 9px 12px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            color: $blue-gray;

            &--last {
                margin-bottom: 24px;
            }
        }

        &__svg {
            position: absolute;

            top: 30%;
            left: 10px;

            width: 12px;
            height: 12px;

            fill: $main-white;
            z-index: 2;
        }

        &__buttons-block {
            margin-left: auto;
            margin-right: 0;

            @media ( max-width: 834px ) {
                margin-left: 21.5px;
                margin-bottom: 16px;
                margin-right: auto;
            }
        }

        &__button {
            margin: 0;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            width: 95px;
            height: 29px;

            background: $admin-blue;
            border: none;
            border-radius: 4px;
            color: $main-white;

            &--add-btn {
                position: absolute;
                text-align: right;
                padding-right: 15px;

                width: 95px;
                height: 29px;
            }

            &--red {
                background: $main-red;
                margin-right: 21.5px;
            }

            &--in-form {
                margin-left: 8px;
            }
        }
    }
</style>