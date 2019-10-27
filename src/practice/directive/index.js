// 先在chrome中安装vue的插件，才能比较清晰的做下面的实验。vue插件能看到变量的中间变化值的状态。
import Vue from 'vue'

new Vue({   //eslint-disable-line
  el: '#app',
  template: `
    <div>
      <div>Text: {{text}}</div>
      <!--v-show:是否显示这个节点-->
      <div v-show="!active">{{text}}</div>
      <!--v-if:如果判断为false则直接会导致增删节点，会导致dom的重绘、重新排版，性能差！-->
      <div v-if="text === 0">Else Text: {{text}}</div>
      <div v-else>else content</div>
      <!--将html变量的作为标签插入，而不是字符串-->
      <div v-html="html"></div>
      <!--v-model默认只能使用在input事件上-->
      <input text="text" v-model="text">
      <input text="text" v-model.number="text">
      <input text="text" v-model.trim="text">
      <input text="text" v-model.lazy="text">
      <input type="checkbox" v-model="active">
      
      <div>
        <!--使用数据绑定是因为，我们想传进去number类型的值，但我们传的是字符串。通过使用数据绑定vue会将字符串解析为基本类型的值。-->
        <input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="2" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
      </div>
      <div>
        <!--radio是互斥的，所以picked中只有一个值,因为picked是字符串，所以也不能使用上面那种动态绑定的方式-->
        <input type="radio" value="one" v-model="picked">
        <input type="radio" value="two" v-model="picked">
      </div>
      <ul>
      <!--循环列表，注意加key——唯一指定数据-->
        <li v-for="(item) in arr" :key="item">{{item}}</li>
      </ul>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}:{{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj">{{val}}:{{key}}:{{index}}</li>
      </ul>
    </div>
  `,
  data: {
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    picked: '',
    text: 0,
    active: false,
    html: '<span>this is html</span>'
  }
})
