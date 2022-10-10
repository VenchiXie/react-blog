/***
 * 组件 - 标签
 *  */
interface PropsType {
  datalist: {
    key  : number;
    title: string;
  }[];
  onNavigate: (value: string) => void;
}
export const ContentTags = (props: PropsType) => {
  const { datalist, onNavigate } = props;
  return (
    <nav className="Content-right-tags">
      {datalist.map((item) => (
        <span key={item.key} onClick={() => onNavigate(item.title)}>
          {item.title}
        </span>
      ))}
    </nav>
  );
};
