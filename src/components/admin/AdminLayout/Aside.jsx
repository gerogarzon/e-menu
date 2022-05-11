import React from "react";
import {
  ContainerOutlined,
  DesktopOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "../../admin/AdminStyles.css";

const Aside = () => {
  return (
    <>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        //   inlineCollapsed={this.state.collapsed}
      >
        <a href="http://localhost:3000" className="aLink">
          <Menu.Item key="1" icon={<HomeOutlined />} className="asideLinks">
            Home
          </Menu.Item>
        </a>
        <a href="/adminProducts">
          <Menu.Item key="2" icon={<DesktopOutlined />} className="asideLinks">
            Product list
          </Menu.Item>
        </a>
        <a>
          <Menu.Item key="3" icon={<DesktopOutlined />} className="asideLinks">
            Orders List
          </Menu.Item>
        </a>
        <a href="/adminUsers">
          <Menu.Item
            key="4"
            icon={<ContainerOutlined />}
            className="asideLinks"
          >
            Users
          </Menu.Item>
        </a>
      </Menu>
    </>
  );
};

export default Aside;
