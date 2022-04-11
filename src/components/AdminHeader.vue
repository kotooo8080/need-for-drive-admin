<template>
    <div class="admin-header">
        <div class="logo-block">
            <svg><use xlink:href="../assets/img/sprite.svg#logo-svg"></use></svg>
            <h3>Need for drive</h3>
            <div 
                class="lines" 
                :class="{ open: toggleValue }" 
                @click="toggleVisibilitySwitcher()"
            >
                <div class="first_line"></div>
                <div class="mid"></div>
                <div class="third_line"></div>
            </div>
        </div>
        <div class="search-str">
            <svg><use xlink:href="../assets/img/sprite.svg#search-svg"></use></svg>
            <input type="text" placeholder="Поиск ...">
        </div>
        <div class="notification">
            <svg><use xlink:href="../assets/img/sprite.svg#notification-svg"></use></svg>
        </div>
        <div class="admin-block">
            <div class="admin-info">
                <img src="../assets/img/user-img.png" alt="">
            <h3>Admin</h3>
            </div>
            <svg><use xlink:href="../assets/img/sprite.svg#dropdown-svg"></use></svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminHeader',

    data() {
        return {
            toggleValue: false
        }
    },

    methods: {
        toggleVisibilitySwitcher() {
            this.toggleValue = !this.toggleValue;
        },
    }
}
</script>

<style lang="scss" scoped>
    .admin-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 67.5px;

        box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);

        .logo-block {
            width: 20%;
            border-bottom: 1px solid #E1E5EB;

            box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);
            z-index: 2;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            svg {
                width: 21.5px;
                height: 21.5px;
                margin-right: 7px;
            }

            h3 {
                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 300;
                font-size: 16px;
                line-height: 18px;

                color: #3D5170;
            }

            div {
                display: none;
            }
        }

        .search-str {
            display: flex;
            flex-direction: row;
            align-items: center;

            width: calc(60% - 29.2px);
            padding-left: 29.2px;

            svg {
                width: 15px;
                height: 15px;
                margin-right: 9px;
            }

            input {
                border: none;
                outline: none;

                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 400;
                font-size: 13px;
                line-height: 15px;
                color: #767F9D;
            }
        }

        .notification {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            border-right: 1px solid #E1E5EB;
            border-left: 1px solid #E1E5EB;

            width: 5%;
            height: 67.5px;

            svg {
                width: 17px;
                height: 21px;
            }
        }

        .admin-block {
            display: flex;
            flex-direction: row;
            width: 15%;
            justify-content: space-between;
            align-items: center;

            .admin-info {
                display: flex;
                flex-direction: row;
                margin-left: 25.5px;

                img {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%; 
                    margin-right: 13px;
                }
    
                h3 {
                    font-family: 'Helvetica';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 15px;
                    line-height: 17px;
                    color: #5A6169;
                }
            }

            svg {
                width: 8.5px;
                height: 4.5px;
                margin-right: 29.5px;
            }
        }
    }

    @media ( max-width: 1023px ) {
        .admin-header {
            justify-content: flex-start;

            .search-str {
                width: calc(40% - 29.2px);
            }

            .admin-block {
                width: 30%;
            }

            .notification {
                width: 10%;
            }
        }
    }

    @media ( max-width: 767px ) {
        .admin-header {
            .logo-block {
                width: 15%;

                svg {
                    display: none;
                }

                h3 {
                    display: none;
                }

                .lines {
                    margin-top: 8px;
                    align-self: center;
                    display: block;

                    div {
                        display: block;
                        width: 24px;
                        height: 0;
                        border: solid 2px #3D5170;;
                        border-radius: 1.5px;
                        margin-bottom: 5px;
                    }
                }

                .open {
                    position: relative;
                    width: 22px;
                    height: 22px;
                    display: flex;
                    margin-top: 0;
                    margin-left: -5px;

                    .first_line {
                        position: absolute;
                        top: 9px;
                        left: 0px;
                        transform: rotate(45deg);
                        margin: 0;
                    }

                    .mid {
                        display: none;
                    }

                    .third_line {
                        position: absolute;
                        top: 9px;
                        left: 0px;
                        transform: rotate(-45deg);
                        margin: 0;
                    }
                }
            }

            .search-str {
                width: calc(55% - 16px);
                padding-left: 16px;
            }

            .notification {
                width: 10%;
            }

            .admin-block {
                width: 20%;
                justify-items: flex-start;

                .admin-info {
                    margin-left: 10px;

                    img {
                        margin-right: 0;
                    }
                }

                svg {
                    margin-right: 10px;
                }

                h3 {
                    display: none;
                }
            }
        }
    }
</style>
