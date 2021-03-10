import {FC, useState} from "react";
import useNewses from "../../hooks/useNewses";
import { Link } from 'react-router-dom'
import { Table, Card, Col, Row, Radio } from "antd";
import "antd/dist/antd.css";

const NewsList: FC = () => {
  /* eslint-disable */
  const [sortTarget, setSortTarget] = useState('sys.createdAt');
  const [sortType, setSortType] = useState('desc');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const { newses, total, isFetching, isError } = useNewses({
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
  const radioOptions = [
    { label: 'Card', value: '1' },
    { label: 'Table', value: '2' },
  ];
  const onChangeRadio = (e: any) => {
    setViewMode(e.target.value);
  };

  if (!total || !newses) {
    return <>Loading</>;
  }

  if (viewMode === '1') {
    return (
      <>
        <Radio.Group
          options={radioOptions}
          onChange={onChangeRadio}
          value={viewMode}
          optionType="button"
        />
        <Row gutter={16}>
          {newses.map((news, i) => {
            return (
              <Col span={8}>
                <Card key={i} title={news.title} extra={<Link to={`/news/${news.id}`}>detail</Link>}>
                  <small>{news.createdAt}</small>
                  <div dangerouslySetInnerHTML={{__html: news.body}} style={{height: '400px', overflowY: "scroll"}}></div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Radio.Group
          options={radioOptions}
          onChange={onChangeRadio}
          value={viewMode}
          optionType="button"
        />
        <Table dataSource={newses} columns={columns} rowKey="id" />
      </>
    );
  }
}

export default NewsList;
