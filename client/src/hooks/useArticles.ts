import { useQuery } from 'react-query';
import {Article} from "../models/article";
import axios from "axios";

type ArticlesReq = {
  sortTarget: string;
  sortType: string;
  page: number;
  pageSize: number;
}

type ArticlesRes = {
  total: number;
  articles: Article[]
}

const useArticles = (req: ArticlesReq) => {

  const { data, ...rest } = useQuery(['articles'], async () => {
    const res = await axios.get<ArticlesRes>(`http://localhost:12341/article`, {});
    return {
      articles: res.data
    };
  });

  return {
    articles: data?.articles,
    ...rest,
  };
};

export default useArticles;
