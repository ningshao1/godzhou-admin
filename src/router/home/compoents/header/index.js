import React, { Component } from "react";
import { Row, Col, Icon, Badge, Dropdown, Menu } from "antd";
import "./head.less";
const headPortrait = require("@asset/headPortrait.jpg");
function Screen(props) {
  function fullScreen() {
    let element = document.documentElement;
    if (element.requestFullScreen) {
      element.requestFullScreen();
    }
    //IE11
    else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    // Webkit (works in Safari5.1 and Chrome 15)
    else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
    // Firefox (works in nightly)
    else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    }
  }
  function fullExit() {
    var element = document.documentElement;
    //HTML5 W3C 提议
    if (element.requestFullScreen) {
      document.exitFullscreen();
    } else if (element.msRequestFullscreen) {
      document.msExitFullscreen();
    }
    // Webkit (works in Safari5.1 and Chrome 15)
    else if (element.webkitRequestFullScreen) {
      document.webkitCancelFullScreen();
    }
    // // Firefox (works in nightly)
    else if (element.mozRequestFullScreen) {
      document.mozCancelFullScreen();
    }
  }
  function screen() {
    if (props.full) fullExit();
    else fullScreen();
    props.setFull();
  }
  return (
    <Icon
      type={props.full ? "fullscreen-exit" : "fullscreen"}
      onClick={screen}
    />
  );
}
export default class HomeHeader extends Component {
  state = {
    full: false
  };
  setFull = () => {
    this.setState({
      full: !this.state.full
    });
  };
  render() {
    const menu = (
      <Menu className="heade-menu">
        <Menu.ItemGroup title=" 用户中心 " className="menu-group">
          <Menu.Item>你好-admin</Menu.Item>
          <Menu.Item>退出登录</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="设置中心" className="menu-group">
          <Menu.Item>系统设置</Menu.Item>
          <Menu.Item>用户设置</Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    );
    return (
      <Row>
        <Col span={8}>
          <Icon
            type={this.props.MenuClose ? "menu-unfold" : "menu-fold"}
            style={{ fontSize: 22, cursor: "pointer" }}
            onClick={() => this.props.menusClosed()}
          />
        </Col>
        <Col span={8} offset={8}>
          <div>
            <ul className="heade-user">
              <li>
                <Screen full={this.state.full} setFull={this.setFull} />
              </li>
              <li>
                <Badge count={5}>
                  <Icon type="bell" style={{ fontSize: 22 }} />
                </Badge>
              </li>
              <li>
                <Dropdown overlay={menu}>
                  <img src={headPortrait} alt="" />
                </Dropdown>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    );
  }
}
