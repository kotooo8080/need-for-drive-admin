<template>
    <form class="auth-form" @submit.prevent="loginHandler">
        <div class="company-info">
            <svg>
                <use xlink:href="../assets/img/sprite.svg#logo-svg"></use>
            </svg>
            <h3>Need for drive</h3>
        </div>

        <div class="auth-card">
            <h3>Вход</h3>
            <h4>Почта</h4>
            
            <input
                v-model="email"
                type="text"
                placeholder="Введите почту"
            >

            <h4>Пароль</h4>
            
            <input
                v-model="password"
                type="password"
                placeholder="Введите пароль"
            >

            <div class="button-str">
                <h4>Запросить доступ</h4>
                <button type="submit">Войти</button>
            </div>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'AuthForm',

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
                this.$router.push('/');
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    .auth-form {
        .company-info {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 45px;
            margin-top: 167px;
            margin-bottom: 17px;

            h3 {
                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 300;
                font-size: 24px;
                line-height: 28px;

                color: #3D5170;
                height: 28px;
                margin: 0;
            }

            svg {
                width: 45px;
                height: 45px;
                margin-right: 12px;
            }
        }

        .auth-card {
            display: flex;
            flex-direction: column;
            padding: 20px 18px 21px 17px;
        
            width: 341.5px;
            height: 213.5px;
            background: white;

            box-shadow: 0 0 10px rgba(90, 97, 105, 0.11);
            border-radius: 9px;

            h3 {
                text-align: center;
                margin: 0;
                margin-bottom: 36px;

                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 300;
                font-size: 18px;
                line-height: 20px;

                color: #3D5170;
            }

            h4 {
                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 400;
                font-size: 11px;
                line-height: 12px;
                margin: 0;
                margin-bottom: 8.5px;

                color: #495057;
            }

            input {
                height: 29px;
                border: 1px solid #BECAD6;
                box-sizing: border-box;
                border-radius: 3px;
                margin-bottom: 15px;

                padding: 8px 12px 9px 12px;

                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 400;
                font-size: 11px;
                line-height: 13px;

                color: #3D5170;
            }

            .button-str {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                h4 {
                    height: 12px;
                    margin-bottom: 0;
                    color: #007BFF;
                }

                button {
                    width: 110px;
                    height: 29px;

                    background: #007BFF;
                    border: 0.5px solid #007BFF;
                    box-sizing: border-box;
                    border-radius: 4px;

                    font-family: 'Helvetica';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 13px;
                    color: white;
                }
            }
        }
    }

    @media ( max-width: 767px ) {
        .auth-form {
            .auth-card {
                width: 80%;
                height: auto;
            }
        }
    }

    @media ( max-width: 361px ) {
        .auth-form {
            .company-info {
                margin-top: 100px;
            }
        }
    }
</style>
