import http from "./http";

// 获取用户的个人信息
const getUserApi = async () => http.get('http://localhost:8888/user')

export{
  getUserApi
}