import AppFooter from '@/components/AppFooter/AppFooter'
import AppLoading from '@/components/AppLoading/AppLoading'
import '@/styles/AppWuPin.css'

/***
 * 物品页
 *  */ 
function AppWuPin() {
  return (
    <section className="WuPin">
      <article className="WuPin-main">
        <h1>AppWuPin page</h1>
        <AppLoading></AppLoading>
      </article>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppWuPin