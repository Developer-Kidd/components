import Vue from 'vue'
import Button from './button'
import Qrcode from './qrcode'

const components = {
  Button,
  Qrcode
}

components.install = () => {
  for (let name in components) {
    Vue.component(components[name].name, components[name]);
  }
};

export default components;
