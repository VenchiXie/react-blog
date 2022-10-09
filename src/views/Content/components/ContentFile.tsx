/***
 * 归档 组件
 *  */
interface PropsType {
  onNavigate: (value: string) => void;
}
export const ContentFile = (props: PropsType) => {
  const { onNavigate } = props;
  return (
    <nav className="Content-right-file">
      <header className="Content-right-header">
        <span>归档</span>
        <span>&gt;</span>
      </header>
      <ul className="Content-right-file-ul">
        <li onClick={() => onNavigate("")}>
          <span>2022</span>
          <span>8</span>
        </li>
        <li onClick={() => onNavigate("")}>
          <span>2021</span>
          <span>2</span>
        </li>
      </ul>
    </nav>
  );
};
