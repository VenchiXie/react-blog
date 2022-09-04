import { useState, useEffect, useRef } from 'react'
import AppFooter from '@/components/AppFooter/AppFooter'
import '@/styles/AppHome.css'
/**
 * 首页
 *  */
function AppHome() {
  const homeBackgroundRef = useRef<HTMLInputElement>(null)
  // const [homeBackground, setHomeBackground] = useState<string>('/src/assets/background.jpg')
  useEffect(()=>{
    
  },[])
  return (
    <section className="Home" ref={homeBackgroundRef}>
      <main className="Home-main"></main>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppHome
