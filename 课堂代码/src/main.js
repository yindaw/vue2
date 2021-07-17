// 入口模块文件
// 创建vue实例
import Vue from "./vue.browser.js";
import App from "./App.js";
new Vue({
  // render(h) {
  //   return h(App);
  // }
  // render: function(h) {
  //   return h(App);
  // }
  render: h => h(App), // 渲染组件App
}).$mount("#app");