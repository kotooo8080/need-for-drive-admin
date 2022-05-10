<template>
    <point-surface/>
</template>

<script>
import PointSurface from '@/components/point/PointSurface.vue'
import { mapActions } from 'vuex';
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    name: 'PointListPage',

    components: { 
        PointSurface 
    },

    async created() {
        this.changeActivePage(3);
        await this.getDataHandler();
    },

    methods: {
        ...mapActions(['getServerData']),
        ...mapState(['points']),
        ...mapMutations(['changeActivePage']),

        async getDataHandler () {
            const servPath = 'db/point';
            await this.getServerData({ name: servPath, indx: 0 });
        },
    },
}
</script>