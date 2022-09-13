/***
 * 组件 - 用户信息
 *  */
export const IntroductionInfo = (props: any) => {
  return (
    <nav className="Introduction-info">
      <div className="Introduction-info-header">
        <div className="Introduction-info-img">
          <img src="/src/assets/logo.jpg" />
        </div>
        <div className="Introduction-info-name">
          <p>你好，</p>
          <p>林染同学！</p>
        </div>
      </div>
      <div className="Introduction-info-mid">
        <a href="">
          <p>图1</p>
        </a>
        <a href="">
          <p>图2</p>
        </a>
        <a href="">
          <p>图3</p>
        </a>
        <a href="">
          <p>图4</p>
        </a>
      </div>
      <div className="Introduction-info-bottom"></div>
    </nav>
  )
}
