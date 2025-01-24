import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from "./router"
import { createHead } from '@vueuse/head'
const app = createApp(App)

app.use(createHead())
app.use(router)

app.mount('#app')

