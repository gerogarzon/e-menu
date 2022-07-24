import React from "react";
import { Layout } from "antd";
import Adminheader from "../AdminLayout/AdminHeader";
import Aside from "../AdminLayout/Aside";
import ProductsAdd from "./ProductsAdd";
import ProductsList from "./ProductsList";
const { Sider, Content } = Layout;

const Products = () => {
  return (
    <>
      <Layout className="adminBackground">
        <Adminheader />
        <Layout>
          <Sider>
            <Aside />
          </Sider>
          <Content>
            <ProductsAdd />
            <ProductsList />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Products;
