import React, { useState } from "react";
import "./Business.css";
import { Row, Col, Steps, Form, Input, Button, Select, Upload } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const { Step } = Steps;

const { Option } = Select;

function Business() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({ prefix: "62" });

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const onChangeForm = (name, value) => {
    let copyFormData = formData;
    copyFormData[name] = value;
    setFormData(copyFormData);
  };

  const onFinish = (values) => {
    console.log(formData);
    localStorage.setItem("business", JSON.stringify(formData));
    navigate("/account");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{ width: 70 }}
        value={formData.prefix}
        onChange={(e) => onChangeForm("prefix", e)}
        defaultValue={"62"}
      >
        <Option value="62">+62</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="business">
      <Row>
        <Col lg={4} md={4} sm={24}>
          <div className="logos">
            <img src="/assets/logo.png" className="logo" />
          </div>
          <Steps
            direction="vertical"
            size="small"
            progressDot
            current={1}
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
              label="Business Name"
              name="Business Name"
              rules={[
                {
                  required: true,
                  message: "Please input your business name",
                },
              ]}
            >
              <Input
                placeholder="Please input your business name"
                value={formData.name}
                onChange={(e) => onChangeForm("name", e.target.value)}
              />
            </Form.Item>

            {/* <Form.Item
              name="Owner Email"
              label="E-mail"
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
              <Input />
            </Form.Item> */}

            <Form.Item
              name="Business Phone Number"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{ width: "100%" }}
                placeholder="81234567890"
                value={formData.phone}
                onChange={(e) => onChangeForm("phone", e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="Country"
              label="Country"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select your country!",
                },
              ]}
            >
              <Select
                placeholder="Please select a country"
                value={formData.country}
                onChange={(e) => onChangeForm("country", e)}
              >
                <Option value="Indonesia">Indonesia</Option>
                <Option value="Malaysia">Malaysia</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Province/State"
              label="Province"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select a Province/State",
                },
              ]}
            >
              <Select
                placeholder="Please select a province/state"
                value={formData.province}
                onChange={(e) => onChangeForm("province", e)}
              >
                <Option value="Jawa Barat">Jawa Barat</Option>
                <Option value="Selangor">Selangor</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="City"
              label="City"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select a City",
                },
              ]}
            >
              <Select
                placeholder="Please select a city"
                value={formData.city}
                onChange={(e) => onChangeForm("city", e)}
              >
                <Option value="Bandung">Bandung</Option>
                <Option value="Rawang">Rawang</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="note"
              style={{ fontStyle: "italic", color: "grey" }}
            >
              <span>
                If your location is not available, it means we haven't reached
                that area yet
              </span>
            </Form.Item>

            <Form.Item
              label="Complete Address"
              name="Complete Address"
              rules={[
                {
                  required: true,
                  message: "Type complete address",
                },
              ]}
            >
              <Input
                placeholder="Type complete address"
                value={formData.address}
                onChange={(e) => onChangeForm("address", e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="PIN Location"
              name="PIN Location"
              rules={[
                {
                  required: true,
                  message: "Type business address",
                },
              ]}
            >
              <Input
                placeholder="Type your business address"
                value={formData.pin}
                onChange={(e) => onChangeForm("pin", e.target.value)}
              />
            </Form.Item>

            {/* <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload name="logo" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item> */}

            <Form.Item label="Business Profile Picture">
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
            </Form.Item>

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

export default Business;
