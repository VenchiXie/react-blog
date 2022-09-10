
/***
 * 个人介绍组件
 *  */
export const IntroductionRender = (props: any) => {
  const { globalIndex, introductionText, onNext } = props
  return (
    <article className="Home-introduction">
      {/* 个人简介文本 */}
      <nav className="Home-introduction-text">
        <ul className="Home-introduction-ul">
          {introductionText.map((item: any, index: number) => (
            <li key={item.key} className={globalIndex == index ? 'active' : ''}>
              {item.text}
            </li>
          ))}
        </ul>
        <div className="Home-introduction-text-footer">
          {introductionText.map((item: any, index: number) => (
            <span key={item.key} className={ globalIndex == index ? 'active' : 'Home-introduction-log'}>
              0{item.key} - {item.name}
            </span>
          ))}
          <span className="Home-introduction-text-next" onClick={onNext}>Next</span>
        </div>
      </nav>
      {/* dot */}
      <nav className="Home-introduction-dot">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </nav>
    </article>
  )
}