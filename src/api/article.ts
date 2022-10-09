export const articleApi = [
  {
    key: '1',
    title: '我做了一个手写春联小网页，祝大家虎年暴富',
    isTop: true,
    start_time: 'xxxx-01-30',
    count_time: 'xxx',
    tags: '技术',
    cover_img:
      'https://img-blog.csdnimg.cn/img_convert/185c88180b87ac7277072280a0c144ce.png',
    describe:
      '前言 虎年春节快到了，首先祝大家新年快乐，轻松暴富。 最近在网上经常看到生成春联的文章，不过这些小demo要么功能简陋,要么UI特别‘程序员’，满足不了我挑剔的眼光。干脆我自己做一个吧，顺便简单体验一下vite+vue3。（因为页面相对简单，vue组件风格还是使用选项式api，重点还是想把产品快速做出来。）',
    content: '',
  },
  {
    key: '2',
    title: 'new命令原理',
    isTop: false,
    start_time: 'xxxx-09-10',
    count_time: 'x',
    tags: '技术',
    cover_img:
      'https://raw.githubusercontent.com/LinXiuci/image/main/img/40.jpeg',
    describe:
      '使用new命令时，它后面的函数依次执行下面的步骤：创建一个空对象，作为将要返回的实例对象。将这个空对象的原型，指向构造函数的prototype属性。将这个空对象赋值给函数内部的this关键字。开始执行构造函数内部的代码。如果构造函数内有返回值且为对象类型，则返回该对象，否则返回上面创建的实例对象。',
    content:
      '使用new命令时，它后面的函数依次执行下面的步骤：创建一个空对象，作为将要返回的实例对象。将这个空对象的原型，指向构造函数的prototype属性。',
  },
  {
    key: '3',
    title: 'MVVM模式',
    isTop: false,
    start_time: 'xxxx-08-06',
    count_time: 'xx',
    tags: '技术',
    cover_img:
      'https://raw.githubusercontent.com/LinXiuci/image/main/img/41.jpeg',
    describe:
      'MVVM模式，M即 model，数据模型；V即 view，视图；VM即 view-model，视图模型。 理解首先，数据Model通过Data Bindings把数据绑定在View视图上， 当View视图有交互（有改变）的时候，Dom listeners会自动监听，然后更新数据Model。当View视图有交互（有改变）的时候，Dom listeners会自动监听，然后更新数据Model。',
    content:
      'MVVM模式，M即 model，数据模型；V即 view，视图；VM即 view-model，视图模型。 理解首先，数据Model通过Data Bindings把数据绑定在View视图上，',
  },
  {
    key: '4',
    title: '防抖与节流函数',
    isTop: false,
    start_time: 'xxxx-09-10',
    count_time: 'xx',
    tags: '技术',
    cover_img:
      'https://raw.githubusercontent.com/LinXiuci/image/main/img/50.jpeg',
    describe:
      '防抖和节流的作用都是在高频事件中防止函数被多次调用，是一种性能优化的方案。区别在于，防抖函数只会在高频事件结束后n毫秒调用一次函数，节流函数会在高频事件触发过程当中每隔n毫秒调用一次函数。',
    content:
      '#防抖函数 触发高频事件后一段时间（wait）只会执行一次函数，如果指定时间（wait）内高频事件再次被触发，则重新计算时间 #节流函数 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效',
  },
  {
    key: '5',
    title: 'vue双向绑定原理及实现',
    isTop: false,
    start_time: 'xxxx-07-10',
    count_time: 'xx',
    tags: '技术',
    cover_img:
      'https://raw.githubusercontent.com/LinXiuci/image/main/img/51.jpeg',
    describe:
      'Observer是一个数据监听器，其实现核心方法就是Object.defineProperty()。如果要对所有属性都进行监听的话，那么可以通过递归方法遍历所有属性值，并对其进行Object.defineProperty()处理 作者：KlausXu链接：https://www.jianshu.com/p/f194619f6f26 来源：简书著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。',
    content: '',
  },
]
