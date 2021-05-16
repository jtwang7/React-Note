import React, { useRef, useState, useEffect } from 'react';
import Drawer from './drawer/Drawer'

export default function Test(props) {
  // button
  let [btnState, setBtn] = useState(false);




  let selector = useRef(null);
  let [dom, setDom] = useState(null);
  // Drawer 需要挂载在 mount-box 上，但是 mount-box 只有在 render() 执行后才完全渲染到 DOM 树，即其 DOM 元素只能在 render() 执行完毕后获取。
  // 该问题通过 useEffect 解决，在 DOM 完成渲染后，通过 React.ref 获取 mount-box 的 DOM 对象，修改 state 后触发重新渲染。
  // 由于 useEffect 会调用在 render 之后，重新渲染之前，因此实际上只会绘制一遍 Drawer。(render 将 React 元素渲染到 DOM 树，还未真正渲染到页面)
  // NOTE: 虽然 React 生命周期是先比较 props 和 state 变化，然后渲染 DOM 的。但是实际上一次循环可以看作是从 render 开始的，它根据上一次的 state 重新渲染 DOM，然后再在 render 之后 setState 设置新的 state 触发下一轮重新渲染。
  // NOTE: state 修改是 React 的“副操作”，它会使组件发生改变，此外数据请求，DOM 修改等一系列可能使 React 组件发生重新渲染的都属于“副操作”，它们均放在 useEffect 中实现。
  useEffect(()=>{
    setDom(selector.current)
  },[selector])
  return (
    <div>
      <div id='main-box'>123</div>
      <button onClick={()=>{setBtn(!btnState);}}>按钮</button>

      <div
        id='mount-box'
        ref={selector}
      ></div>
      <Drawer
        visible={btnState}
        afterVisibleChange={(visible) => { console.log(`1. ${visible}`) }}
        selector={dom}
        title='Drawer Test'
        onClose={(e) => { setBtn(!btnState) }}
      />
    </div>
  )
}