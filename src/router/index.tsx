import { Suspense, lazy } from 'react'
import { BrowserRouter, HashRouter , Routes, Route } from 'react-router-dom'
import AppLoading from '@/components/AppLoading/AppLoading'

const App         = lazy(() => import('@/App'))
const AppHome     = lazy(() => import('@/views/Home/AppHome'))
/* 博客栏 */
const AppContent  = lazy(() => import('@/views/Content/AppContent'))
const AppFiling   = lazy(() => import('@/views/Filing/AppFiling'))
/* 影音栏 */
const AppAlbum    = lazy(() => import('@/views/Album/AppAlbum'))
const AppFootmark = lazy(() => import('@/views/Footmark/AppFootmark'))
const AppWuPin    = lazy(() => import('@/views/WuPin/AppWuPin'))
/* 作者栏 */
const AppIntroduction = lazy(() => import('@/views/Introduction/AppIntroduction'))
const AppProject      = lazy(() => import('@/views/Project/AppProject'))
const AppFriend       = lazy(() => import("@/views/Friend/AppFriend"))

/* 404  */
const Exception404    = lazy(() => import('@/views/Exception/Exception404'))

function AppRouter() {
  return (
    <Suspense fallback={<AppLoading />}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<AppHome />}></Route>
            {/* 博客栏 */}
            <Route path = "app_content"  element = {<AppContent />}></Route>
            <Route path = "app_filing"   element = {<AppFiling />}></Route>
            {/* 影音栏 */}
            <Route path = "app_album"    element = {<AppAlbum />}></Route>
            <Route path = "app_footmark" element = {<AppFootmark />}></Route>
            <Route path = "app_wupin"    element = {<AppWuPin />}></Route>
            {/* 作者栏 */}
            <Route path = "app_introduction" element = {<AppIntroduction />}></Route>
            <Route path = "app_project"      element = {<AppProject />}></Route>
            <Route path = "app_friend"       element = {<AppFriend />}></Route>
          </Route>
          <Route path="/*" element={<Exception404 />}></Route>
        </Routes>
      </HashRouter>
    </Suspense>
  )
}

export default AppRouter
