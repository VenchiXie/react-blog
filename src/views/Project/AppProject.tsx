import AppFooter from '@/components/AppFooter/AppFooter'
import AppLoading from '@/components/AppLoading/AppLoading'
import '@/styles/AppProject.css'

/***
 * 个人项目页
 *  */
function AppProject() {
  return (
    <section className="Project">
      <article className="Project-main">
        <h1>AppProject page</h1>
        <AppLoading></AppLoading>
      </article>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppProject
