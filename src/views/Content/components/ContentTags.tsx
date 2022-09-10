/***
 * 标签 组件
 *  */
interface propsType {
  datalist: string[]
  onNavigate: (value: string) => void
}
export const ContentTags = (props: propsType) => {
  const { datalist, onNavigate } = props
  return (
    <nav className="Content-right-tags">
      {datalist.map((item) => (
        <span key={item} onClick={() => onNavigate(item)}>
          {item}
        </span>
      ))}
    </nav>
  )
}
