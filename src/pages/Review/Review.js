import React, { useEffect, useState } from "react";
import "./Review.css";
import {
  Row,
  Col,
  Steps,
  Form,
  Input,
  Button,
  Select,
  Upload,
  Divider,
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

function Review() {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    let owner = localStorage.getItem("owner");
    let business = localStorage.getItem("business");
    let account = localStorage.getItem("account");
    let payment = localStorage.getItem("payment");
    let initFormData = {};
    initFormData.owner = JSON.parse(owner);
    initFormData.business = JSON.parse(business);
    initFormData.account = JSON.parse(account);
    initFormData.payment = JSON.parse(payment);
    setFormData(initFormData);
  }, []);

  console.log(formData);

  return (
    <div className="review">
      <Row>
        <Col lg={4} md={4} sm={24}>
          <div className="logos">
            <img src="/assets/logo.png" className="logo" />
          </div>
          <Steps
            direction="vertical"
            size="small"
            progressDot
            current={5}
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
            {/* ============================== OWNER */}
            <Form.Item label="Owner Information" style={{ fontWeight: "bold" }}>
              {/* <span className="ant-form-text">-----</span> */}
            </Form.Item>

            <Form.Item label="Owner Full Name">
              <span className="ant-form-text">{formData?.owner?.name}</span>
            </Form.Item>
            <Form.Item label="Owner Email">
              <span className="ant-form-text">{formData?.owner?.email}</span>
            </Form.Item>
            <Form.Item label="Owner Phone Number">
              <span className="ant-form-text">
                +{formData?.owner?.prefix}
                {formData?.owner?.phone}
              </span>
            </Form.Item>
            <Divider />

            {/* ============================== Business */}
            <Form.Item
              label="Business Information"
              style={{ fontWeight: "bold" }}
            >
              {/* <span className="ant-form-text">-----</span> */}
            </Form.Item>

            <Form.Item label="Business Name">
              <span className="ant-form-text">{formData?.business?.name}</span>
            </Form.Item>
            <Form.Item label="Business Phone Number">
              <span className="ant-form-text">
                +{formData?.business?.prefix}
                {formData?.business?.phone}
              </span>
            </Form.Item>
            <Form.Item label="Country">
              <span className="ant-form-text">
                {formData?.business?.country}
              </span>
            </Form.Item>
            <Form.Item label="Province/State">
              <span className="ant-form-text">
                {formData?.business?.province}
              </span>
            </Form.Item>
            <Form.Item label="City">
              <span className="ant-form-text">{formData?.business?.city}</span>
            </Form.Item>
            <Form.Item label="Complete Address">
              <span className="ant-form-text">
                {formData?.business?.address}
              </span>
            </Form.Item>
            <Form.Item label="PIN Location">
              <span className="ant-form-text">{formData?.business?.pin}</span>
            </Form.Item>
            <Divider />

            {/* ============================== Account */}
            <Form.Item
              label="Account Information"
              style={{ fontWeight: "bold" }}
            >
              {/* <span className="ant-form-text">-----</span> */}
            </Form.Item>

            <Form.Item label="Email">
              <span className="ant-form-text">{formData?.account?.email}</span>
            </Form.Item>
            <Form.Item label="Phone Number">
              <span className="ant-form-text">
                +{formData?.account?.prefix}
                {formData?.account?.phone}
              </span>
            </Form.Item>
            <Divider />

            {/* ============================== Payment */}
            <Form.Item
              label="Payment Information"
              style={{ fontWeight: "bold" }}
            >
              {/* <span className="ant-form-text">-----</span> */}
            </Form.Item>

            <Form.Item label="Payment Account">
              <span className="ant-form-text">{formData?.payment?.name}</span>
            </Form.Item>
            <Divider />

            {/* ================================================================ */}

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Link to="/final">
                <Button type="primary" block htmlType="submit">
                  Submit All Data
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Review;
