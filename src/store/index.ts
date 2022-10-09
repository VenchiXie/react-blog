import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import homeSlice from './slice/homeSlice'
import introductionSlice from './slice/introductionSlice'
import contentSlice from './slice/contentSlice'
import projectSlice from './slice/projectSlice'
const store = configureStore({
  reducer: {
    home        : homeSlice,
    counter     : counterSlice,
    introduction: introductionSlice,
    content     : contentSlice,
    project     : projectSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
