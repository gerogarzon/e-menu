import React from "react";
import { Layout } from "antd";
import Adminheader from "../AdminLayout/AdminHeader";
import Aside from "../AdminLayout/Aside";
import UsersList from "./UsersList";
import UsersAdd from "./UsersAdd";
const { Sider, Content } = Layout;

const Users = () => {
  return (
    <>
      <Layout className="adminBackground">
        <Adminheader />
        <Layout>
          <Sider>
            <Aside />
          </Sider>
          <Content>
            <UsersAdd />
            <UsersList />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Users;
