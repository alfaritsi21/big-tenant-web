import React from "react";
import "./Terms.css";
import {
  Row,
  Col,
  Steps,
  Form,
  Input,
  Button,
  Select,
  Upload,
  Checkbox,
} from "antd";
import { Link } from "react-router-dom";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const { Step } = Steps;

const { Option } = Select;

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="62">+62</Option>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);

function Terms() {
  return (
    <div className="terms">
      <Row>
        <Col lg={4} md={4} sm={24}>
          <div className="logos">
            <img src="/assets/logo.png" className="logo" />
          </div>
          <Steps
            direction="vertical"
            size="small"
            progressDot
            current={4}
            style={{ fontWeight: "bold" }}
          >
            <Step
              title="Owner Information"
              description="This is a description of the step."
            />
            <Step
              title="Business Information"
              description="This is a description of the step."
            />
            <Step
              title="Account Information"
              description="This is a description of the step."
            />
            <Step
              title="Payment Information"
              description="This is a description of the step."
            />
            <Step
              title="Terms of Use"
              description="This is a description of the step."
            />
            <Step
              title="Review"
              description="This is a description of the step."
            />
          </Steps>
        </Col>
        <Col
          lg={20}
          md={20}
          sm={24}
          style={{ marginTop: "60px", textAlign: "start" }}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Terms of Use" style={{ fontWeight: "bold" }}>
              <span className="ant-form-text">-----</span>
            </Form.Item>
            {/* <Form.Item
              label="Payment Account"
              name="Payment Account"
              rules={[
                {
                  required: true,
                  message: "Please input payment account name",
                },
              ]}
            >
              <Input placeholder="Please input payment account name" />
            </Form.Item> */}

            {/* <Form.Item
              name="Owner Email"
              label="Owner Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input placeholder="Please input your E-mail" />
            </Form.Item>
            <Form.Item
              name="Owner Phone Number"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{ width: "100%" }}
                placeholder="Please input your phone number"
              />
            </Form.Item>

            <Form.Item label="Owner Identity Card">
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item> */}

            <Form.Item
              name="aggree"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>I Agree to the terms of use </Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Link to="/review">
                <Button type="primary" block htmlType="submit">
                  Next
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Terms;
