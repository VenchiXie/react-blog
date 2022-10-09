import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getArticleApi } from "@/api";

export interface ContentType {
  pageSize : number;
  totalPage: number;
  current  : number;
  isLoaded : boolean;
  data     : {
    key       : string | number;
    title     : string;
    isTop     : false;
    start_time: string;
    count_time: string;
    tags      : string;
    cover_img : string;
    describe  : string;
    content   : string;
  }[];
}

const initialState: ContentType = {
  current  : Number(localStorage.getItem("current")) || 1,   // 当前的页码
  pageSize : 2,                                              // 每一页要显示的数据条数
  totalPage: 0,                                              // 总页数
  isLoaded : false,                                          // 是否加载成功
  data     : [] || localStorage.getItem("articles"),
};

// 异步请求文章列表
export const getArticle = createAsyncThunk("content/getArticle", async () => {
  if (localStorage.getItem("articles") != null) return JSON.parse(localStorage.getItem("articles") as string);

  let { data } = await getArticleApi();
  return data;
});

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getArticle.pending, () => {
      console.log("🚀 ~ 进行中！");
    });
    builder.addCase(getArticle.fulfilled, (state, { payload }) => {
      console.log("🚀 ~ 成功");
      state.isLoaded = true;
      state.data = payload;
      localStorage.setItem("articles", JSON.stringify(state.data));
    });
    builder.addCase(getArticle.rejected, (state, error: any) => {
      console.log("🚀 ~ 失败");
      state.isLoaded = true;
    });
  },
});

export const {} = contentSlice.actions;
export default contentSlice.reducer;
