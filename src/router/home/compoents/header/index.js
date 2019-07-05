import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
export default class HomeHeader extends Component {
  render() {
    return (
      <Row>
        <Col span={8}>
          <Icon
            type="menu-fold"
            style={{ fontSize: 22, cursor: "pointer" }}
            onClick={() => this.props.menusClosed()}
          />
        </Col>
        <Col span={8} offset={8}>
          col-8
        </Col>
      </Row>
    );
  }
}
