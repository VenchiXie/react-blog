import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { articleApi } from "@/api/article";
import "./AppSearch.css";

/***
 * 公共组件 - 搜索
 *  */
function AppSearch(props: any) {
  const { searchRef, onCloseSearch } = props;
  const navigate = useNavigate();
  const [datalist, setDataList] = useState<any>([...articleApi]); // 文章数据列表
  const [filterDatalist, setFilterDatalist] = useState<any>([]); // 渲染数据列表

  /**
   * 模糊查询
   *  */
  const handleSearchWordKey = (e: any) => {
    return setTimeout(() => {
      let keyword = e.target.value;
      if (keyword !== "") {
        let data = datalist.filter((item: any) => item.title.includes(keyword));
        setFilterDatalist(data);
      } else {
        setFilterDatalist([]);
      }
    }, 1500);
  };

  const onNavigate = (value: string) => {
    // alert(value)
    alert("无权访问,请联系博主");
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section className="App-search" ref={searchRef}>
      <main className="App-search-container">
        <header className="App-search-header">
          <h3>SEARCH</h3>
          <span onClick={onCloseSearch}>关闭</span>
        </header>
        {/* 搜索input */}
        <article className="App-search-input-container">
          <input type="text" placeholder="请输入内容" onChange={(e) => handleSearchWordKey(e)} />
        </article>
        {/* 模糊搜索列表 */}
        <article className="App-search-datalist">
          {filterDatalist == "" ? (
            "加载中"
          ) : (
            <ul>
              {filterDatalist.map((item: any) => (
                <li key={item.key} onClick={() => onNavigate(item)}>
                  {item.title}
                </li>
              ))}
            </ul>
          )}
          {filterDatalist.length >= 1 ? <footer className="App-search-footer">查询到&nbsp;{filterDatalist.length}&nbsp;条结果</footer> : ""}
        </article>
      </main>
    </section>
  );
}

export default AppSearch;
