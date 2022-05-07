<template>
    <svg class="v-icon">
        <use :xlink:href="require('@/assets/img/sprite.svg') + iconPath"></use>
    </svg>
</template>

<script>
export default {
    name: 'VIcon',

    props: {
        iconPath: String
    }
}
</script>
