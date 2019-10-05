// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

import Vue from 'vue'
import App from './app.vue'

// import './assets/styles/test.css';
import './assets/styles/style.styl'
import './assets/styles/global.styl'

const root = document.createElement('div') // 创建div节点
document.body.appendChild(root) // 将div节点放在body中

new Vue({
  render: (h) => h(App) // 得到渲染的内容
}).$mount(root) // 将模板挂载到div节点
