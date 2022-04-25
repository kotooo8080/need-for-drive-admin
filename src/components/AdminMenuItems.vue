<template>
    <ul 
        class="admin-menu-items"
        :class="{ 'admin-menu-items--mobile-open': menuSwitcher }"
    >
        <li
            class="admin-menu-items__item"
            :class="{ 'admin-menu-items__item--mobile-open': menuSwitcher, 'admin-menu-items__item--active': activeItem == indx, 'admin-menu-items__item--first-item': indx === 0, 'admin-menu-items__item--second-item': indx === 1 }"
            v-for="(item, indx) in menuItems"
            :key=item.id
            @click="menuItemClick(indx)"
        >
            <svg 
                class="admin-menu-items__item-svg"
                :class="{ 'admin-menu-items__item--mobile-open-svg': menuSwitcher, 'admin-menu-items__item--first-item-svg': indx === 0, 'admin-menu-items__item--second-item-svg': indx === 1, 'admin-menu-items__item-svg--active': activeItem == indx }"
            >
                <use :xlink:href="require('@/assets/img/sprite.svg') + item.svgLink"></use>
            </svg>
            <span class="admin-menu-items__item-span">{{ item.name }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'AdminMenuItems',

    props: {
        menuSwitcher: Boolean
    },

    data() {
        return {
            activeItem: 2,
            menuItems: [
                { id: 'it1', name: 'Карточка автомобиля', svgLink: '#edit-card-svg' },
                { id: 'it2', name: 'Список авто', svgLink: '#auto-list-svg' },
                { id: 'it3', name: 'Заказы', svgLink: '#order-list-svg' },
            ]
        }
    },

    methods: {
        menuItemClick(item) {
            this.$emit('menuClick', Number(item));
            this.activeItem = Number(item);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .admin-menu-items {
        display: flex;
        flex-direction: column;

        margin: 0;
        padding: 0;

        &--mobile-open {
            width: 100%;
            height: 100%;
            z-index: 3;
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

            // &--first-item {
            //     @media ( max-width: 1024px ) {
            //         //align-items: flex-start;
            //         //height: 46px;
            //         //margin-top: 16px;
            //     }
            // }

            // &--first-item-svg {
            //     @media ( max-width: 1024px ) {
            //         //margin-top: 10px;
            //     }
            // }

            // &--second-item {
            //     @media ( max-width: 809px ) {
            //         //align-items: flex-start;
            //         //height: 46px;
            //         //margin-top: 16px;
            //     }
            // }

            // &--second-item-svg {
            //     @media ( max-width: 809px ) {
            //         //margin-top: 10px;
            //     }
            // }

            &--mobile-open {
                width: 100%;
            }

            &--mobile-open-svg {
                @media ( max-width: 767px ) {
                    margin-top: 2px;
                }
            }

            &--active {
                color: $admin-blue;
                background-color: $gray-white;

                border-left: 4px solid $admin-blue;

                @media ( max-width: 767px ) {
                    width: calc(100% - 4px);
                }
            }
        }

        &__item-svg {
            width: 12px;
            height: 12px;

            margin-left: 26px;
            margin-right: 11px;

            fill: $admin-gray;

            &--active {
                fill: $admin-blue;

                margin-left: 22px;
            }
        }

        &__item-span {
            list-style-type: none;
            width: 80%;
            height: 17px;

            margin-right: 26px;
        }
    }
</style>