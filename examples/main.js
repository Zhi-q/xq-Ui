import Vue from 'vue'
import App from './App.vue'
import Xq from '../packages/index.js'
Vue.config.productionTip = false
Vue.use(Xq)
new Vue({
  render: h => h(App)
}).$mount('#app')
