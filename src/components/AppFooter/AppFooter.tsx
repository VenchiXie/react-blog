import { useEffect, useRef, useState } from "react";
import { tabs } from "@/utils/tabs";
import { setBackToTop } from "@/utils/back-to-top";
import "./AppFooter.css";
import { useLocation, useNavigate } from "react-router-dom";

interface PropsType {
  items: {
    name: string;
    sub_tab: (
      | {
          name: string;
          href: string;
          path?: undefined;
        }
      | {
          name: string;
          path: string;
          href?: undefined;
        }
    )[];
  };
  onNavigate: (value: string) => void;
}
/**
 * 底部栏
 *  */
function AppFooter() {
  // const navigate = useNavigate()
  const { pathname } = useLocation();
  const onNavigate = (value: string) => {
    // if (value == pathname) return
    alert("暂未开放");
    // navigate(value)
    // setBackToTop(0)
  };
  return (
    <footer className="App-footer">
      <article className="App-footer-main">
        {/* tabs */}
        <div className="App-footer-tabs">
          {tabs.map((items) => (
            <nav key={items.key}>
              <p className="App-footer-tabs-title">{items.name}</p>
              <ul>
                <AppSubstrRender items={items} onNavigate={onNavigate} />
              </ul>
            </nav>
          ))}
        </div>
        {/* 声明与备案 */}
        <div className="declaration-and-filing">
          <a href="declaration">declaration</a>
          <a href="filing">filing</a>
        </div>
      </article>
    </footer>
  );
}

/* 子列表渲染 */
const AppSubstrRender = (props: PropsType) => {
  const { items, onNavigate } = props;
  return (
    <>
      {items.sub_tab.map((item, index) => (
        <li key={index}>
          {item.href ? (
            <a href={item.href} target="_blank">
              {item.name.length > 6
                ? item.name.substring(0, 5) + "..."
                : item.name}
            </a>
          ) : (
            <p onClick={() => onNavigate(item.path as string)}>{item.name}</p>
          )}
        </li>
      ))}
    </>
  );
};

export default AppFooter;
