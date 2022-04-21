<template>
    <div class="admin-menu">
         <div class="admin-menu__logo-block">
            <svg class="admin-menu__logo-svg">
                <use xlink:href="../../assets/img/sprite.svg#logo-svg"></use>
            </svg>

            <h3 class="admin-menu__logo-text">Need for car</h3>

            <div
                class="admin-menu__mobile-version"
                :class="{ 'admin-menu__mobile-version--open': menuSwitcher }"
                @click="toggleVisibilitySwitcher"
            >
                <div class="admin-menu__mobile-line admin-menu__mobile-first-line"></div>
                <div class="admin-menu__mobile-line admin-menu__mobile-middle-line"></div>
                <div class="admin-menu__mobile-line admin-menu__mobile-third-line"></div>
            </div>
        </div>

        <div class="admin-menu__items">
            <ul class="admin-menu__items-list">
                <span class="admin-menu__item admin-menu__active-item admin-menu__first-item">
                    <svg class="admin-menu__item-svg admin-menu__first-item-svg"><use xlink:href="@/assets/img/sprite.svg#edit-card-svg"></use></svg>
                    <li class="admin-menu__item-li">Карточка автомобиля</li>
                </span>
                <span class="admin-menu__item admin-menu__second-item">
                    <svg class="admin-menu__item-svg admin-menu__second-item-svg"><use xlink:href="@/assets/img/sprite.svg#auto-list-svg"></use></svg>
                    <li class="admin-menu__item-li">Список авто</li>
                </span>
                <span class="admin-menu__item">
                    <svg class="admin-menu__item-svg"><use xlink:href="@/assets/img/sprite.svg#order-list-svg"></use></svg>
                    <li class="admin-menu__item-li">Заказы</li>
                </span>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminMenu',

    data() {
        return {
            menuSwitcher: false
        }
    },

    methods: {
        toggleVisibilitySwitcher() {
            this.menuSwitcher = !this.menuSwitcher;
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .admin-menu {
        $this: &;

        display: flex;
        flex-direction: column;

        width: 20%;
        height: 100%;

        box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);
        z-index: 2;

        @media ( max-width: 767px ) {
            position: absolute;
            width: 100%;
            height: 67.5px;
        }

        &__logo-block {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 67.5px;
            border-bottom: 1px solid $light-gray;

            box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);
            z-index: 2;

            @media ( max-width: 767px ) {
                width: 15%;
            }
        }

        &__logo-svg {
            width: 21.5px;
            height: 21.5px;
            margin-right: 7px;

            @media ( max-width: 767px ) {
                display: none;
            }
        }

        &__logo-text {
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 18px;

            color: $blue-gray;

            @media ( max-width: 767px ) {
                display: none;
            }
        }

        &__mobile-version {
            display: none;

            @media ( max-width: 767px ) {
                display: block;

                margin-top: 8px;
                align-self: center;
            }

            &--open {
                @media ( max-width: 767px ) {
                    position: relative;

                    display: flex;

                    width: 22px;
                    height: 22px;

                    margin-top: 0;
                    margin-left: -5px;
                }

                #{$this}__mobile-first-line {
                    position: absolute;
                    top: 9px;
                    left: 0px;
                    transform: rotate(45deg);

                    margin: 0;
                }

                #{$this}__mobile-middle-line {
                    display: none;
                }

                #{$this}__mobile-third-line {
                    position: absolute;
                    top: 9px;
                    left: 0px;
                    transform: rotate(-45deg);

                    margin: 0;
                }
            }
        }

        &__mobile-line {
            @media ( max-width: 767px ) {
                display: block;

                width: 24px;
                height: 0;

                border: solid 2px $blue-gray;;
                border-radius: 1.5px;
                margin-bottom: 5px;
            }
        }

        &__items {
            @media ( max-width: 767px ) {
                display: none;
            }
        }

        &__items-list {
            display: flex;
            flex-direction: column;

            margin: 0;
            padding: 0;
        }

        &__item {
            @media ( max-width: 1024px ) {
                height: 62px;
            }

            display: flex;
            flex-direction: row;
            align-items: center;

            height: 57.7px;
            border-bottom: 1px solid $light-gray;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 17px;

            color: $blue-gray;
        }

        &__item-svg {
            width: 12px;
            height: 12px;

            margin-left: 26px;
            margin-right: 11px;
        }

        &__item-li {
            list-style-type: none;
            width: 80%;
            height: 17px;

            margin-right: 26px;
        }

        &__active-item {
            color: $admin-blue;
            background-color: $gray-white;
        }

        &__first-item {
            @media ( max-width: 1024px ) {
                align-items: flex-start;
                height: 46px;
                margin-top: 16px;
            }
        }

        &__first-item-svg {
            @media ( max-width: 1024px ) {
                margin-top: 10px;
            }
        }

        &__second-item {
            @media ( max-width: 809px ) {
                align-items: flex-start;
                height: 46px;
                margin-top: 16px;
            }
        }

        &__second-item-svg {
            @media ( max-width: 809px ) {
                margin-top: 10px;
            }
        }
    }
</style>
