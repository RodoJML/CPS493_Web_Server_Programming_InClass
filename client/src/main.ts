import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// These CSS are trying to mirror the style we use
import './assets/main.css'
// bulma could be imported here, but instead we did it from main.css

const app = createApp(App)

app.use(router)

app.mount('#app')
