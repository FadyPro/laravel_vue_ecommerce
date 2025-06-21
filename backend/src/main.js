import { createApp } from 'vue'
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue' // Changed import
import store from './store'
import router from './router'
import './index.css'
import currencyUSD from './filters/currency.js'
import App from './App.vue'

const app = createApp(App);

app
    .use(store)
    .use(router)
    .use(CkeditorPlugin)
    .mount('#app');

app.config.globalProperties.$filters = {
    currencyUSD
};
