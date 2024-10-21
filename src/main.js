import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'
import i18n from '../lang'

export const app = createApp(App)

app.use(i18n)

app.mount('#app')