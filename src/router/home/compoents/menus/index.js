import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
class Menus extends React.Component {
  render() {
    const MenuList = [
      {
        name: "工作站",
        icon: "home",
        router: "/"
      },
      {
        name: "文章管理",
        icon: "container",
        router: "/article"
      },
      {
        name: "标签管理",
        icon: "tag",
        router: "/label"
      },
      {
        name: "专题管理",
        icon: "interaction",
        router: "/special"
      },
      {
        name: "留言板",
        icon: "mail",
        router: "/leaveWord"
        // <Icon type="mail" />
      }
    ];
    return (
      <div style={{ width: 200 }}>
        <Menu mode="inline" style={{ height: "100vh" }}>
          {MenuList.map((v, i) => (
            <Menu.Item key={i + 1}>
              <Link to={v.router}>
                <Icon type={v.icon} />
                <span>{v.name}</span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}
export default Menus;
