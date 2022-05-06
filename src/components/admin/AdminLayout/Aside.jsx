import React from 'react'
import { ContainerOutlined, DesktopOutlined, HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
const Aside = () => {
  return (
    <>
    
    <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
        //   inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Product list
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            Orders List
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
           Users
          </Menu.Item>
        </Menu>
    
    
    </>
  )
}

export default Aside