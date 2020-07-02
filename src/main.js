import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './assets/styles/reset.scss'
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import './assets/styles/styles.scss'
import './assets/styles/bttn.min.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
