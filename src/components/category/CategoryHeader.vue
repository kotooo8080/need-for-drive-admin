<template>
    <div class="category-header">
        <div 
            v-if="categoryAddFormView"
            class="category-header__add-form"
        >
            <h3 v-if="!needChange" class="category-header__form-header">Добавить категорию</h3>
            <h3 v-else class="category-header__form-header">Изменить категорию</h3>

            <h4 class="category-header__input-description">Название</h4>
            <input
                v-model="categoryName"
                class="category-header__input-field"
                type="text"
                placeholder="Введите название"
            >
            <h4 class="category-header__input-description">Описание</h4>
            <input
                v-model="categoryDescription"
                class="
                    category-header__input-field
                    category-header__input-field--last
                "
                type="text"
                placeholder="Введите описание"
            >

            <h4 v-if="notAllData"
                class="
                category-header__input-description 
                category-header__input-description--error
            ">Вы ввели не все данные</h4>

            <button 
                class="category-header__button"
                @click="categoryAdd()"
            >Готово</button>
            <button class="
                category-header__button 
                category-header__button--red
                category-header__button--in-form
            "
                @click="openForm()"
            >Отмена</button>
        </div>
        <div class="category-header__add">
            <v-icon
                class="category-header__svg"
                :icon-path="'#plus-svg'"
            />
            <button 
                class="category-header__button category-header__button--add-btn"
                @click="openForm()"
            >Добавить</button>
        </div>
        <div class="category-header__buttons-block">
            <button class="
                category-header__button 
                category-header__button--red
            "
                @click="reloadList()"
            >Обновить</button>
            <button 
                class="category-header__button"
            >Сохранить</button>
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/VIcon.vue'
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    name: 'CategoryHeader',

    components: { 
        VIcon
    },

    props: [
        'changeCategory'
    ],

    data() {
        return {
            categoryAddFormView: false,
            notAllData: false,

            categoryName: '',
            categoryDescription: '',

            needChange: false,
            changeCategoryId: ''
        }
    },

    methods: {
        ...mapMutations(['blurSet']),
        ...mapActions(['setServerData', 'getServerData', 'changeServerData']),
        ...mapState(['categories']),

        reloadList() {
            this.getServerData({ name: '/db/category', arrName: 'categories' });
        },

        openForm() {
            this.categoryAddFormView = !this.categoryAddFormView;
            this.blurSet(this.categoryAddFormView);

            if(!this.categoryAddFormView) {
                this.categoryName = '';
                this.categoryDescription = '';

                this.needChange = false;
            }
        },

        async categoryAdd() {
            let path = '/db/category/', functionName = 'setServerData';

            if(this.needChange) {
                path += this.changeCategoryId;
                functionName = 'changeServerData'
            }

            if(this.categoryName && this.categoryDescription) {
                await this[functionName]({ name: path, data: {
                    "name": this.categoryName,
                    "description": this.categoryDescription
                }});
                this.openForm();
                this.reloadList();
            }
            this.needChange = false;
        }
    },

    watch: {
        changeCategory() {
            const changedCategory = this.categories().find(
                el => el.id === this.changeCategory); 
            
            if(changedCategory) {
                this.categoryName = changedCategory.name;
                this.categoryDescription = changedCategory.description;
            }
            this.changeCategoryId = changedCategory.id;

            this.openForm();
            this.needChange = true;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .category-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;

        height: fit-content;
        border-bottom: 1px solid $light-gray;

        padding: 20px;

        @media ( max-width: 820px ) {
            align-items: flex-start;
        }

        @media ( max-width: 767px ) {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }

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

            @media ( max-width: 820px ) {
                top: 150px;
            }

            @media ( max-width: 768px ) {
                width: calc(90% - 80px);
                left: 5%;
            } 
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

            @media ( max-width: 820px ) {
                margin-left: auto;
                margin-right: 0;
            }

            @media ( max-width: 767px ) {
                margin: 0;
                margin-top: 10px;
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