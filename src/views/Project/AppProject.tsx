import AppFooter from '@/components/AppFooter/AppFooter'
import AppLoading from '@/components/AppLoading/AppLoading'
import '@/styles/AppProject.css'
import { useRef, useState } from 'react'

/***
 * 个人项目页
 *  */
function AppProject() {
  const div = useRef<HTMLDivElement>(null)
  const [number, setNumber] = useState<number>(10)
  const onRotate = () => {
    if (number <= 0) {
      div.current?.classList.remove('active')
      return alert('没有次数了')
    }
    setNumber((value) => value - 1)
    div.current?.classList.toggle('active')
  }
  return (
    <section className="Project">
      <article className="Project-main">
        <h1>AppProject page</h1>
        <AppLoading></AppLoading>
        <div className="Project-div" ref={div} onClick={onRotate}>
          {number}
        </div>
      </article>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppProject
