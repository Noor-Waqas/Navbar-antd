import React, { useState } from 'react';
import { Button, Menu,Drawer} from 'antd';
import { HomeOutlined, AppstoreOutlined, UsergroupAddOutlined, ContactsOutlined ,UserOutlined,MenuOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import style from './style.module.scss'



const index = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (<>
      <Menu mode="horizontal" style={{fontSize:"24px"}}>
          <Menu.Item key="logo" className={style.manuItem}>
            <img src="https://profitsols.com/wp-content/uploads/2023/07/LOGO.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
          </Menu.Item>
        
          <Menu.Item key="mail" className={style.manuItem} icon={<HomeOutlined style={{fontSize:"24px"}} />} style={{ marginLeft: 'auto' }}>
            <Link to="/"> Home </Link>  
          </Menu.Item>

          <Menu.Item key="app" className={style.manuItem} icon={<AppstoreOutlined style={{fontSize:"24px"}}/>}>
            <Link to="/about"> About </Link>  
          </Menu.Item>
         
          <Menu.SubMenu key="SubMenu" className={style.manuItem} icon={<UsergroupAddOutlined style={{fontSize:"24px"}}/>} title="Sercious">
            <Menu.Item key="setting:1"><Link to="/servious"> Option 1  </Link></Menu.Item>
            <Menu.Item key="setting:2"><Link to="/serviousTwo"> Option 2  </Link></Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="app" className={style.manuItem} icon={<ContactsOutlined style={{fontSize:"24px"}}/>}>
            <Link to="/contect"> Contact </Link>  
          </Menu.Item>

          <Menu.Item key="login" className={style.manuItem} style={{fontSize:"24px"}}>
            <Button icon={<UserOutlined />}>Login</Button>
          </Menu.Item>

         
        
          <Menu.Item key="login" style={{fontSize:"24px"}}>
          <Button  onClick={showDrawer}>
          <MenuOutlined />Manu
            </Button>   
          </Menu.Item>

      
   
    </Menu>

    {/* drawer manu */}
    <Drawer  placement="left" onClose={onClose} open={open}>
    <Menu mode="vertical" style={{fontSize:"24px"}}>
        

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
      </Drawer>

   
            

    
  </>
  )
}

export default index