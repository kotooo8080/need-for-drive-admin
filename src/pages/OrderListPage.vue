<template>
    <order-surface />
</template>

<script>
import OrderSurface from '@/components/order/OrderSurface.vue'
import { mapActions } from 'vuex';
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    name: 'OrderListPage',
    
    components: {
        OrderSurface,
    },

    async created() {
        this.changeActivePage(2);
        await this.getDataHandler();
    },

    methods: {
        ...mapActions(['getServerData']),
        ...mapState(['orders']),
        ...mapMutations(['changeActivePage']),

        async getDataHandler () {
            const servPath = 'db/order';
            await this.getServerData({ name: servPath, indx: 4 });
        },
    },
}
</script>