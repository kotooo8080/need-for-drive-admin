<template>
    <div class="car-setting-surface-description">
        <div class="car-setting-surface-description__main-info">
            <img 
                class="car-setting-surface-description__car-img" 
                src='../../../assets/img/car1.png' alt=""
            >
            <h3 
                class="car-setting-surface-description__car-model"
            >Hyndai, i30 N</h3>
            <h5 
                class="car-setting-surface-description__car-type"
            >Компакт-кар
            </h5>
            <div class="car-setting-surface-description__input-field">
                <div 
                    class="car-setting-surface-description__fake-input"
                >Выберите файл...</div>
                <button 
                    class="car-setting-surface-description__button"
                >Выбрать</button>
                <input 
                    class="car-setting-surface-description__input" 
                    type="file"
                    ref="carImg"
                    @change="handleFileUpload()"
                >
            </div>
        </div>
        <div class="car-setting-surface-description__scale">
            <div class="car-setting-surface-description__scale_info">
                <h4 class="car-setting-surface-description__scale-text">Заполнено</h4>
                <h4 class="car-setting-surface-description__percent">74%</h4>
            </div>
            <div class="car-setting-surface-description__progress">
                <span 
                class="car-setting-surface-description__progress-bar" 
                style="width: 74%"
                >
                </span>
            </div>
        </div>
        <div class="car-setting-surface-description__other-info">
            <h4 class="car-setting-surface-description__other-description">Описание</h4>
            <h4 
                class="car-setting-surface-description__other-text"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Odio eaque, quidem, commodi soluta qui quae quod dolorum sint alias, 
                possimus illum assumenda eligendi cumque?
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarSettingSurfaceDescription',

    data() {
        return {
            uploadedCarImg: {}
        }
    },

    methods: {
        handleFileUpload() {
            this.uploadedcarImg = this.$refs.carImg.files[0];
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .car-setting-surface-description {
        display: flex;
        flex-direction: column;

        width: 30%;
        height: fit-content;
        margin-right: 28px;

        background: $main-white;
        border-radius: 9px;

        box-shadow: 0px 2px 4px rgba(90, 97, 105, 0.12);

        @media ( max-width: 834px ) {
            width: 45%;
        }

        @media ( max-width: 767px ) {
            width: 100%;
            margin-bottom: 28px;
        }

        &__main-info {
            display: flex;
            flex-direction: column;
            align-items: center;

            width: calc(100% - 45px);
            padding: 22.5px;

            border-bottom: 0.5px solid $white-gray;
        }

        &__car-img {
            width: 80%;

            @media ( max-width: 1023px ) {
                width: 100%;
            }
        }

        &__car-model {
            margin-top: 0;
            margin-bottom: 4.5px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 300;
            font-size: 24.5px;
            line-height: 28px;

            color: $blue-gray;

            @media ( max-width: 1023px ) {
                margin-top: 16px;

                font-size: 16px;
                line-height: 16px;
            }
        }

        &__car-type {
            margin-top: 0;
            margin-bottom: 10.5px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 12.5px;
            line-height: 14px;

            color: $admin-gray;
        }

        &__input-field {
            position: relative;
            overflow: hidden;

            display: flex;
            flex-direction: row;

            height: 29px;
            width: 90%;
            border: 0.5px solid $white-gray;
            border-radius: 4px;

            @media ( max-width: 1023px ) {
                width: 100%;
            }
        }

        &__fake-input {
            display: flex;
            flex-direction: row;
            align-items: center;

            width: calc(70% - 13px);
            height: 29px;
            padding-left: 13px;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;

            color: $black-gray;
        }

        &__input {
            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 100%;

            opacity: 0;
            cursor: pointer
        }

        &__button {
            height: 29px;
            width: 30%;
            border: none;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            
            color: $black-gray;
            background: $white;
        }

        &__scale {
            width: calc(100% - 45px);
            padding: 14px 22.5px;

            border-bottom: 0.5px solid $white-gray;
        }

        &__scale_info {
            display: flex;
            flex-direction: row;

            justify-content: space-between;
        }

        &__scale-text {
            margin-top: 0;
            margin-bottom: 10px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 15px;

            color: $darken-gray;
        }

        &__percent {
            margin: 0;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            color: $gray;
        }

        &__progress {
            width: 100%;
            height: 5px;

            background: #e1e4e8;
            border-radius: 3px;
            overflow: hidden;
        }

        &__progress-bar {
            display: block;

            height: 100%;
            border-radius: 3px;

            background: $admin-blue;
            background-size: 300% 100%;
        }

        &__other-info {
            width: calc(100% - 45px);
            padding: 22.5px;
        }

        &__other-description {
            margin-top: 0;
            margin-bottom: 10px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;

            color: $darken-gray;
        }

        &__other-text {
            margin-top: 0;
            margin-bottom: 10px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 15px;

            color: $gray;
        }
    }
</style>