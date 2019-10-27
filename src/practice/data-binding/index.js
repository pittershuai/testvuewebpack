import Vue from 'vue'

// eslint-disable-line可以让一些eslint的报错失效，譬如下面，否则会报错说这个vue对象没有使用
new Vue({  //eslint-disable-line
  template: `
    <!--绑定使用: 此时aaa是一个变量了，要在data中声明-->  
    <div :id="aaa" 
         :class="[{ active: isActive }]"
         :style="[styles, styles2]"> 
      <!-- 插入data中的html，将其转换为真正的html-->  
      <p v-html="html"></p>
      <p @click="handleClick">{{getJoinedArr(arr)}}  点击我</p>
    </div>
  `,
  el: '#app',
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main',
    styles: {
      color: 'red',
      appearance: 'none'
    },
    styles2: {
      color: 'black'
    }
  },
  methods: {
    handleClick () {
      alert('clicked') // eslint-disable-line
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
