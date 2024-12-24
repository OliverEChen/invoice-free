
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store';
import { VueSignaturePad } from 'vue-signature-pad';
import './styles/index.scss'
import './permission.js'


const app = createApp(App)

app.component("VueSignaturePad", VueSignaturePad);
app.use(pinia)
app.use(router)
app.mount('#app')
