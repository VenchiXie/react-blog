import AppIcon from "@/components/AppIcon/AppIcon";

interface PropsType {
  tags: {
    isTop     : boolean;
    create_time: string;
    count_time: string;
    tags      : string;
  };
}
/***
 * tags 组件
 *  */
export const ContentArticleTags = (props: PropsType) => {
  const { tags } = props;

  const elements = [
    {
      key: "1",
      tab: <span>发表于&nbsp;{tags.create_time}&nbsp;</span>,
    },
    {
      key: "2",
      tab: <span>更新于&nbsp;{tags.count_time}&nbsp;天前&nbsp;</span>,
    },
    {
      key: "3",
      tab: <span>类型&nbsp;&gt;&nbsp;{tags.tags}&nbsp;</span>,
    },
  ];

  return (
    <div className="Content-article-tags">
      {tags.isTop ? (
        <span className="Content-article-istop">
          <AppIcon name="star-half-outline" size="small"></AppIcon>
          &nbsp;置顶&nbsp;
        </span>
      ) : (
        ""
      )}

      {elements.map((item) => (
        <p key={item.key} className="Content-article-tabs">
          {item.tab}
        </p>
      ))}
    </div>
  );
};
