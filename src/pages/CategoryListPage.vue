<template>
    <category-surface/>
</template>

<script>
import CategorySurface from '@/components/category/CategorySurface.vue';
import { mapActions } from 'vuex';
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    name: 'CategoryListPage',

    components: {
        CategorySurface 
    },

    async created() {
        this.changeActivePage(4);
        await this.getDataHandler();
    },

    methods: {
        ...mapActions(['getServerData']),
        ...mapState(['categories']),
        ...mapMutations(['changeActivePage']),

        async getDataHandler () {
            const servPath = 'db/category';
            await this.getServerData({ name: servPath, indx: 1 });
        },
    },
}
</script>