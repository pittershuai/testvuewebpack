import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // 路径传参
    // path: '/app/:id', // /app/xxx
    path: '/app',
    props: true,
    // props: (route) => ({ id: route.query.b }),
    component: () => import(/* webpackChunkName: "todo-view" */ '../components/todo.vue'),
    // component: Todo,
    // 路由命名，在路由跳转的时候用到
    name: 'app',
    // 保存路由信息（页面原信息）
    meta: {
      title: 'this is app',
      description: 'asdasd'
    },
    // 为单个路由定义钩子
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
    // 嵌套路由——子路由
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login-view" */ '../components/login/login.vue')
    // component: Login
  },
  {
    path: '/info',
    component: () => import('../components/otherpage/info.vue')
  }
]

export default new Router({
  routes: constantRouterMap,
  mode: 'history', // 不写这个配置会出现hash路由，多了个#
  // base: '/base/' // 在所有路径前面加一个base路径。
  // 页面跳转后是否保存上一次页面浏览到的位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
  // 以下不经常使用
  // fallback: true,
  // parseQuery (query) {
  //
  // },
  // stringifyQuery (obj) {
  //
  // }
})
