/**
 * @desc 函数防抖
 * @param fn (function) 函数
 * @param delay (number) 延迟执行毫秒数
 */
export function debounce(fn: Function, delay: number) {
  let timer: number | null | undefined = null
  return function () {
    if (timer != null) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, delay)
  }
}
