import React from 'react'
import {JsExample} from 'JsExample'

export const Tip: React.FC = props => {
  return (
    <div style={{textAlign: 'center'}}>
      <div>
        1. 打开vscode的插件, 然后安装推荐插件, 我帮你们选好了
      </div>
      <JsExample/>
    </div>
  )
}