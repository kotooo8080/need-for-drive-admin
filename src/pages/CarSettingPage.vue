<template>
    <car-setting-surface />
</template>

<script>
import CarSettingSurface from '@/components/car-setting/CarSettingSurface.vue'
import { mapMutations } from 'vuex'

export default {
    name: 'CarSettingPage',
    
    components: {
        CarSettingSurface,
    },

    async created() {
        this.changeActivePage(0);
    },

    methods: {
        ...mapMutations(['changeActivePage']),
    },
}
</script>