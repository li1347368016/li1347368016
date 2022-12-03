import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './stores'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')
