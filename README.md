# 简介
对慕课网项目进行总结分析，加注释。vue+webpack入门。
从项目结构方面看懂本项目需要学习webpack
从内容方面看懂需要学习vue

# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 项目代码分析
## 结构
header.vue footer.vue 没啥东西，只是在App.vue被简单引用。

主要逻辑在todo.vue 、item.vue、tabs.vue中。首先todo.vue是父组件引用了item.vue、tabs.vue。

item.vue中主要是对item选中进行监控（涉及到数据双向绑定，动态div）、删除操作（item的删除交给父组件来处理，涉及到父子组件之间的通信）

tabs.vue主要对'all', 'active', 'completed'三种状态的切换（涉及到v-for），不同状态切换后item显示的变化(变化是通知父组件后，父组件进行控制的)。

todo.vue中有添加操作、响应子组件item.vue的删除操作、响应子组件tabs.vue的切换操作。

- 添加操作：向数组中添加数据。（注意只修改了数据，并没有修改view。这是与以往操作不同的点。）然后通过computed：{}对数据改变进行监控，重新返回添加后的数据集合，然后又通过动态绑定监控到这个集合变化了，然后就显示这个变化了的集合。这样一条数据从添加到显示就完成了。**每一步只做自己的事情，后面的操作监控前边的数据变化，数据变化最终导致显示变化**

## 控制与现实分离













