<template>
    <div class="admin-footer">
        <div class="admin-footer__links">
            <a href="" class="admin-footer__link">Главная страница</a>
            <a href="" class="admin-footer__link">Ссылка</a>
        </div>

        <p class="admin-footer__copyright">
            Copyright © 2020 Simbirsoft
        </p>
    </div>
</template>

<script>
export default {
    name: 'AdminFooter',
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .admin-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        margin-top: auto;

        width: calc(100% - 54px);
        height: 69px;
        min-height: 69px;
        padding: 0 27px;

        background: $main-white;

        @media ( max-width: 767px ) {
            width: calc(100% - 54px);
        }

        &__links {
            display: flex;
            flex-direction: row;
        }

        &__link {
            margin-right: 16px;

            text-decoration: none;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;

            color: $admin-blue;

            @media (max-width: 767px) {
                width: fit-content;
            }
        }

        &__copyright {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;

            color: $admin-gray;

            @media (max-width: 767px) {
                text-align: right;
            }
        }
    }
</style>
