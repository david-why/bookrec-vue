import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import data from './data'

const i18n = createI18n({
  legacy: false,
  locale: window.navigator && window.navigator.language.substring(0, 2),
  fallbackLocale: 'en',
  messages: data.messages
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
