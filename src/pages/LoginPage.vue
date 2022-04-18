<template>
  <div class="login-page">
    <auth-form />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue'

export default {
    name: 'LoginPage',

    components: {
        AuthForm,
    },
}
</script>

<style lang="scss" scoped>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    background: #F5F6F8;
}
</style>