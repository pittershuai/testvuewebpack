<template>
  <!--template下必须只有一个唯一的节点，其他节点包裹在这个节点下-->
  <div id="app">
    <!--使用在js中声明的组件-->
    <Header></Header>
    <!--<Todo></Todo>-->
    <!--为了走路由-->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
// 引入组件
import Header from './components/header.vue'
import Footer from './components/footer'
import Todo from './components/todo.vue'

export default {
  // 声明使用组件，然后在template中就可以使用了
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>
<!--lang="stylus"指定css处理器， scoped意思是只在这个组件内生效-->
<style lang="stylus" scoped>
  #app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    #cover
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      background-color #999
      opacity 0.2
      z-index -1
</style>
