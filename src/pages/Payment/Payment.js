import React, { useState } from "react";
import "./Payment.css";
import { Row, Col, Steps, Form, Input, Button, Select, Upload } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const { Step } = Steps;

const { Option } = Select;

function Payment() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const onChangeForm = (name, value) => {
    let copyFormData = formData;
    copyFormData[name] = value;
    setFormData(copyFormData);
  };

  const onFinish = (values) => {
    console.log(formData);
    localStorage.setItem("payment", JSON.stringify(formData));
    navigate("/terms");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="payment">
      <Row>
        <Col lg={4} md={4} sm={24}>
          <div className="logos">
            <img src="/assets/logo.png" className="logo" />
          </div>
          <Steps
            direction="vertical"
            size="small"
            progressDot
            current={3}
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
            <Form.Item
              label="Payment Account"
              name="Payment Account"
              rules={[
                {
                  required: true,
                  message: "Please input payment account name",
                },
              ]}
            >
              <Input
                placeholder="Please input payment account name"
                value={formData.name}
                onChange={(e) => onChangeForm("name", e.target.value)}
              />
            </Form.Item>

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
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" block htmlType="submit">
                Next
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Payment;
