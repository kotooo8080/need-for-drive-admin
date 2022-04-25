<template>
    <div class="admin-header">
        <div class="admin-header__search-str">
            <svg 
                class="admin-header__search-str-svg"
                :class="{ 'admin-header__search-str-svg--focused': searchOnFocus }"
            >
                <use xlink:href="../../assets/img/sprite.svg#search-svg"></use>
            </svg>
            
            <input class="admin-header__search-str-input" type="text" placeholder="Поиск ..." @focus="searchOnFocus = true"  @focusout="searchOnFocus = false"/>
        </div>

        <div class="admin-header__notification">
            <svg class="admin-header__notification-svg">
                <use xlink:href="../../assets/img/sprite.svg#notification-svg"></use>
            </svg>
        </div>

        <div class="admin-header__admin-block" @click="adminInfoOpen = !adminInfoOpen">
            <div class="admin-header__admin-info">
                <img class="admin-header__avatar" src="../../assets/img/user-img.png" alt="">
                <h3 class="admin-header__admin-name">Admin</h3>
            </div>

            <svg class="admin-header__arrow-svg">
                <use xlink:href="../../assets/img/sprite.svg#dropdown-svg"></use>
            </svg>

            <div v-if="adminInfoOpen" class="admin-header__admin-info-open">
                <a href="#" class="admin-header__admin-profile">Профиль администратора</a>
                <button class="admin-header__logout-button" @click="logoutClick">Выйти</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'AdminHeader',

    data() {
        return {
            searchOnFocus: false,
            adminInfoOpen: false
        }
    },

    methods: {
        ...mapActions([ 'logout' ]),

        logoutClick () {
            this.logout();
            this.$router.push('/login');
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .admin-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 100%;
        height: 67.5px;

        box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);

        @media ( max-width: 1024px ) {
            justify-content: flex-start;
        }

        @media ( max-width: 767px ) {
            justify-content: flex-end;
            width: 80%;
            height: 67.5px;
        }

        &__search-str {
            display: flex;
            flex-direction: row;
            align-items: center;

            width: calc(80% - 29px);
            padding-left: 29px;

            @media ( max-width: 1024px ) {
                width: calc(60% - 29px);
            }

            @media ( max-width: 767px ) {
                width: calc(55% - 16px);
                padding-left: 16px;
            }
                   
        }

        &__search-str-svg {
            width: 15px;
            height: 15px;
            margin-right: 9px;

            fill: $search-fill;

            &--focused {
                fill: $gray;
            }
        }

        &__search-str-input {
            width: calc(100% - 24px);
            height: 67.5px;

            border: none;
            outline: none;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;

            color: $dark-gray;
        }

        &__notification {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            border-right: 1px solid $light-gray;
            border-left: 1px solid $light-gray;

            width: 5%;
            height: 67.5px;

            @media ( max-width: 1024px ) {
                width: 10%;
            }

            @media ( max-width: 767px ) {
                width: 10%;
            }
        }

        &__notification-svg {
            width: 17px;
            height: 21px;
        }

        &__admin-block {
            position: relative;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            width: 15%;

            @media ( max-width: 1024px ) {
                width: 30%;  
            }

            @media ( max-width: 767px ) {
                width: 20%;
                justify-items: flex-start;
            }
        }

        &__admin-info {
            display: flex;
            flex-direction: row;
            margin-left: 25.5px;

            @media ( max-width: 767px ) {
                margin-left: 10px;
            }
        }

        &__avatar {
            width: 42px;
            height: 42px;
            border-radius: 50%; 
            margin-right: 13px;

            @media ( max-width: 767px ) {
                margin-right: 0;
            }
        }

        &__admin-name {
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 17px;
            color: $gray;

            @media ( max-width: 767px ) {
                display: none;
            }
        }

        &__arrow-svg {
            width: 8.5px;
            height: 4.5px;
            margin-right: 29.5px;

            @media ( max-width: 767px ) {
                margin-right: 10px;
            }
        }

        &__admin-info-open {
            position: absolute;
            top: 67.5px;
            right: 0;

            display: flex;
            flex-direction: column;
            align-items: center;

            width: calc(100% - 32px);
            padding: 32px 16px;

            background: $main-white;
            box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;

            z-index: 3;

            @media ( max-width: 767px ) {
                width: 200px;
            }
        }

        &__admin-profile {
            height: 30px;
            margin-bottom: 15px;

            text-decoration: none;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 12px;

            color: $blue-gray;
        }

        &__logout-button {
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
        }
    }
</style>
