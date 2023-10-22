import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/assets/css/reset.css'
import '../src/assets/css/base.css'
// import './src/assets/css/fonts.css'

createApp(App).use(store).use(router).mount('#app')
