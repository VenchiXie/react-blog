interface PropsType {
  datalist: {
    key       : string;
    title     : string;
    start_time: string;
  }[];
  onNavigate: (value: string) => void;
}
/***
 * 组件 - 最近文章
 *  */
export const ContentLatestArticle = (props: PropsType) => {
  const { datalist, onNavigate } = props;
  return (
    <nav className="Content-right-latest-article">
      <header className="Content-right-header">最近文章</header>
      <ul className="Content-right-latest-article-ul">
        {/* 后期将截取 10 ~ 14 个内容渲染 */}
        {datalist.map((item) => (
          <li key={item.key} onClick={() => onNavigate(item.key + item.title)}>
            <h4>{item.title.length > 20 ? item.title.substring(0, 20) + "..." : item.title}</h4>
            <p>{item.start_time}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};
