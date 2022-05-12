<template>
    <div class="point-header">
        <div 
            v-if="pointAddFormView"
            class="point-header__add-form"
        >
            <h3 v-if="!needChange" class="point-header__form-header">Добавить пункт выдачи</h3>
            <h3 v-else class="point-header__form-header">Изменить пункт выдачи</h3>

            <h4 class="point-header__input-description">Название</h4>
            <input
                v-model="pointName"
                class="point-header__input-field"
                type="text"
                placeholder="Введите название"
            >
            <h4 class="point-header__input-description">Город</h4>
            <input
                v-model="pointCity"
                class="point-header__input-field"
                type="text"
                placeholder="Введите город"
            >
            <h4 class="point-header__input-description">Адрес</h4>
            <input
                v-model="pointAddress"
                class="
                    point-header__input-field
                    point-header__input-field--last
                "
                type="text"
                placeholder="Введите адрес"
            >
            <h4 v-if="notAllData"
                class="
                point-header__input-description 
                point-header__input-description--error
            ">Вы ввели не все данные</h4>

            <button 
                class="point-header__button"
                @click="pointAdd()"
            >Готово</button>
            <button class="
                point-header__button 
                point-header__button--red
                point-header__button--in-form
            "
                @click="openForm()"
            >Отмена</button>
        </div>
        <div class="point-header__add">
            <v-icon
                class="point-header__svg"
                :icon-path="'#plus-svg'"
            />
            <button 
                class="point-header__button point-header__button--add-btn"
                @click="openForm()"
            >Добавить</button>
        </div>
        <div class="point-header__buttons-block">
            <button class="
                point-header__button 
                point-header__button--red
            "
                @click="reloadList()"
            >Обновить</button>
            <button class="point-header__button">Сохранить</button>
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/VIcon.vue'
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    name: 'PointHeader',

    components: { 
        VIcon
    },

    props: [
        'changePoint'
    ],

    data() {
        return {
            pointAddFormView: false,

            pointName: '',
            pointCity: '',
            pointAddress: '',

            notAllData: false,
            needChange: false,
            changePointId: ''
        }
    },

    methods: {
        ...mapMutations(['blurSet']),
        ...mapActions(['setServerData', 'getServerData', 'changeServerData']),
        ...mapState(['points', 'cities', 'answer']),

        openForm() {
            this.pointAddFormView = !this.pointAddFormView;
            this.blurSet(this.pointAddFormView);

            if(!this.pointAddFormView) {
                this.pointName = '';
                this.pointCity = '';
                this.pointAddress = '';

                this.needChange = false;
            }
        },

        reloadList() {
            this.getServerData({ name: '/db/point', arrName: 'points' });
        },

        async cityCheck() {
            let cityId = '';
            cityId = this.cities().find(
                el => el.name.toLowerCase() === this.pointCity.toLowerCase()); 

            if(cityId) {
                return cityId.id;
            } else {
                await this.setServerData({ name: '/db/city', data: { name: this.pointCity }});
                return this.answer().id;
            }
        },

        async pointAdd() {
            const cityId = await this.cityCheck();

            let path = '/db/point/', functionName = 'setServerData';

            if(this.needChange) {
                path += this.changePointId;
                functionName = 'changeServerData'
            }

            if(this.pointName && this.pointAddress && this.pointCity && cityId) {
                await this[functionName]({ name: path, data: {
                    "name": this.pointName,
                    "cityId": {
                        "name": this.pointCity,
                        "id": cityId
                    },
                    "address": this.pointAddress
                }});
                this.openForm();
                this.reloadList();
            }
            this.needChange = false;
        }
    },

    watch: {
        changePoint() {
            const changedPoint = this.points().find(
                el => el.id === this.changePoint); 
            
            if(changedPoint) {
                this.pointName = changedPoint.name;
                this.pointCity = changedPoint.cityId.name;
                this.pointAddress = changedPoint.address;
            }
            this.changePointId = changedPoint.id;
            this.openForm();
            this.needChange = true;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .point-header {
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