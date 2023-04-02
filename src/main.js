import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(router).mount('#app')
