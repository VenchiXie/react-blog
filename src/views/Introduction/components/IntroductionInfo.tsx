import AppIcon from '@/components/AppIcon/AppIcon'

const contacts = [
  {
    key: '1',
    name: '哔哩哔哩',
    link: 'https://www.bilibili.com/',
    icon: 'logo-twitch',
  },
  { key: '2', name: 'WeChat', link: '#', icon: 'logo-wechat' },
  { key: '3', name: 'QQ', link: '#', icon: 'logo-snapchat' },
  {
    key: '4',
    name: 'GitHub',
    link: 'https://github.com/LinXiuci',
    icon: 'logo-octocat',
  },
]
interface propsType {
  avatar: string
}
/***
 * 组件 - 用户信息
 *  */
export const IntroductionInfo = (props: propsType) => {
  const { avatar } = props
  return (
    <nav className="Introduction-info">
      <div className="Introduction-info-header">
        <div className="Introduction-info-img">
          <img src={avatar} />
        </div>
        <div className="Introduction-info-name">
          <p>你好，</p>
          <p>林染同学！</p>
        </div>
      </div>
      <div className="Introduction-info-mid">
        {contacts.map((item) => (
          <a href={item.link} key={item.key} target="_blank">
            <span>
              <AppIcon name={item.icon}></AppIcon>
            </span>
            <span>{item.name}</span>
          </a>
        ))}
      </div>
      <div className="Introduction-info-bottom"></div>
    </nav>
  )
}
