import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/tailwind.pcss'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
