// 全局引element3 组件库和样式
// import element3 from 'element3'
// import 'element3/lib/theme-chalk/index.css'

// 按需引入
import { ElButton, ElInput } from "element3"
import 'element3/lib/theme-chalk/button.css'
import 'element3/lib/theme-chalk/input.css'

export default function(app) {
  // 全局
  // app.use(element3)

  // 按需
  app.use(ElButton).use(ElInput)
}
