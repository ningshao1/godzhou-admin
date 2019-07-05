import React from "react";
import { Menu, Icon } from "antd";
class Menus extends React.Component {
  state = {
    collapsed: true
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const MenuList = [
      {
        name: "工作站",
        icon: "home"
      },
      {
        name: "文章管理",
        icon: "container"
      },
      {
        name: "标签管理",
        icon: "tag"
      },
      {
        name: "专题管理",
        icon: "interaction"
      }
    ];
    return (
      <div style={{ width: 200 }}>
        <Menu
          theme="light"
          mode="inline"
          inlineCollapsed={this.state.collapsed}
          style={{ height: "100vh" }}
        >
          {MenuList.map((v, i) => (
            <Menu.Item key={i + 1}>
              <Icon type={v.icon} />
              <span>{v.name}</span>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}
export default Menus;
