import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(ant)

Vue.config.productionTip = false

import axios from 'axios'
// 配置请求根路径

axios.defaults.baseURL = ''

// 挂在到Vue实例，后面可通过this调用
Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
