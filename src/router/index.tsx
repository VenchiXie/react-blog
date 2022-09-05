import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLoading from '@/components/AppLoading/AppLoading'

const App = lazy(() => import('@/App'))
const AppHome = lazy(() => import('@/views/Home/AppHome'))
const AppAuthor = lazy(() => import('@/views/Author/AppAuthor'))
const AppYingYin = lazy(()=>import('@/views/YingYin/AppYingYin'))
const Exception404 = lazy(() => import('@/views/Exception/Exception404'))

function AppRouter() {
  return (
    <Suspense fallback={<AppLoading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<AppHome />}></Route>
            <Route path="app-author" element={<AppAuthor />}></Route>
            <Route path="app_yingyin" element={<AppYingYin />}></Route>
          </Route>
          <Route path="/*" element={<Exception404 />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter
