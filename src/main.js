import './assets/main.css'
import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as nl from './locales/nl.json'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    // something vue-i18n options here ...
    locale: 'nl',
    messages: {
        en: {
            message: {
                hello: 'hello world'
            }
        },
        nl: {
                ...nl
            },
    }
  })

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
