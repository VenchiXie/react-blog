import AppFooter from '@/components/AppFooter/AppFooter'
import AppLoading from '@/components/AppLoading/AppLoading'
import '@/styles/AppAlbum.css'

/***
 * 相册页
 *  */ 
function AppAlbum() {
  return (
    <section className="Album">
      <article className="Album-main">
        <h1>AppAlbum page</h1>
        <AppLoading></AppLoading>
      </article>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppAlbum