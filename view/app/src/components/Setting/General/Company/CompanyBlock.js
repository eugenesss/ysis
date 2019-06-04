import React from "react";
import { Col, Row } from "reactstrap";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

const CompanyBlock = ({ company }) => {
  return (
    <React.Fragment>
      <RctCollapsibleCard>
        <Row className={"align-items-center pl-20 pb-20 border-bottom"}>
          <img
            src={require("Assets/img/product-1.png")}
            alt="user profile"
            className="rounded-circle bordered"
            width="150"
            height="150"
          />
          <div className={"ml-20"}>
            <h1>{company.name}</h1>
            <div>{company.email}</div>
          </div>
        </Row>
        <Row className={"pl-20 pr-20 pt-30 pb-20 border-bottom"}>
          <Col>
            <h2>About</h2>
            <div>{company.description}</div>
          </Col>
        </Row>
        <Row className={"pl-20 pr-20 pt-30 pb-10"}>
          <Col md={3}>Contact</Col>
          <Col md={9}>
            <div className="text-right">
              <b>{company.contact}</b>
            </div>
          </Col>
        </Row>
        <Row className={"pl-20 pr-20 pt-10 pb-10"}>
          <Col md={3}>Website</Col>
          <Col md={9}>
            <div className="text-right">
              <b>{company.website}</b>
            </div>
          </Col>
        </Row>
      </RctCollapsibleCard>
    </React.Fragment>
  );
};

export default CompanyBlock;
