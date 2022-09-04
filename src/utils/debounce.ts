/**
 * @desc 函数防抖
 * @param fu (function) 函数
 * @param delay (number) 延迟执行毫秒数
 */
export function debounce(fn: Function, delay: number) {
  let timeout: any = null
  return function () {
    let context = this
    let args = arguments
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}
