import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store.js'
import '@/assets/style/style.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App).use(router).use(store)
app.use(VueAxios, axios)
app.mount('#app')


