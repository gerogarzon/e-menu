import React from 'react'
import { Layout} from "antd";
import Adminheader from "../AdminLayout/AdminHeader";
import Aside from "../AdminLayout/Aside";

const { Sider, Content } = Layout;


const Orders = () => {
  return (
    <>

  <Layout className="adminBackground">
        <Adminheader />

        <Layout>
          <Sider>
            <Aside />
          </Sider>
          <Content>
       
    <h1>aca van las ordenesssssssssssssssssssssssssssssssssss</h1>


          </Content>
        </Layout>
      </Layout>


    </>
  )
}

export default Orders