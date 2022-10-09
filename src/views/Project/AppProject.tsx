import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppSmallLoading from "@/components/AppLoading/AppSmallLoading";
import AppFooter from "@/components/AppFooter/AppFooter";

import type { RootState, AppDispatch } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { getProject } from "@/store/slice/projectSlice";

import { projectAPI, moreProjects } from "@/api/projectAPI";
import "@/styles/AppProject.css";

/***
 * 个人项目页
 *  */
function AppProject() {
  const navigate = useNavigate();
  const onNavigate = (value: string) => {
    // navigate(`/projects/detailed?key=${value}`)
    alert("访问权限已关闭！" + "[/projects/detailed?key=?&title=" + value + "]");
  };

  const { isLoaded, data } = useSelector((state: RootState) => state.project);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(getProject());
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [isLoaded]);
  return (
    <section className="Project">
      <main className="Project-main">
        {/* 横幅 */}
        <section className="Project-banner">
          {projectAPI.map((item) => (
            <article className="Project-banner-item" key={item.key}>
              {isLoaded ? <div style={{ backgroundImage: `URL(${item.cover_img})` }}></div> : <AppSmallLoading></AppSmallLoading>}
              <div className="Project-banner-item-info">
                {/* tags */}
                <p className="Project-banner-item-tags">
                  <span>项目</span>
                  {item.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </p>
                {/* 标题长度截取 */}
                {item.title.length > 25 ? (
                  <p className="Project-banner-item-title" onClick={() => onNavigate(item.title)}>
                    {item.title.substring(0, 25) + "..."}
                  </p>
                ) : (
                  <p className="Project-banner-item-title" onClick={() => onNavigate(item.title)}>
                    {item.title}
                  </p>
                )}
                {/* time */}
                <span className="Project-banner-item-time">{item.create_time}</span>
              </div>
            </article>
          ))}
        </section>

        {/* More Project */}
        <section className="Project-more">
          <nav className="Project-more-nav">
            <aside className="Project-more-nav-left">More Projects</aside>
            <aside className="Project-more-nav-right">
              <div>所有项目</div>
              <div>应用开发</div>
              <div>其它项目</div>
            </aside>
          </nav>
          {/* 内容 */}
          <article className="Project-more-container">
            {moreProjects.map((item) => (
              <nav className="Project-more-item" key={item.key}>
                {/* 封面图片 */}
                <div className="Project-modre-item-cover">
                  {isLoaded ? (
                    <>
                      <div style={{ backgroundImage: `URL(${item.cover_img})` }}></div>
                      {item.tags.map((tag, index) => (
                        <span className="Project-modre-item-tags" key={index}>
                          {tag}
                        </span>
                      ))}
                    </>
                  ) : (
                    <AppSmallLoading></AppSmallLoading>
                  )}
                </div>
                {/* 项目信息 */}
                <div className="Project-more-item-info">
                  <p onClick={() => onNavigate(item.title)}>{item.title}</p>
                  <span>{item.create_time}</span>
                </div>
              </nav>
            ))}
          </article>
        </section>
      </main>
      <AppFooter></AppFooter>
    </section>
  );
}

export default AppProject;
