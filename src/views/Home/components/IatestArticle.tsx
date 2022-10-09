import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppSmallLoading from "@/components/AppLoading/AppSmallLoading";

/***
 * 最新文章组件
 *  */
interface propsType {
  datalist: {
    key: string;
    title: string;
    cover_img: string;
    describe: string;
  }[];
}
export const IatestArticleRender = (props: propsType) => {
  const { datalist } = props;
  // const navigate = useNavigate();
  const latestArticle = datalist.slice(0, 3); // 最新文章
  const onNavigate = (value: string) => {
    // navigate()
    alert("无权访问,请联系博主");
  };

  return (
    <article className="Home-latest-article">
      <p className="Home-latest-article-title">LATEST ARTICLE</p>
      <ul className="Home-latest-article-ul">
        {latestArticle.map((item) => (
          <li key={item.key} onClick={() => onNavigate(item.key + item.title)}>
            <div className="Home-latest-article-content">
              {item.describe.substring(0, 25) + "..."}
            </div>
            <div className="Home-latest-article-img">
              {item.cover_img ? (
                <div style={{ backgroundImage: `URL(${item.cover_img})`}} ></div>
                ) : (
                <AppSmallLoading></AppSmallLoading>
              )}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
