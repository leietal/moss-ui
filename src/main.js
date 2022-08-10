import Vue from "vue";
import App from "./App.vue";
// 安装包的方式
// import components from "moss-ui";
// import "moss-ui/lib/components/style/index.less";

// 引入包的方式(css)
// import components from "../lib/moss-ui.umd";
// import "../lib/moss-ui.css";

// 引入包的方式(less)
// import components from "../lib/moss-ui.umd";
// import "../lib/components/style/index.less";

// 引入源文件的方式
import components from "../components";
import "../components/style/index.less";

Vue.config.productionTip = false;

Vue.use(components);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
