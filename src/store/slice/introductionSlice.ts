import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getUserApi } from '@/api'

export interface IntroductionType {
  isLoaded: boolean
  error?: any
  datalist: {
    author: string
    avatar: string
    introduction: {
      key: string
      name: string
      text: string
    }[]
  }
}
const initialState: IntroductionType = {
  isLoaded: false,
  error: undefined,
  datalist: {
    author: '',
    avatar: '',
    introduction: [],
  },
}

export const getUser = createAsyncThunk('introduction/getUser', async () => {
  if (localStorage.getItem('user') != null) return JSON.parse(localStorage.getItem('user') as string)
  const { data } = await getUserApi()
  return data
})

const introductionSlice = createSlice({
  name: 'introduction',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUser.pending, () => {
      // console.log('🚀 ~ 进行中！')
    })
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      // console.log('🚀 ~ 成功')
      state.isLoaded = true
      state.datalist = payload
      localStorage.setItem('user', JSON.stringify(state.datalist))
    })
    builder.addCase(getUser.rejected, (state, error: any) => {
      // console.log('🚀 ~ 失败')
      state.isLoaded = true
      state.error = error.message
    })
  },
})

export const {} = introductionSlice.actions
export default introductionSlice.reducer
