import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import '@/assets/js/slider-swiper'
// import '@/assets/js/index'
createApp(App).use(router).use(createPinia()).mount('#app')
