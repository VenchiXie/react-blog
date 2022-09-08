import AppFooter from '@/components/AppFooter/AppFooter'
import AppLoading from '@/components/AppLoading/AppLoading'
import '@/styles/AppFootmark.css'

/***
 * 足迹页
 *  */ 
function AppFootmark() {
  return (
    <section className="Footmark">
      <article className="Footmark-main">
        <h1>AppFootmark page</h1>
        <AppLoading></AppLoading>
      </article>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppFootmark