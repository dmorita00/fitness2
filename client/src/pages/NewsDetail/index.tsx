import {FC} from "react";
import {useParams} from "react-router-dom";
import useNews from "../../hooks/useNews";

const NewsDetail: FC = () => {
  const { newsId } = useParams();
  const { news, isLoading, isError } = useNews(Number(newsId));

  if (isLoading) {
    return <>Loading</>
  }

  if (isError) {
    return <>Error</>
  }

  if (news) {
    return <div>
      ID: {news.id}
      Title: {news.title}
    </div>;
  }

  return null;
}

export default NewsDetail;
