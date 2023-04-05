import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import { GoogleMaps } from 'vue3-google-maps'

createApp(App)
  .use(router)
  .use(GoogleMaps, {
    key: 'YOUR_API_KEY',
    libraries: ['places'],
  })
  .mount('#app')
