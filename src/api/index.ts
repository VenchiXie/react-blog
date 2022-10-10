import http from "./http";

// 获取用户的个人信息
const getUserApi = async () => http.get("http://localhost:8888/user");

// 按分页获取文章列表
const getArticleApi = async () => http.get("http://localhost:8888/articles");

// 获取 banner 项目
const getProjectApi = async () => http.get("http://localhost:8888/projects");

// 获取所有标签
const getAllTagsApi = async () => http.get("http://localhost:8888/tags");

export { getUserApi, getArticleApi, getProjectApi, getAllTagsApi };
