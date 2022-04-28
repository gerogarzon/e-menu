import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";
import { List, Typography, Divider } from 'antd';


const Admin = () => {

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];


  return (
    <>
      <Header />
      <Divider orientation="left">Products List</Divider>
      <List
       
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text ></Typography.Text> {item}
          </List.Item>
        )}
      />

      <Footer />
    </>
  );
};

export default Admin;
