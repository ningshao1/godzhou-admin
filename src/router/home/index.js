import React, { Component } from "react";
import { Route } from "react-router-dom";
import Menus from "./compoents/menus";
import { Layout } from "antd";
import HomeHeader from "./compoents/header";
const { Header, Footer, Sider, Content } = Layout;
class Home extends Component {
  state = {
    MenuClose: true
  };
  menusClosed = () => {
    debugger;
    this.setState({
      MenuClose: !this.state.MenuClose
    });
    // this.MenuClose = !this.MenuClose;
  };
  render() {
    return (
      <Layout>
        <Sider>
          <Menus MenuClose={this.state.MenuClose} />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: "0 20px" }}>
            <HomeHeader menusClosed={this.menusClosed} />
          </Header>
          <Content className="title">Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Home;
