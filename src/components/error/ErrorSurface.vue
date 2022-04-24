<template>
    <div class="error-surface">
        <h2 class="error-surface__error-code">500</h2>
        <h3 class="error-surface__error-description">Что-то пошло не так</h3>
        <h5 class="error-surface__error-solution">Попробуйте перезагрузить страницу</h5>
        <button class="error-surface__error-button">Назад</button>
    </div>
</template>

<script>
export default {
    name: 'ErrorSurface',
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .error-surface {
        display: flex;
        flex-direction: column;

        height: 150vh;

        align-items: center;
        justify-content: center;

        @media ( max-width: 1024px ) {
            justify-content: start;
            margin-top: 200px;
            height: calc(100% - 200px);
        }

        @media ( max-width: 428px ) {
            margin-top: 100px;
        }

        &__error-code {
            margin: 0;
            margin-bottom: 13px;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 75px;
            line-height: 88px;

            color: $white-gray;

            @media ( max-width: 1024px ) {
                font-weight: 400;
                font-size: 60px;
                line-height: 60px;
            }

            @media ( max-width: 428px ) {
                font-size: 50px;
                line-height: 50px;
                margin-bottom: 10px;
            }
        }

        &__error-description {
            margin: 0;
            margin-bottom: 15px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 50px;
            line-height: 57px;

            color: $blue-gray;

            @media ( max-width: 1024px ) {
                font-weight: 300;
                font-size: 40px;
                line-height: 40px;
            }

            @media ( max-width: 428px ) {
                font-size: 30px;
                line-height: 30px;
                margin-bottom: 8px;
            }
        }

        &__error-solution {
            margin: 0;
            margin-bottom: 35px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;

            color: $admin-gray;

            @media ( max-width: 1024px ) {
                font-weight: 300;
                margin-bottom: 15px;
            }

            @media ( max-width: 428px ) {
                font-size: 18px;
                line-height: 18px;
                margin-bottom: 20px;
            }
        }

        &__error-button {
            margin: 0;

            width: 95px;
            height: 29px;

            border: none;
            border-radius: 4px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            color: $main-white;
            background: $admin-blue;
        }
    }
</style>
