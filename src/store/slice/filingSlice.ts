import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAllTagsApi } from "@/api";

export interface FilingSliceType {
  data: {
    key  : string | number;
    title: string;
  }[];
  isLoaded: boolean;
}

const initialState: FilingSliceType = {
  data    : [],
  isLoaded: false,
};

// 异步请求所有 tags
export const getAllTags = createAsyncThunk("filingSlice/getAllTags", async () => {
  if (localStorage.getItem("tags") != null) return JSON.parse(localStorage.getItem("tags") as string);

  let { data } = await getAllTagsApi();
  return data;
});

/***
 * 归档页的store
 *  */
const filingSlice = createSlice({
  name: "filingSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllTags.pending, () => {
      console.log("🚀 ~ 进行中！");
    });
    builder.addCase(getAllTags.fulfilled, (state, { payload }) => {
      console.log("🚀 ~ 成功");
      state.isLoaded = true;
      state.data = payload;
      localStorage.setItem("tags", JSON.stringify(state.data));
    });
    builder.addCase(getAllTags.rejected, (state, error: any) => {
      console.log("🚀 ~ 失败");
      state.isLoaded = true;
    });
  },
});

export const {} = filingSlice.actions;
export default filingSlice.reducer;
