<template>
    <div 
        class="car-setting-surface-input"
        :class="{ 'car-setting-surface-input--min': !inputWidth }"
    >
        <h5 
            class="car-setting-surface-input__description"
            :class="{ 'car-setting-surface-input__description--min': !inputWidth }"
        >{{ description }}</h5>
        <input 
            class="car-setting-surface-input__field" 
            :class="{ 'car-setting-surface-input__field--min': !inputWidth }"
            type="text" 
            :value="inputData"
        >
    </div>
</template>

<script>
export default {
    name: 'CarSettingSurfaceInput',

    props: {
        description: String,
        inputData: String,
        inputWidth: Boolean
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .car-setting-surface-input {
        width: calc(50% - 10.5px);

        &--min {
            width: calc(50% - 40.5px);
        }

        &__description {
            width: 100%;
            margin: 0;
            margin-bottom: 4.5px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 10.5px;
            line-height: 12px;

            &--min {
                margin-top: 31px;
            }
        }

        &__field {
            width: calc(100% - 22px);
            height: 28px;
            padding-left: 11px;
            padding-right: 11px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            color: $main-black;
            border: 1px solid $white-gray;
            border-radius: 4px;

            &--min {
                width: calc(100% - 30px);
            }
        }
    }
</style>