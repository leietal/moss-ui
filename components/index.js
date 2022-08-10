import * as components from "./components";
import "./style/index.less";

const _components = Object.values(components);

function install(Vue) {
  _components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

export default {
  install,
};
