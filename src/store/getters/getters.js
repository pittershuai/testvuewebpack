// 可以理解为computed。直接获得的数组不能用于我们数据的显示需要进行组装数据。
// 我们当然可以将computed放到不同的组件里，但当多个组件使用相同的computed时就出现了代码重复的问题，所以放到sore中，所有组件都能拿到这个computed。
export default {
  fullName (state) {
    return `${state.firstName} 123 ${state.lastName}`
  }
}
