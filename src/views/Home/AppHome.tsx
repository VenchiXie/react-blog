import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IntroductionRender, IatestArticleRender } from "./components";
import AppFooter from "@/components/AppFooter/AppFooter";

import type { RootState, AppDispatch } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { onNext, onNextDot } from "@/store/slice/homeSlice";
import { getArticle } from "@/store/slice/contentSlice";
import { articleApi } from "@/api/articleApi";
import "@/styles/AppHome.css";

/**
 * 首页
 *  */
function AppHome() {
  const navigate = useNavigate();
  const onNavigate = (value: string) => {
    // navigate(`/projects/detailed?key=${value}`)
    alert("访问权限已关闭！" + "[/projects/detailed?key=?&title=" + value + "]");
  };

  const dispatch: AppDispatch = useDispatch();
  const { index } = useSelector((state: RootState) => state.home);
  const { introduction } = JSON.parse(localStorage.getItem("user") as string);

  // 下一个 next 显示
  const onNextDisplay = () => {
    dispatch(onNext(introduction.length - 1));
  };

  // 根据 dot 点击显示
  const onNextDotDisplay = (index: number) => {
    dispatch(onNextDot(index));
  };

  // 加载文章列表
  const { isLoaded, data } = useSelector((state: RootState) => state.content);
  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(getArticle());
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [isLoaded]);

  return (
    <section className="Home">
      <main className="Home-main">
        <article className="Home-content">
          <h1>🍪重构中...🍪</h1>
        </article>

        {/* 名称 */}
        <article className="Home-name">
          <span>林</span>
          <span>染</span>
        </article>

        {/* 最新文章 */}
        <IatestArticleRender datalist={articleApi} isLoaded={isLoaded} onNavigate={onNavigate}></IatestArticleRender>
        {/* 个人介绍 */}
        <IntroductionRender
          index={index}
          introduction={introduction}
          onNextDisplay={onNextDisplay}
          onNextDotDisplay={onNextDotDisplay}></IntroductionRender>
      </main>
      <AppFooter></AppFooter>
    </section>
  );
}

export default AppHome;
