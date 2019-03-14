import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { PricingCard } from "../components";

const pricings = [
  {
    title: "Free",
    price: 0,
    users: 1,
    features: ["Basic Support", "All core writing room Features"]
  },
  {
    title: "Starter",
    price: 9,
    users: 3,
    features: ["Basic Support", "All core writing room Features"]
  },
  {
    title: "Small",
    price: 20,
    users: 7,
    features: ["Basic Support", "All core writing room Features"]
  }
];
export default class PricingTable extends Component {
  render() {
    return (
      <Col xs={12}>
        <Row>
          <Col xs={12} sm={{ span: 8, offset: 2 }} className="card-container">
            <Row>
              {pricings.map((pricing, key) => (
                <PricingCard key={key} {...pricing} />
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}
