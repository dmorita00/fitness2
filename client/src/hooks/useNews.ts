import { useQuery } from 'react-query';
// import axios from "axios";
// import {News} from "../models/news";

// type NewsRes = {
//   news: News
// }

const useNews = (newsId: number) => {
  const { data, ...rest } = useQuery(['news', newsId], async () => {
    // const res = await axios.get<NewsRes>(`/api/news/${newsId}`);
    // return {
    //   news: res.data.news
    // };
    return new Promise<{
      news: {
        id: number,
        title: string
      }
    }>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          news: {
            id: 1,
            title: 'test'
          }
        });
      }, 1000);
    })
  });
  return {
    news: data?.news,
    ...rest,
  };
};

export default useNews;
