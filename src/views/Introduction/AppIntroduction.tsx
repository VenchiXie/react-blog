import { useState, useEffect } from 'react'
import { IntroductionInfo, IntroductionGif } from './components'
import AppSmallLoading from '@/components/AppLoading/AppSmallLoading'
import AppFooter from '@/components/AppFooter/AppFooter'

import type { RootState } from '@/store'
import { useSelector } from 'react-redux'
import '@/styles/AppIntroduction.css'

/***
 * 个人简介页
 *  */
function AppIntroduction() {
  const user             = JSON.parse(localStorage.getItem('user') as string)
  const {isLoaded,error} = useSelector((state:RootState)=>state.introduction)

  return (
    <section className="Introduction">
      <article className="Introduction-main">
        <ul className="Introduction-ul">
            {/* 用户信息 */}
          <li>
            <IntroductionInfo isLoaded={isLoaded} datalist={user}/>
          </li>
            {/* github 提交记录*/}
          <li>
            <img src="https://ghchart.rshah.org/63e88e/LinXiuci" />
          </li>
            {/* 招呼gif */}
          <li>
            <IntroductionGif></IntroductionGif>
          </li>
          <li><AppSmallLoading/></li>
          <li><AppSmallLoading/></li>
          <li><AppSmallLoading/></li>
        </ul>
        <ul className="Introduction-ul">
          <li><AppSmallLoading/></li>
          <li><AppSmallLoading/></li>
          <li><AppSmallLoading/></li>
        </ul>
      </article>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppIntroduction
