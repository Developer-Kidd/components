import Vue from 'vue'
import Qrcode from './src/qrcode.vue'

Qrcode.install = function (Vue) {
  Vue.component(Qrcode.name, Qrcode)
}
export default Qrcode
