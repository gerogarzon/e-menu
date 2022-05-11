import React from 'react'
import { Layout} from "antd";
import Adminheader from "../AdminLayout/AdminHeader";
import Aside from "../AdminLayout/Aside";
import Users from "./Users";
const { Sider, Content } = Layout;


const UsersClick = () => {
  return (
    <>

  <Layout className="adminBackground">
        <Adminheader />

        <Layout>
          <Sider>
            <Aside />
          </Sider>
          <Content>
            <Users />
          </Content>
        </Layout>
      </Layout>


    </>
  )
}

export default UsersClick