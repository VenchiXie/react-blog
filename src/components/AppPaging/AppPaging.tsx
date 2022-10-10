import { setBackToTop } from "@/utils/backToTop";
import "./AppPaging.css";
/***
 * 公共组件 - 分页
 *  */
interface propsType {
  paging: {
    pageSize : number;
    totalPage: number;
    current  : number;
  };
  update: () => void;
}
function AppPaging(props: propsType) {
  const { paging, update } = props;

  // 下一页
  const onNextPage = () => {
    // current 大于等于总页时，结束下一页
    if (paging.current >= paging.totalPage) return;
    paging.current++;
    update(); // 重新渲染
    setBackToTop(0); // 置顶
    localStorage.setItem("current", JSON.stringify(paging.current));
  };

  // 上一页
  const onPrePage = () => {
    // 页数为 1 时 结束上一页
    if (paging.current <= 1) return;
    paging.current--;
    update(); // 重新渲染
    setBackToTop(0); // 置顶
    localStorage.setItem("current", JSON.stringify(paging.current));
  };

  return (
    <section className="App-paging">
      <div className="App-paging-pre" onClick={onPrePage}>
        &lt;
      </div>
      <div className="App-paging-content">
        <span>第&nbsp;{paging.current}&nbsp;页</span>
        <span>共&nbsp;{paging.totalPage}&nbsp;页</span>
      </div>
      <div className="App-paging-next" onClick={onNextPage}>
        &gt;
      </div>
    </section>
  );
}

export default AppPaging;
