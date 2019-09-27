import React, { Component } from "react";
import { Input, Card, Form, Button, Icon, Row, Col } from "antd";
import style from "../login/login.module.less";
class login extends Component {
  render() {
    return (
      <div className="center" style={{ height: "100%" }}>
        <Card
          style={{
            width: 400,
            height: 320,
            boxShadow: "0 2px 12px 0 rgba(0,0,0,.1)"
          }}
          bodyStyle={{ paddingTop: 0 }}
        >
          <div className={style.title}>管理系统</div>
          <WrappedHorizontalLoginForm {...this.props} />
        </Card>
      </div>
    );
  }
}
class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(err);
      if (!err) {
        this.props.history.push({
          pathname: "/"
        });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17 }}
        onSubmit={this.handleSubmit}
      >
        <Form.Item label="用户名">
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入用户名！" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item label="密码">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码！" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="password"
              type="password"
            />
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} style={{ paddingTop: 20 }}>
          <Row gutter={16} justify="center">
            <Col span={8} offset={4}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Col>
            <Col span={8}>
              <Button
                type="primary"
                onClick={() => this.props.form.resetFields()}
              >
                重置
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedHorizontalLoginForm = Form.create({ name: "horizontal_login" })(
  LoginForm
);
export default login;
