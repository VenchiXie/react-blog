import { useMemo, useState } from 'react'
import { IntroductionInfo, IntroductionGif } from './components'
import AppFooter from '@/components/AppFooter/AppFooter'
import AppLoading from '@/components/AppLoading/AppLoading'

import { avatarAPI } from '@/api/avatarAPI'
import '@/styles/AppIntroduction.css'

/***
 * 个人简介页
 *  */
function AppIntroduction() {
  const [avatar, setAvatar] = useState(
    () => localStorage.getItem('avatar') || avatarAPI
  )
  return (
    <section className="Introduction">
      <article className="Introduction-main">
        <ul className="Introduction-ul">
          <li>
            {/* 用户信息 */}
            <IntroductionInfo avatar={avatar}></IntroductionInfo>
          </li>
          <li>
            {/* github */}
            <AppLoading></AppLoading>
          </li>
          <li>
            {/* 招呼gif */}
            <IntroductionGif></IntroductionGif>
          </li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <ul className="Introduction-ul">
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
      </article>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppIntroduction
