import React, { Component } from "react";
import Menus from "./compoents/menus";
import { Layout } from "antd";
import HomeHeader from "./compoents/header";
import HomeContent from "./compoents/homeContent";
import { NProgress } from "@tanem/react-nprogress";
const { Header, Footer, Sider, Content } = Layout;
class Home extends Component {
  state = {
    MenuClose: false
  };
  menusClosed = () => {
    this.setState({
      MenuClose: !this.state.MenuClose
    });
  };
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsed={this.state.MenuClose}
          style={{ background: "#fff" }}
        >
          <Menus MenuClose={this.state.MenuClose} />
        </Sider>
        <Layout>
          <NProgress
            animationDuration={300}
            incrementDuration={500}
            isAnimating
            minimum={0.1}
          >
            {({ animationDuration, isFinished, progress }) => (
              <Header style={{ background: "#fff", padding: "0 20px" }}>
                <HomeHeader
                  menusClosed={this.menusClosed}
                  MenuClose={this.state.MenuClose}
                  animationDuration={animationDuration}
                  progress={progress}
                />
              </Header>
            )}
          </NProgress>
          <Content className="title">
            <HomeContent />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Home;
