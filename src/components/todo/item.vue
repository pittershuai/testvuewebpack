<template>
    <!--动态div,此处指的是div动态绑定class，即div的class信息是变化的。
    此处的变化体现在todo.completed上，那为啥他是变化的呢？因为下面使用了v-model进行了model-view的双向绑定（相当于监听，
    当用户在前端view中进行修改的时候，譬如将某项选中（view），会导致todo.completed值得变化（model），然后div的class就变化了）。
    此处的class 可以为 ['todo-item','completed'] 和  ['todo-item','']两种状态。主要是在下面的style中用到（改变字体颜色、画横线）
    -->
    <div :class="['todo-item', todo.completed? 'completed': '']">
        <!--v-model做数据的双向绑定，具体的作用是啥？-->
        <input
            type="checkbox"
            class="toggle"
            v-model="todo.completed"
        >
        <label for="">{{todo.content}}</label>
        <button class="destory" @click="deleteTodo"></button>
    </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo () {
      // 将本组件的时间通知父组件，要在父组件中监听del，使用@del，后面的参数作为监听处理函数的参数
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.todo-item
        position relative
        background-color #fff
        font-size 24px
        border-bottom 1px solid rgba(0,0,0,0.06)
        &:hover
            .destory:after
                content 'x'
        label
            white-space pre-line
            word-break break-all
            padding 15px 60px 15px 15px
            margin-left 45px
            display block
            line-height 1.2
            transition color 0.4s
          /**/
        &.completed
            label
                color #d9d9d9
                text-decoration line-through
    .toggle
        text-align center
        width 50px
        height 30px
        position absolute
        top 0
        bottom 0
        margin auto 0
        border none
        appearance none
        outline none
        &:after
            content url('../../assets/images/unChecked.svg')

        &:checked:after
            content url('../../assets/images/checked.svg')
    .destory
        position absolute
        top 0
        right 10px
        bottom 0
        width 40px
        height 40px
        margin auto 0
        font-size 30px
        color #cc9a9a
        margin-bottom 11px
        transition color 0.2s ease-out
        background-color transparent
        appearance none
        border-width 0
        cursor pointer
        outline none
</style>
