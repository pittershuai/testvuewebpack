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

import createRouter from './router'
import createStore from './store/store'

const store = createStore()
const router = createRouter()

// todo 方式一：这种方式是通过自己创建div节点的方式，然后挂载到该节点上。
// const root = document.createElement('div') // 创建div节点
// document.body.appendChild(root) // 将div节点放在body中
//
// new Vue({
//   render: (h) => h(App) // 得到渲染的内容
// }).$mount(root) // 将模板挂载到div节点

// todo 方式二：通过模板方式,模板就是index.html,在配置文件webpack.dev.conf.js中对这个模板进行了引用。 这种挂载方式是将模板中的id为app的div替换掉
new Vue({ //eslint-disable-line
  el: '#app',
  router,
  store, // 注册在根上，子组件都能拿到
  render: (h) => h(App) // 得到渲染的内容
})

// 路由的全局钩子。只有在执行了next()后才能真正的进行路由跳转
router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})
