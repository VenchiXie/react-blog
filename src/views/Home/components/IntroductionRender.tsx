const spans = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }]

interface PropsType {
  index: number
  introduction: any
  onNextDisplay: () => void
  getDotAll: (dom: any) => void
}
/***
 * 个人介绍组件
 *  */
export const IntroductionRender = (props: PropsType) => {
  const { index, getDotAll, introduction, onNextDisplay } = props

  return (
    <article className="Home-introduction">
      {/* 个人简介文本 */}
      <nav className="Home-introduction-text">
        <ul className="Home-introduction-ul">
          {introduction.map((item: any, i: number) => (
            <li key={item.key} className={index == i ? 'active' : ''}>
              {item.text}
            </li>
          ))}
        </ul>
        {/* info-next */}
        <div className="Home-introduction-index">
          {introduction.map((item: any, i: number) => (
            <span key={item.key} className={index == i ? 'active' : ''}>
              0{item.key} - {item.name}
            </span>
          ))}
          <span className="Home-introduction-next" onClick={onNextDisplay}>
            Next
          </span>
        </div>
      </nav>
      {/* dot */}
      <nav className="Home-introduction-dot">
        {spans.map((item, i) => (
          <span key={item.key} className={index == i ? 'active' : ''} ref={getDotAll}></span>
        ))}
      </nav>
    </article>
  )
}
