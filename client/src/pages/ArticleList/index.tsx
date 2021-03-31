import {FC, useState} from "react";
import useArticles from "../../hooks/useArticles";
import { Link } from 'react-router-dom'
import { Table, Card, Col, Row, Radio } from "antd";
import "antd/dist/antd.css";

const ArticlesList: FC = () => {
  /* eslint-disable */
  const [sortTarget, setSortTarget] = useState('sys.createdAt');
  const [sortType, setSortType] = useState('desc');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const { articles, isFetching, isError }: any = useArticles({
    sortTarget,
    sortType,
    page,
    pageSize,
  });

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => (
        <Link to={`/news/${text}`}> {text} </Link>
      )
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'TEXT',
      dataIndex: 'text',
      key: 'text'
    },
    {
      title: 'CREATEDAT',
      dataIndex: 'created_at',
      key: 'created_at',
    },
  ];

  if (!articles) {
    return <>Loading</>;
  }

  return (
      <>
        <Table dataSource={articles.articles} columns={columns} rowKey="id" />
      </>
  );
}

export default ArticlesList;
