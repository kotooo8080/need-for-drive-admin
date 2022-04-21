<template>
    <div class="login-page">
        <auth-form />
    </div>
</template>

<script>
import AuthForm from '@/components/auth/AuthForm.vue'

export default {
    name: 'LoginPage',

    components: {
        AuthForm,
    },
}
</script>

<style lang="scss" scoped>
    @import '/src/assets/style/colors.scss';

    .login-page {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 100%;
        background: $content-background-white;
    }
</style>