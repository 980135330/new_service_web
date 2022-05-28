import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)

app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$http = axios
app.mount('#app')


