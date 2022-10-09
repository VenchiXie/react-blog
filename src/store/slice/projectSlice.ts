import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getProjectApi } from "@/api";

interface ProjectType {
  isLoaded: boolean;
  data    : {
    key        : number;
    title      : string;
    cover_img  : string;
    tags       : string[];
    create_time: string;
    updata_time: string;
  }[];
}

const initialState: ProjectType = {
  isLoaded: false,
  data: [],
};

export const getProject = createAsyncThunk("project/getProject", async () => {
  if (localStorage.getItem("projects") != null) return JSON.parse(localStorage.getItem("projects") as string);

  let { data } = await getProjectApi();
  return data;
});

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProject.pending, () => {
      console.log("🚀 ~ 进行中！");
    });
    builder.addCase(getProject.fulfilled, (state, { payload }) => {
      console.log("🚀 ~ 成功");
      state.isLoaded = true;
      state.data = payload;
      localStorage.setItem("articles", JSON.stringify(state.data));
    });
    builder.addCase(getProject.rejected, (state, error: any) => {
      console.log("🚀 ~ 失败");
      state.isLoaded = true;
    });
  },
});

export const {} = projectSlice.actions;
export default projectSlice.reducer;
