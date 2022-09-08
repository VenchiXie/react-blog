import AppFooter from '@/components/AppFooter/AppFooter'
import AppLoading from '@/components/AppLoading/AppLoading'
import '@/styles/AppIntroduction.css'

/***
 * 个人简介页
 *  */ 
function AppIntroduction() {
  return (
    <section className="Introduction">
      <article className="Introduction-main">
        <h1>author</h1>
        <h1>author</h1>
        <h1>author</h1>
        <AppLoading></AppLoading>
      </article>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppIntroduction