import { useEffect, useRef } from "react";
import { setBackToTop } from "@/utils/back-to-top";
import { debounce } from "@/utils/debounce";
import "./AppSide.css";

/**
 *
 *  */
function AppSide() {
  const body = document.body;
  // 主题变量
  const themeModeRef = useRef<HTMLDivElement>(null);
  // 主题名称
  const themeNameRef = useRef<HTMLParagraphElement>(null);

  // 主题模式的切换
  const handleThemeMode = () => {
    if (body.getAttribute("theme-mode") == "dark") {
      body.setAttribute("theme-mode", "light");
      themeNameRef.current!.innerHTML = "至夜";
    } else {
      body.setAttribute("theme-mode", "dark");
      themeNameRef.current!.innerHTML = "白光";
    }
    localStorage.setItem("theme-name", themeNameRef.current!.innerHTML);
    localStorage.setItem("theme-mode", body.getAttribute("theme-mode") as string);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      const themeMode = localStorage.getItem("theme-mode");
      if (themeMode) {
        body.setAttribute("theme-mode", themeMode);
      }
      themeModeRef.current?.addEventListener("click", handleThemeMode);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    return () => {
      themeModeRef.current?.removeEventListener("click", handleThemeMode);
    };
  }, []);

  // 侧边功能类
  const appSideRef = useRef<HTMLElement>(null);
  /**
   * 此函数的功能:
   * 1.当滚动的高度 < 20 时，则隐藏边侧小工具; 反之，当滚动的高度 > 20 时，则显示边侧小工具。
   * 2.使用防抖限制滚动条的频率。
   *  */
  const scrollTopListener = () => {
    const scrollTop = body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop < 20) {
      appSideRef.current?.classList.remove("AppSide-active");
    } else {
      appSideRef.current?.classList.add("AppSide-active");
    }
  };
  // 启动监听
  useEffect(() => {
    let timer = setTimeout(() => {
      window.addEventListener("scroll", debounce(scrollTopListener, 300));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);
  // 销毁监听
  useEffect(() => {
    return () => window.removeEventListener("scroll", debounce(scrollTopListener, 300));
  }, []);

  return (
    <section className="AppSide" ref={appSideRef}>
      <div ref={themeModeRef}>
        <p ref={themeNameRef}>{localStorage.getItem("theme-name") == themeNameRef.current?.innerHTML ? "至夜" : "白光"}</p>
      </div>
      <div onClick={() => setBackToTop(0)}>top</div>
    </section>
  );
}

export default AppSide;
