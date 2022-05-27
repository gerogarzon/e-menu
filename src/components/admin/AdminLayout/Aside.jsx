import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <Menu.Item key="1" icon={<HomeOutlined />} className="asideLinks">
            Home
          </Menu.Item>
        </Link>

        <Link to="/adminProducts">
          <Menu.Item key="2" icon={<DesktopOutlined />} className="asideLinks">
            Product list
          </Menu.Item>
        </Link>

        <Link to="/adminOrders">
          <Menu.Item key="3" icon={<DesktopOutlined />} className="asideLinks">
            Orders List
          </Menu.Item>
        </Link>

        <Link to="/adminUsers">
          <Menu.Item
            key="4"
            icon={<ContainerOutlined />}
            className="asideLinks"
          >
            Users
          </Menu.Item>
        </Link>
      </Menu>
    </>
  );
};

export default Aside;
