import React from 'react'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Admin = () => {
  return (
    <>

  <Layout>
    <Sider>Sider</Sider>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
  
  </>
  )
}

export default Admin