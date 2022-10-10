import AppSmallLoading from "@/components/AppLoading/AppSmallLoading";

interface PropsType {
  datalist: {
    key      : string;
    title    : string;
    cover_img: string;
    describe : string;
  }[];
  isLoaded  : boolean;
  onNavigate: (value: string) => void;
}

/***
 * 最新文章组件
 *  */
export const IatestArticleRender = (props: PropsType) => {
  const { datalist, isLoaded, onNavigate } = props;
  const latestArticle = datalist.slice(0, 3); // 最新文章

  return (
    <article className="Home-latest-article">
      <p className="Home-latest-article-title">LATEST ARTICLE</p>
      <ul className="Home-latest-article-ul">
        {latestArticle.map((item) => (
          <li key={item.key} onClick={() => onNavigate(item.title)}>
            {/* 简介截取 */}
            <div className="Home-latest-article-content">{item.describe.substring(0, 25) + "..."}</div>
            {/* 加载封面 */}
            <div className="Home-latest-article-img">
              {isLoaded ? <div style={{ backgroundImage: `URL(${item.cover_img})` }}></div> : <AppSmallLoading></AppSmallLoading>}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
