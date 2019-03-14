import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const PricingCard = props => {
  const { title = "", price = 0, users = 0, features = [] } = props;

  return (
    <Col xs={12} sm={4} md={12} lg={4} className="card text-center">
      <h2 className="heading">{title}</h2>
      <p className="price">
        <span className="amount text-center">
          <sup>$</sup>
          {price}
          <sub>/month</sub>
        </span>
      </p>
      <p className="items">
        {users} {users > 1 ? "Users" : "User"}
      </p>
      {features.map((feature, key) => (
        <p className="items" key={key}>
          {feature}
        </p>
      ))}
      <Button variant="success">GET STARTED</Button>
    </Col>
  );
};

export default PricingCard;
