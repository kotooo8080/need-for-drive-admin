<template>
    <div class="admin-footer">
        <div class="refs">
            <a href="">Главная страница</a>
            <a href="">Ссылка</a>
        </div>
        <p>Copyright © 2020 Simbirsoft</p>
    </div>
</template>

<script>
export default {
    name: 'AdminFooter',
}
</script>

<style lang="scss" scoped>
    .admin-footer {
        width: calc(100% - 54px);
        height: 69px;
        background: white;
        padding: 0 27px;

        display: flex;
        flex-direction: row;

        position: absolute;
        bottom: 0;

        align-items: center;
        justify-content: space-between;

        .refs {
            display: flex;
            flex-direction: row;

            a {
                text-decoration: none;

                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;

                margin-right: 16px;

                color: #007BFF;
            }
        }

        p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;

            color: #818EA3;
        }
    }

    @media ( max-width: 767px ) {
        .admin-footer {
            .refs {
                a {
                    width: fit-content;
                }
            }

            p {
                text-align: right;
            }
        }
    }
</style>
