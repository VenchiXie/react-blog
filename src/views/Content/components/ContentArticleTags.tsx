import AppIcon from '@/components/AppIcon/AppIcon'

interface propsType {
  tags: {
    isTop: boolean
    start_time: string
    count_time: string
    tags: string
  }
}
/***
 * tags 组件
 *  */
export const ContentArticleTags = (props: propsType) => {
  const { tags } = props

  const elements = [
    {
      key: '1',
      icon: 'calendar-outline',
      tab: <span>发表于&nbsp;{tags.start_time}&nbsp;</span>,
    },
    {
      key: '2',
      icon: 'brush-outline',
      tab: <span>更新于&nbsp;{tags.count_time}&nbsp;天前&nbsp;</span>,
    },
    {
      key: '3',
      icon: 'cube-outline',
      tab: <span>类型&nbsp;&gt;&nbsp;{tags.tags}&nbsp;</span>,
    },
  ]

  return (
    <div className="Content-top-article-tags">
      {tags.isTop ? (
        <span className="Content-article-istop">
          <AppIcon name="star-half-outline" size="small"></AppIcon>
          &nbsp;置顶&nbsp;
        </span>
      ) : (
        ''
      )}

      {elements.map((item) => (
        <p key={item.key} className="Content-article-tabs">
          {item.tab}
        </p>
      ))}
    </div>
  )
}


