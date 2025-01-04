import { createApp } from 'vue'

import './styles/tailwind.css'
import './styles/index.scss'
import './styles/theme/default.scss'

import router from './router'

import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
