import React from "react";
import { List,  Divider } from "antd";
import { useState, useEffect } from "react";
import '../../admin/AdminStyles.css'

const ProductsList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/api/menus")
      .then((response) => response.json())
      .then((data) => setItems(data.menusDB));
  }, []);

  return (
    <>
      <Divider orientation="left">Products List:</Divider>
      {items?.map((item) => {
        return (
           
          <List key={item._id}
            size="small"
            bordered
            dataSource={items}
            renderItem={(items) => <>
            <List.Item className="ProductListItem" >{item.title}</List.Item>
            <List.Item className="ProductListItem">{item.description}</List.Item>
            </>
        }
          />
          
        );
      })}
      
    </>
  );
};

export default ProductsList;
