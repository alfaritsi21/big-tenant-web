import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import "./Final.css";

function Final() {
  return (
    <div className="Final">
      <Row>
        <Col span={8}>
          <div className="logos">
            <img src="/assets/logo.png" className="logo" />
          </div>
        </Col>
      </Row>
      <div className="body">
        <img
          src="/assets/image.png"
          style={{ width: "649px", height: "329px" }}
        />
        <p className="main-text">Your request has been submitted</p>
        <p className="sub-text">
          We will notify you for further update max 2x24 👌
        </p>
        <div className="button">
          <Link to="/">
            <Button type="primary" style={{ width: "167px", height: "38px" }}>
              <p style={{ fontWeight: "bold" }}>Back to Home</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Final;
