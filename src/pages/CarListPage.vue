<template>
    <car-surface />
</template>

<script>
import CarSurface from '@/components/car/CarSurface.vue'
import { mapActions } from 'vuex';
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    name: 'CarListPage',
    
    components: {
        CarSurface,
    },

    async created() {
        this.changeActivePage(1);
        await this.getDataHandler();
    },

    methods: {
        ...mapActions(['getServerData']),
        ...mapState(['cars']),
        ...mapMutations(['changeActivePage']),

        async getDataHandler () {
            const servPath = 'db/car';
            await this.getServerData({ name: servPath, arrName: 'cars' });
        },
    },
}
</script>