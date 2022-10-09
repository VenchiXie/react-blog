export const userAPI = {
  author: '林染同学',
  avatar: 'https://cloudbase-baas-4gxsv7qqddb1ffdd-1309232359.tcloudbaseapp.com/logo.jpg',
  introduction: [
    {
      key: '1',
      name: 'info',
      text: `你好！我叫林染，Bug制造功城狮。愿煦日的和风护卫着可爱的你，愿你带着满满的春笑回来。`,
    },
    {
      key: '2',
      name: 'job',
      text: `欢迎各位大佬来查看我的简介和项目。`,
    },
    {
      key: '3',
      name: 'SNS',
      text: `欢迎查阅我的个人笔记`,
    },
    {
      key: '4',
      name: 'last',
      text: `本网站正在建设中，如果发现问题欢迎提交你的反馈信息。`,
    },
  ],
}

localStorage.setItem('user', JSON.stringify(userAPI))
