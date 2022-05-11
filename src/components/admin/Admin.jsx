import React from "react";
import { Layout } from "antd";
import Adminheader from "../admin/AdminLayout/AdminHeader";
import Aside from "../admin/AdminLayout/Aside";
import Products from "../admin/Products/Products";

import "./AdminStyles.css";

const { Sider, Content } = Layout;

const Admin = () => {
  return (
    <>
      <Layout className="adminBackground">
        <Adminheader />
        <Layout>
          <Sider>
            <Aside />
          </Sider>
          <Content>
            <Products />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Admin;
