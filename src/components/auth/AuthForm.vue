<template>
    <form class="auth-form" @submit.prevent="loginHandler">
        <div class="auth-form__company-info">
            <v-icon
                class="auth-form__company-logo"
                :iconPath="'#logo-svg'"
            />

            <h3 class="auth-form__company-name">Need for drive</h3>
        </div>

        <div class="auth-form__auth-info">
            <h3 class="auth-form__auth-header">Вход</h3>
            <h4 class="auth-form__input-description">Почта</h4>
            
            <input
                v-model="email"
                class="auth-form__input-field"
                type="text"
                placeholder="Введите почту"
            >

            <h4 class="auth-form__input-description">Пароль</h4>
            
            <input
                v-model="password"
                class="auth-form__input-field"
                type="password"
                placeholder="Введите пароль"
            >

            <div class="auth-form__buttons">
                <a href="" class="auth-form__get-access-link">Запросить доступ</a>
                <button class="auth-form__login-button" type="submit">Войти</button>
            </div>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
import VIcon from '../VIcon.vue';

export default {
    name: 'AuthForm',

    components: { VIcon },

    data() {
        return {
            email : '',
            password : ''
        }
    },

    methods: {
        ...mapActions([ 'login' ]),

        loginHandler () {
            const { email, password } = this;
            
            const data = {
                email,
                password,
            };

            let isFull = true;
            for (const key in data) {
                if (!data[key]) {
                    isFull = false;
                    break;
                }
            }

            if (isFull) {
                this.login(data);
                this.$router.push('/admin/order');
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .auth-form {
        @media ( max-width: 767px ) {
            width: 80%;
            height: auto;
        }

        &__company-info {
            @media ( max-width: 361px ) {
                margin-top: 100px;
            }

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            height: 45px;
            margin-top: 167px;
            margin-bottom: 17px;
        }

        &__company-logo {
            width: 45px;
            height: 45px;
            margin-right: 12px;
        }

        &__company-name {
            height: 28px;
            margin: 0;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 28px;

            color: $blue-gray;
        }

        &__auth-info {
            @media ( max-width: 767px ) {
                width: calc(100% - 35px);
                height: auto;
            }
            
            display: flex;
            flex-direction: column;
        
            width: 341.5px;
            height: 213.5px;
            background: white;
            padding: 20px 18px 21px 17px;

            box-shadow: 0 0 10px rgba(90, 97, 105, 0.11);
            border-radius: 9px;
        }

        &__auth-header {
            text-align: center;

            margin: 0;
            margin-bottom: 36px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 20px;

            color: $blue-gray;
        }

        &__input-description {
            margin: 0;
            margin-bottom: 8.5px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 12px;

            color: $blak-gray;
        }

        &__input-field {
            height: 29px;
            border: 1px solid $white-gray;
            box-sizing: border-box;
            border-radius: 3px;
            margin-bottom: 15px;
            padding: 8px 12px 9px 12px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            color: $blue-gray;
        }

        &__buttons {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        &__get-access-link {
            height: 12px;
            margin-bottom: 0;

            text-decoration: none;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 10.5px;
            line-height: 12px;

            color: $admin-blue;
        }

        &__login-button {
            width: 110px;
            height: 29px;

            background: $admin-blue;
            border: 0.5px solid $admin-blue;
            box-sizing: border-box;
            border-radius: 4px;

            font-family: 'Helvetica';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 13px;

            color: $main-white;
        }
    }
</style>
