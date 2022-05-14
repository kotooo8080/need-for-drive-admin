<template>
    <rate-surface/>
</template>

<script>
import RateSurface from '@/components/rate/RateSurface.vue';
import { mapActions } from 'vuex';
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    name: 'RateListPage',

    components: {
        RateSurface
    },

    async created() {
        this.changeActivePage(5);
        await this.getDataHandler();
    },

    methods: {
        ...mapActions(['getServerData']),
        ...mapState(['rates']),
        ...mapMutations(['changeActivePage']),

        async getDataHandler () {
            const servPath = 'db/rate';
            await this.getServerData({ name: servPath, arrName: 'rates' });
        },
    },
}
</script>