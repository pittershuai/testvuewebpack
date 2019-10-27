import Vue from 'vue'

new Vue({  //eslint-disable-line
  el: '#app',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>Number: {{number}}</p>
      <p>FullName: {{fullName}}</p>
      <!--将input绑定到number，这样input中输入啥number就同步显示啥。注意当有值改变的话整个应用会重新渲染。-->
      <p><input type="text" v-model="number"></p>
      <p>FirstName: <input type="text" v-model="firstName"></p>
      <p>LastName: <input type="text" v-model="lastName"></p>
      <p>Name: <input type="text" v-model="name"></p>
      <p>Obj.a: <input type="text" v-model="obj.a"></p>
    </div>
  `,
  data: {
    firstName: 'Jokcy',
    lastName: 'Lou',
    number: 0,
    fullName: '',
    obj: {
      a: '123'
    }
  },
  /**
   * computed 与 methods中方法的区别:
   * computed中方法在每次渲染的时候不会重新计算（利用了缓存），在上面number input中输入文字时，控制台并没有打印"new name"
   * methods中方法在每次渲染的时候会重新计算，在FirstName input中输入时控制台会不断的打印"getName invoked"
   * computed多用于显示，并且存在很多不是最终结果的中间结果的情况
   */
  // todo 注意不要在computed或watch中修改监听的值，但可以产生新的值
  computed: {
    // name () {
    //   console.log('new name')
    //   return `${this.firstName} ${this.lastName}`
    // }
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      // 设置值的操作，不推荐使用
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  // 多用于监听到某个数据的变化，然后去做某个操作
  // todo 注意不要在computed或watch中修改监听的值，但可以产生新的值
  watch: {
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true
      // deep: true
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
