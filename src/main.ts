import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
//引入自定义插件对象，注册项目全局组件
import globalComponent from '@/components'
//引入路由
import router from './router'

/* //引入仓库
import pinia from './store'
 */

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
//安装自定义插件
app.use(globalComponent)

/* 
//安装仓库
app.use(pinia)
 */
//注册模板路由
app.use(router)

app.mount('#app')
