import {FC, useState} from "react";
import useUsers from "../../hooks/useUsers";
import { Link } from 'react-router-dom'
import { Table, Card, Col, Row, Radio } from "antd";
import "antd/dist/antd.css";

const UsersList: FC = () => {
  /* eslint-disable */
  const [sortTarget, setSortTarget] = useState('sys.createdAt');
  const [sortType, setSortType] = useState('desc');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const { data, isFetching, isError } = useUsers({
    sortTarget,
    sortType,
    page,
    pageSize,
  });
  /* eslint-disable */
  const [viewMode, setViewMode] = useState('1');
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
      title: 'BODY',
      dataIndex: 'body',
      key: 'body'
    },
    {
      title: 'CREATEDAT',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
  ];

  if (!data) {
    return <>Loading</>;
  }

  return (
      <>
        <Table dataSource={data} columns={columns} rowKey="id" />
      </>
  );
}

export default UsersList;
