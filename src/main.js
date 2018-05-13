import Vue from 'vue'
import App from './App.vue'

import VUi from './index'

Vue.use(VUi);

new Vue({
  el: '#app',
  render: h => h(App)
})
