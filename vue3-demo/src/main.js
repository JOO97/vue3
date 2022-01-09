import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

// app.config.unwrapInjectedRef = true
const app = createApp(App)

//自定义指令
import registerDirectives from './views/06_vue_advanced/directives'
registerDirectives(app)

//自定义插件
import pluginObject from './views/06_vue_advanced/plugins/plugins_object'
import pluginFunction from './views/06_vue_advanced/plugins/plugins_function'
app.use(pluginObject)
app.use(pluginFunction)

app.use(router)
app.mount('#app')