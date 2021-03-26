import {FC} from "react";
import { Form, Input, Button } from 'antd';
import axios from "axios";


type ArticleRes = {
  status: string,
  message: string,
  data: [],
}
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 0 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 0 },
};
const ArticleAdd: FC = () => {

  const onFinish = async (values: any) => {
    let params = new URLSearchParams();
    for(const k in values) {
      params.append(k, values[k]);
    }
    const res = await axios.post<ArticleRes>(`http://localhost:12341/articles`, params);
    console.log('Success:', res);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <>
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
          <Form.Item
              label="title"
              name="article[title]"
              rules={[{ required: true, message: 'Please input title!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
              label="text"
              name="article[text]"
              rules={[{ required: true, message: 'Please input text!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
  );
}

export default ArticleAdd;
