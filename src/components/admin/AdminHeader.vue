<template>
    <div class="admin-header">
        <div class="admin-header__search-str">
            <svg class="admin-header__search-str-svg">
                <use xlink:href="../../assets/img/sprite.svg#search-svg"></use>
            </svg>
            
            <input class="admin-header__search-str-input" type="text" placeholder="Поиск ..." />
        </div>

        <div class="admin-header__notification">
            <svg class="admin-header__notification-svg">
                <use xlink:href="../../assets/img/sprite.svg#notification-svg"></use>
            </svg>
        </div>

        <div class="admin-header__admin-block">
            <div class="admin-header__admin-info">
                <img class="admin-header__avatar" src="../../assets/img/user-img.png" alt="">
                <h3 class="admin-header__admin-name">Admin</h3>
            </div>

            <svg class="admin-header__arrow-svg">
                <use xlink:href="../../assets/img/sprite.svg#dropdown-svg"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminHeader',
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
        }

        &__search-str-input {
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
    }
</style>
