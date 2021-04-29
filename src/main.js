import Vue from 'vue'
import App from './App.vue'
import router from './views/router'
import store from './plugins/store'

import './assets/styles.scss'
import './assets/media.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
