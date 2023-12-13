import React, { useEffect, useState } from 'react';
import { Button, Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, UsergroupAddOutlined, ContactsOutlined ,UserOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';


const index = () => {
  
  return (
      <Menu mode="horizontal" style={{fontSize:"24px"}}>
          <Menu.Item key="logo">
            <img src="https://profitsols.com/wp-content/uploads/2023/07/LOGO.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
          </Menu.Item>

          <Menu.Item key="mail" icon={<HomeOutlined style={{fontSize:"24px"}} />} style={{ marginLeft: 'auto' }}>
            <Link to="/"> Home </Link>  
          </Menu.Item>

          <Menu.Item key="app" icon={<AppstoreOutlined style={{fontSize:"24px"}}/>}>
            <Link to="/about"> About </Link>  
          </Menu.Item>
         
          <Menu.SubMenu key="SubMenu" icon={<UsergroupAddOutlined style={{fontSize:"24px"}}/>} title="Sercious">
            <Menu.Item key="setting:1"><Link to="/servious"> Option 1  </Link></Menu.Item>
            <Menu.Item key="setting:2"><Link to="/serviousTwo"> Option 2  </Link></Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="app" icon={<ContactsOutlined style={{fontSize:"24px"}}/>}>
            <Link to="/contect"> Contact </Link>  
          </Menu.Item>

          <Menu.Item key="login" style={{fontSize:"24px"}}>
            <Button icon={<UserOutlined />}>Login</Button>
          </Menu.Item>
    </Menu>
  )
}

export default index