/**
 * 封装返回顶部函数
 *  */
export function setBackToTop(numbertop: number) {
  return scrollTo({
    top: numbertop,
    behavior: "smooth",
  });
}
