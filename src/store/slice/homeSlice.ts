import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface HomeType {
  index: number;
}
const initialState: HomeType = {
  index: 0,
};

const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    // 下一个
    onNext(state, actions: PayloadAction<number>) {
      if (state.index < actions.payload) {
        state.index += 1;
      } else {
        state.index = 0;
      }
    },
    // 点击某个dot显示不同的个人简介
    onNextDot(state, actions: PayloadAction<number>) {
      // 禁止多次点击同一个
      if (actions.payload == state.index) return;
      state.index = actions.payload;
    },
  },
});

export const { onNext, onNextDot } = HomeSlice.actions;
export default HomeSlice.reducer;
