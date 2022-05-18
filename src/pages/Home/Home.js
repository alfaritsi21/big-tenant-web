import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Row>
        <Col span={8}>
          <div className="logos">
            <img src="/assets/logo.png" className="logo" />
          </div>
        </Col>
        <Col span={8} offset={8}>
          <p className="right-menu">Back To Main Page</p>
        </Col>
      </Row>
      <div className="body">
        <p className="main-text">
          Tired of the old way of <br /> selling online?
        </p>
        <p className="sub-text">
          Try BIG Tenant, feel the new experience of online selling in virtual{" "}
          <br />
          world. Register, earn money, and let’s get rich!{" "}
        </p>
        <div className="button">
          <Link to="/owner">
            <Button type="primary" style={{ width: "167px", height: "38px" }}>
              <p style={{ fontWeight: "bold" }}>Register now</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
