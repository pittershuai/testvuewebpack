import Vue from 'vue'
// 定义组件对象
const compoent = {
  // 定义了该组件在被外部使用时可变的行为。
  // 理解：组价是为了重用，解决一类问题。但不同地方使用同一个组件肯定是有差异的，这些差异就通过props配置产生
  props: {
    active: {
      // type: Boolean,
      // required: true,
      validator (value) {
        return typeof value === 'boolean'
      }
    },
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// 全局注册组件——注册组件名为CompOne，与compoent对象相关联
// 注意组件可以被看为是一个类，所以首字母大写，但在使用组件的时候要使用小写，并且单词之间使用横线分隔。（规定）
// Vue.component('CompOne', compoent)

new Vue({ //eslint-disable-line
  // 只在当前vue中注册这个组件，使用key-value的形式
  components: {
    CompOne: compoent
  },
  data: {
    prop1: 'text1'
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  el: '#app',
  template: `
    <div>
    <!--:active使用数据绑定是因为：我们想传入boolean类型，但我们传入的是字符串类型。通过加数据绑定vue就会自动去解析成基本类型-->
      <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="false" propOne="text2"></comp-one>
    </div>
  `
})
