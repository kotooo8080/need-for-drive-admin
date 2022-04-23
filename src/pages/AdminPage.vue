<template>
    <div class="admin-page">
        <auth-form/>
    </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue'
export default {
    name: 'AdminPage',

    components: {
        AuthForm
    }
}
</script>