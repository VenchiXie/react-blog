import { useRef } from 'react'
import AppFooter from '@/components/AppFooter/AppFooter'
import AppLoading from '@/components/AppLoading/AppLoading'
import '@/styles/AppContent.css'

/***
 * 内容页
 *  */
function AppContent() {
  return (
    <section className="Content">
      <article className="Content-main">
        <h1>AppContent page</h1>
        <AppLoading></AppLoading>
      </article>

      <AppFooter></AppFooter>
    </section>
  )
}

export default AppContent
