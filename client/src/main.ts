import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// These CSS are trying to mirror the style we use
// import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
