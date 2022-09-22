import { useEffect } from 'react'
import AppFooter from '@/components/AppFooter/AppFooter'
import AppLoading from '@/components/AppLoading/AppLoading'

import type { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
} from '@/store/slice/counterSlice'
// import {} from ''
import '@/styles/AppAlbum.css'

/***
 * 相册页
 *  */
function AppAlbum() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <section className="Album">
      <article className="Album-main">
        <h1>AppAlbum page</h1>
        <AppLoading></AppLoading>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </article>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppAlbum
