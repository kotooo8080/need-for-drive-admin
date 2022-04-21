<template>
    <div class="auth-layout">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AuthLayout',
}
</script>

<style lang="scss" scoped>
    .auth-layout {
        height: 100%;
    }
</style>
