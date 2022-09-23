import { useEffect, useMemo, useState } from 'react'
import { IntroductionInfo, IntroductionGif } from './components'
import AppFooter from '@/components/AppFooter/AppFooter'


import type { RootState,AppDispatch } from '@/store'
import { useSelector,useDispatch } from 'react-redux'
import { getUser } from '@/store/slice/introductionSlice'

import '@/styles/AppIntroduction.css'

/***
 * 个人简介页
 *  */
function AppIntroduction() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user') as string) )

  const dispatch:AppDispatch = useDispatch()
  const {isLoaded,error} = useSelector((state:RootState)=>state.introduction)

  useEffect(()=>{
    let timer = setTimeout(()=>{
      dispatch(getUser())      
    },300)
    return ()=>{
      clearTimeout(timer)
    }
  },[isLoaded]) 
  return (
    <section className="Introduction">
      <article className="Introduction-main">
        <ul className="Introduction-ul">
          <li>
            {/* 用户信息 */}
            <IntroductionInfo isLoaded={isLoaded} datalist={user}/>
          </li>
          <li>
            {/* github 提交记录*/}
            <img src="https://ghchart.rshah.org/63e88e/LinXiuci" />
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
