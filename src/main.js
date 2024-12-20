
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './styles/index.scss'
import { VueSignaturePad } from 'vue-signature-pad';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("VueSignaturePad", VueSignaturePad);

app.mount('#app')
