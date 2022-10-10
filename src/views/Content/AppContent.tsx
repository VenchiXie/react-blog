import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContentArticle, ContentSaysay, ContentLatestArticle, ContentTags, ContentFile } from "./components";
import AppPaging from "@/components/AppPaging/AppPaging";
import AppFooter from "@/components/AppFooter/AppFooter";

import type { RootState, AppDispatch } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { getArticle } from "@/store/slice/contentSlice";

import { tagApi } from "@/api/tagApi";
import { articleApi } from "@/api/articleApi";
import "@/styles/AppContent.css";

const paging: any = {
  current: Number(localStorage.getItem("current")) || 1, // 当前的页码
  pageSize : 3,   // 每一页要显示的数据条数
  totalPage: 0,   // 总页数
};
/***
 * 内容页
 *  */
function AppContent() {
  const navigate = useNavigate();
  const onNavigate = (value: string) => {
    // navigate(`/articles/detailed?key=${value}`)
    alert("访问权限已关闭！" + "[/articles/detailed?key=?&title=" + value + "]");
  };

  const dispatch: AppDispatch = useDispatch();
  const { isLoaded, data } = useSelector((state: RootState) => state.content);
  const [datalist, setDatalist] = useState<any>([]); // 文章数据列表
  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(getArticle());
      update();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [isLoaded]);

  /**
   * 根据上下页点击页数的变化而变化
   *  */
  const update = () => {
    // 设置总页数
    paging.totalPage = Math.ceil(articleApi.length / paging.pageSize || 1);
    let before = (paging.current - 1) * paging.pageSize;
    let after = paging.current * paging.pageSize;
    // 分割内容
    setDatalist(articleApi.slice(before, after));
  };
  // const update = () => {
  //   // 设置总页数
  //   paging.totalPage = Math.ceil(data.length / paging.pageSize || 1)
  //   let before = (paging.current - 1) * paging.pageSize
  //   let after = paging.current * paging.pageSize
  //   // 分割内容
  //   setDatalist(data.slice(before, after))
  // }
  return (
    <section className="Content">
      <main className="Content-main">
        {/* 主要内容 */}
        <section className="Content-left">
          {/* 文章列表 */}
          <ContentArticle isLoaded={isLoaded} datalist={datalist} onNavigate={onNavigate} />
          {/* 分页 */}
          <AppPaging paging={paging} update={update}></AppPaging>
        </section>

        {/* 侧边信息 */}
        <section className="Content-right">
          {/* 说说 */}
          <ContentSaysay></ContentSaysay>

          {/* 最近文章 */}
          <ContentLatestArticle datalist={articleApi} onNavigate={onNavigate}></ContentLatestArticle>

          {/* 标签 */}
          <ContentTags datalist={tagApi} onNavigate={onNavigate}></ContentTags>

          {/* 归档 */}
          <ContentFile onNavigate={onNavigate}></ContentFile>
        </section>
      </main>
      <AppFooter></AppFooter>
    </section>
  );
}

export default AppContent;
