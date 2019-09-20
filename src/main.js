import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// app.js
import BootstrapVue from 'bootstrap-vue'
import './custom.scss'

import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'
import '@fortawesome/fontawesome-free/scss/brands.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')

Vue.use(BootstrapVue)
