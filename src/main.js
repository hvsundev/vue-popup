import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/popup.js'
import { store } from './store/index.js'
import VModal from 'vue-js-modal'
import VueSession from 'vue-session';

Vue.config.productionTip = false
Vue.use(VModal, { dynamic: true })
Vue.use(VueSession, sessionOptions)

var sessionOptions = {
  persist: true
}

new Vue({
  render: h => h(App),
  router,
  store,
  VModal
}).$mount('#app')
