<template>
    <div class="content-description">
        <h2 class="content-description__content-name">{{ contentNamesArr[contentIndex] }}</h2>
    </div>
</template>

<script>
export default {
    name: 'ContentDescription',

    props: {
        contentIndex: Number
    },

    data() {
        return {
            contentNamesArr: [
                'Карточка автомобиля',
                'Список авто',
                'Заказы',
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';
    
    .content-description {
        &__content-name {
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 29px;
            line-height: 33px;

            margin-left: 31.5px;
            color: $blue-gray;

            @media ( max-width: 1024px ) {
                font-size: 24px;
                line-height: 24px;
            }

            @media ( max-width: 767px ) {
                margin-left: 24px;
            }
        }
    }
</style>