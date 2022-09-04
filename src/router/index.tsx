import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = lazy(() => import('@/App'))
const AppHome = lazy(() => import('@/views/Home/AppHome'))
const AppAuthor = lazy(() => import('@/views/Author/AppAuthor'))
const Exception404 = lazy(() => import('@/views/Exception/Exception404'))

function AppRouter() {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<AppHome />}></Route>
            <Route path="app-author" element={<AppAuthor />}></Route>
          </Route>
          <Route path="/*" element={<Exception404 />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter
