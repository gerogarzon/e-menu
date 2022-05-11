import React from 'react'
import { Layout} from "antd";
import Adminheader from "../AdminLayout/AdminHeader";
import Aside from "../AdminLayout/Aside";
import Products from "./Products";
const { Sider, Content } = Layout;


const ProductsClick = () => {
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
  )
}

export default ProductsClick