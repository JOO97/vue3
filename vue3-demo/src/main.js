import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// app.config.unwrapInjectedRef = true
createApp(App).use(router).mount('#app')
