<template>
    <div class="helper">
        <!--调用函数返回在值的长度作为占位符值-->
        <span class="left">{{this.unfinishedTodo.length}} items left</span>
        <span class="tabs">
            <!--三个span使用循环写出来，定义在states数组中。每个状态都能触发click事件，参数为状态-->
            <!--filter === state ? 'actived': '' 是用在后面style显示上的-->
            <span v-for="state in states" :key="state" :class="[state, filter === state ? 'actived': '']" @click="toggleFilter(state)">
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">Clear Completed</span>
    </div>
</template>

<script>
export default {
  // props属性是父子组件之间的通信桥梁。
  // 处于安全考虑，组件模板里我们无法直接使用父组件的data数据，使用props这个属性可以将父组件的数据传给子组件。
  // 在子组件中对父组件的数据进行处理。父组件的数据通过props传入子组件以后，在子组件中也可对数据进行相关处理，包括计算属性、data属性等。这样当子组件需要对数据进行处理时，避免了直接在父组件中对数据进行操作，而且由于props数据流单向性，在子组件中更改数据时，不会对父组件的数据产生影响。
  // props声明了filter、todos才能在本组件中使用这两个变量
  // 因为本vue文件被todo.vue引用，所以todo.vue作为父组件，其中一定定义了这两个变量。
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  // 定义数据
  data () {
    return {
      // 三种状态
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unfinishedTodo: function () {
      return this.todos.filter(todo => todo.completed === false)
    }
  },
  methods: {
    clearAllCompleted () {
      this.$emit('clearAll')
    },
    toggleFilter (state) {
      // tab作为子组件，将事件通知到父组件中。在父组件中对进行动态改进显示。 ——父子之间的通信
      this.$emit('toggle', state)
    }
  }
}
</script>

<style lang="stylus" scoped>
.helper
    font-weight 100
    display flex
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #ffffff
    font-size 14px
    font-smoothing antialiased
.left, .clear, .tabs
    padding 0 10px
.left .clear
    width 150px
.left
    text-align center
.clear
    text-align right
    cursor pointer
.tabs
    width 200px
    display flex
    justify-content space-between
    *
        display inline-block
        padding 0 10px
        cursor pointer
        border 1px solid rgba(175,47,47,0)
        &.actived
            border-color rgba(175,47,47,0.4)
            border-radius 5px
</style>
