import Vue from 'vue'
import inherit from './utils/inherit'
import Ctrl from './utils/createCtrl'

import ctrls from './ctrls'
import App from './components/App'

Vue.use(inherit('ctrl', '$ctrl'))

window.app = new Vue({
  el: '#app',
  ctrl: new Ctrl(ctrls),
  render: h => h(App),
})
