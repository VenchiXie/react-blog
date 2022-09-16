import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import homeSlice from './slice/homeSlice'
const store = configureStore({
  reducer: {
    home: homeSlice,
    counter: counterSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
