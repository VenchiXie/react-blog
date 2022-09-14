import React from 'react'

interface propsType {
  name: string
  color?: string
  size?: string
}
/***
 * @description 公共组件 - icon
 * @param{string} name icon 的名字 
 * @param{number} size icon 的大小 small / large
 * @param{string} color icon 的颜色
 *  */
function AppIcon(props: propsType) {
  const { name, color, size = 'large' } = props
  //
  const element = React.createElement('ion-icon', {
    name : name,
    color: color,
    size : size,
  })
  return <>{element}</>
}

export default AppIcon
