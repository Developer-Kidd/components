import Vue from 'vue'
import Button from './button'

const components = {
  Button
}

components.install = () => {
  for (let name in components) {
    Vue.component(components[name].name, components[name]);
  }
};

export default components;
