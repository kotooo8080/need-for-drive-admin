<template>
    <div class="category-header">
        <div class="category-header__add">
            <v-icon
                class="category-header__svg"
                :icon-path="'#plus-svg'"
            />
            <button 
                class="category-header__button category-header__button--add-btn"
                @click="categoryAdd"
            >Добавить</button>
        </div>
        <div class="category-header__buttons-block">
            <button class="
                category-header__button 
                category-header__button--red
            "
            >Обновить</button>
            <button class="category-header__button">Сохранить</button>
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/VIcon.vue'

export default {
    name: 'CategoryHeader',

    components: { 
        VIcon
    },

    data() {
        return {
            categoryAddFormView: false
        }
    },

    methods: {
        categoryAdd() {
            this.categoryAddFormView = !this.categoryAddFormView;
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

        &__add {
            position: relative;

            width: 95px;
            height: 29px;
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
        }
    }
</style>