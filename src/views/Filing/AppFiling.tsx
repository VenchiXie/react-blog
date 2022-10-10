import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppSmallLoading from "@/components/AppLoading/AppSmallLoading";
import AppFooter from "@/components/AppFooter/AppFooter";

import type { RootState, AppDispatch } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { getAllTags } from "@/store/slice/filingSlice";
import { tagApi } from "@/api/tagApi";
import "@/styles/AppFiling.css";

/***
 * 归档页
 *  */
function AppFiling() {
  const navigate = useNavigate();
  const onNavigate = (value: string) => {
    // navigate(`/tags/detailed?key=${value}`)
    alert("访问权限已关闭！" + "[/tags/detailed?key=?&title=" + value + "]");
  };

  const dispatch: AppDispatch = useDispatch();
  const { isLoaded, data } = useSelector((state: RootState) => state.filing);
  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(getAllTags());
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [isLoaded]);

  return (
    <section className="Filing">
      <main className="Filing-main">
        {/* tags all */}
        <article className="Filing-tags">
          {isLoaded ? (
            <>
              {tagApi.map((item) => (
                <span className="Filing-tags-item" key={item.key} onClick={() => onNavigate(item.title)}>
                  {item.title}
                </span>
              ))}
            </>
          ) : (
            <AppSmallLoading></AppSmallLoading>
          )}
        </article>
      </main>
      <AppFooter></AppFooter>
    </section>
  );
}

export default AppFiling;
