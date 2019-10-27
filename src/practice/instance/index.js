import Vue from 'vue'

// 挂载方式一：
// const app = new Vue({
//   el: '#app',
//   template: '<div ref="div">{{text}} {{obj.a}}</div>',
//   data: {
//     text: 0,
//     obj: {}
//   }
// })

// 挂载方式二：
const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#app')

let i = 0
// 由于vue是双向绑定的，所以当值变化的时候显示也会变化，所以能看到页面上值每秒变化一次
setInterval(() => {
  i++
  app.text += 1
  // app.text += 1
  // app.obj.a = i
  app.$set(app.obj, 'a', i) // 修改一个没有初始化的对象中的值
  // app.$forceUpdate()
  // app.$options.data.text += 1
  // app.$data.text += 1
}, 1000)

console.log(app.$data) // new vue对象时传进入的数据
console.log(app.$props)
console.log(app.$el) // html挂载过去的节点
console.log(app.$options) // 创建vue时传进去的整个大括号的部分都是options
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
console.log(app.$root === app) // $root就是vue的根节点（这个节点是挂载到html上的），此处就时app
console.log(app.$children) // 组件
// console.log(app.$slots) // 插槽
// console.log(app.$scopedSlots) // 插槽
// console.log(app.$refs)
// console.log(app.$isServer)

/**
 * vue方法
 */

// 监听值的变化，参数为新值、旧值，与写在vue 定义里的方式是等效的
const unWatch = app.$watch('text', (newText, oldText) => {
  console.log(`${newText} : ${oldText}`)
})
setTimeout(() => {
  unWatch() // 注销watch
}, 5000)
// 监听事件，事件可以被触发多次。可以接收参数
app.$on('test', (a, b) => {
  console.log(`test on emited ${a} ${b}`)
})
// 触发事件，可以传参数
app.$emit('test', 1, 2)

// 事件只会被触发一次
// app.$once('test', (a, b) => {
//   console.log(`test emited ${1} ${b}`)
// })

// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

// app.$forceUpdate() //不推荐使用
