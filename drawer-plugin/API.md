# API Document

|  参数   | 说明  | 类型 | 默认值 |
|  :----  | :----  |  :----  | :----  |
| visible  | Drawer 是否可见 | boolean  | - |
| afterVisibleChange  | 切换抽屉时动画结束后的回调 | function(visible)  | - |
| footer  | 是否显示抽屉页脚 | boolean  | true |
| selector  | 指定 Drawer 挂载的 HTML 节点，false 默认挂载当前 dom | Selectors; false  | - |
| keyboard  | 是否支持键盘 esc 关闭 | boolean  | true |
| mask  | 是否展示遮罩 | boolean  | true |
| maskCloseable  | 点击遮罩是否允许关闭 | boolean  | true |
| title  | 标题 | ReactNode  | - |
| width  | 宽度 | number  | 300 |
| onClose | 点击遮罩层，页脚等触发的回调 | function(e)  | - |
