import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './DrawerStyle.css';

export default function Drawer(props) {
  // Drawer Params
  const {
    visible,
    afterVisibleChange,
    selector,
    title,
    onClose,
    width = 300,
    mask = true,
    maskCloseable = true,
    keyboard = true,
    footer = true,
  } = props;

  // min width value
  const containerWidth = width < 300 ? 300 : width;
  /**
   * 1. HOOK 只能在 React 函数组件的最顶层，自定义 HOOK 中调用。
   * 2. 不能再循环，条件或者嵌套函数中调用 HOOK。
   */
  // useRef
  // useRef 在每次渲染时返回同一个 ref 对象, 因此 ref 对象内的 current 属性值保留了之前的更改, 实现了类似闭包的效果。
  const mark = useRef(true);
  // useEffect
  useEffect(() => {
    // 利用 useRef 禁用首次创建组件的 useEffect
    if (mark.current) {
      mark.current = false;
      return;
    } else {
      if (afterVisibleChange) {
        afterVisibleChange.call(this, visible);
      }
    }

    // 每次重新渲染后，将焦点重新聚焦到遮盖层
    keyboardRef.current.focus();
  })

  function close(e) {
    if (onClose) {
      onClose.call(this, e);
    }
  }

  const keyboardRef = useRef(null);
  let elemBody = (
    <>
      {mask && (
        // 遮罩层
        /**
         * 1. 查询键码：[JavaScript Event Keycodes](https://keycode.info/)
         * 2. tabIndex 属性将 div 设置为可聚焦状态：[MDN-tabIndex](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex)
         */
        <div
          id='mask-layer'
          ref={keyboardRef}
          tabIndex= '-1'
          style={{ display: !visible && 'none' }}
          onKeyUp={(e) => { maskCloseable && keyboard && e.code === 'Escape' && close(e); }}
          onClick={(e) => { maskCloseable && close(e) }}
        ></div>
      )}

      <div id='drawer-container' style={{ width: containerWidth, display: !visible && 'none' }}>
        <h1>{title}</h1>

        {props.children}

        <div
          id='footer'
          style={{ display: !footer && 'none' }}
        >
          <a href='javascript:;' onClick={(e) => { close(e) }}>{'>'}</a>
        </div>
      </div>
    </>
  )
  
  return selector ? ReactDOM.createPortal(elemBody, selector) : elemBody;
}