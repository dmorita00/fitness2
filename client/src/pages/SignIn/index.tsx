import {FC} from "react";
import { Form, Input, Button } from 'antd';
import axios from "axios";


const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 0 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 0 },
};

const SignIn: FC = () => {

  const onFinish = async (values: any) => {
    let params = new URLSearchParams();
    for(const k in values) {
      params.append(k, values[k]);
    }
    const res = await axios.post(`http://localhost:12341/auth`, params);
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
              label="name"
              name="name"
              rules={[{ required: true, message: 'Please input name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
              label="email"
              name="email"
              rules={[{ required: true, message: 'Please input email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
              label="password"
              name="password"
              rules={[{ required: true, message: 'Please input password!' }]}
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

export default SignIn;
