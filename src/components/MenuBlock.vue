<template>
    <div class="menu-block">
        <div class="menu-items">
            <ul>
                <span class="active-item first-item">
                    <svg><use xlink:href="@/assets/img/sprite.svg#edit-card-svg"></use></svg>
                    <li>Карточка автомобиля</li>
                </span>
                <span class="second-item">
                    <svg><use xlink:href="@/assets/img/sprite.svg#auto-list-svg"></use></svg>
                    <li>Список авто</li>
                </span>
                <span>
                    <svg><use xlink:href="@/assets/img/sprite.svg#order-list-svg"></use></svg>
                    <li>Заказы</li>
                </span>
            </ul> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuBlock',
}
</script>

<style lang="scss" scoped>
    .menu-block {
        display: flex;
        flex-direction: column;

        width: 20%;
        height: 100%;

        box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);
        z-index: 2;

        .menu-items {
            ul {
                display: flex;
                flex-direction: column;

                margin: 0;
                padding: 0;

                span {
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    height: 57.7px;
                    border-bottom: 1px solid #E1E5EB;

                    font-family: 'Helvetica';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 15px;
                    line-height: 17px;

                    color: #3D5170;

                    svg {
                        width: 12px;
                        height: 12px;

                        margin-left: 26px;
                        margin-right: 11px;
                    }

                    li {
                        list-style-type: none;
                        width: 80%;
                        height: 17px;

                        margin-right: 26px;
                    }
                }

                .active-item {
                    color: #007BFF;
                    background-color: #FBFBFB;
                }
            }
        }
    }

    @media ( max-width: 1024px ) {
        .menu-block {
            .menu-items {
                ul {
                    span {
                        height: 62px;
                    }

                    .first-item {
                        align-items: flex-start;
                        height: 46px;
                        margin-top: 16px;

                        svg {
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }

    @media ( max-width: 809px ) {  
        .menu-block {
            .menu-items {
                ul {
                    .second-item {
                        align-items: flex-start;
                        height: 46px;
                        margin-top: 16px;

                        svg {
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }

    @media ( max-width: 767px ) {
        .menu-block {
            display: none;
        }
    }
</style>
