<template>
    <div class="real-app">
        <!--虽然调用addTodo后面没有带参数，但默认是带有inputs中的值得-->
        <!--@keyup.enter是事件监听，相对于v-on:keyup.enter="addTodo"-->
        <input
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="接下来做什么"
            @keyup.enter="addTodo"
        >

        <!--v-for直接对函数返回值进行循环-->
        <!--@del="deleteTodo"是监听Item子组件的事件当事件发生时调用相应的方法进行处理-->
        <!--:todo="todo" 是个啥意思？动态绑定？-->
        <Item
            v-for="todo in filterTodos"
            :todo="todo"
            :key="todo.id"
            @del="deleteTodo"
        />

        <!--监听Tabs组件中的事件，当事件发生时调用相应的方法进行处理-->
        <Tabs
            :filter="filter"
            :todos="todos"
            @toggle="toggleFilter"
            @clearAll="clearAllCompletedTodo"
        />
    </div>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
// import { constants } from 'crypto'

let id = 0

export default {
  // 定义数据
  data () {
    return {
      // 返回一个数组
      todos: [],
      // 定义过滤条件
      filter: 'all'
    }
  },
  // 本组件引用的组件
  components: {
    Item,
    Tabs
  },
  // 当依赖的数据（todos、filter）有变化时都会触发计算。
  computed: {
    filterTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      // 这里只是写的简单点了，如果filter为completed，则filterCompleted为true，如果filter为active则filterCompleted为false
      const filterCompleted = this.filter === 'completed'
      return this.todos.filter(todo => todo.completed === filterCompleted)
    }
  },
  // 定义方法
  methods: {
    // 参数是在自动传进来的值
    addTodo (e) {
      // 向数组头部插入一个对象。注意大括号中的是对象。包含id、content、completed三个属性
      this.todos.unshift({
        id: id++,
        content: e.target.value,
        completed: false
      })
      // 添加完后将inputs中的值设为空
      e.target.value = ''
    },
    // 参数是子附件传过来的参数
    deleteTodo (id) {
      // 从数组中删掉指定值，注意函数式编程
      this.todos.splice(this.todos.findIndex(todo => id === todo.id), 1)
    },
    toggleFilter (state) {
      console.log(state)
      this.filter = state
    },
    clearAllCompletedTodo () {
      // 获得todos中的completeed为false的值作为todos的全部新值
      this.todos = this.todos.filter(todo => todo.completed === false)
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666

.add-input
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit
    line-height 1.4em
    border none
    outline none
    color inherit
    box-sizing border-box
    font-smoothing antialiased
    padding 16px 16px 16px 36px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>
