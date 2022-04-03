<template>
    <div class="auth-form">
        <div class="company-info">
            <svg><use xlink:href="../assets/img/logo.svg#logo-svg"></use></svg>
            <h3>Need for drive</h3>
        </div>
        <div class="auth-card">
            <h3>Вход</h3>
            <h4>Почта</h4>
            <input type="text" placeholder="Введите почту">
            <h4>Пароль</h4>
            <input type="password" placeholder="Введите пароль">
            <div class="button-str">
                <h4>Запросить доступ</h4>
                <button>Войти</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthForm'
}
</script>
