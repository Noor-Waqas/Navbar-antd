import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, AppstoreOutlined, UsergroupAddOutlined, ContactsOutlined ,UserOutlined} from '@ant-design/icons';
const { Footer } = Layout;
import { Col, Row } from 'antd';
const Index = () => {
  return (
    <div>
      {/* <Footer style={{backgroundColor:"black",marginTop:"67vh"}} >
        <img src="https://profitsols.com/wp-content/uploads/2023/07/LOGO.png" alt="Logo" style={{ height: '30px', marginRight: '40px' }} />
        
        <Menu theme="light" mode="vertical" defaultSelectedKeys={['home']} style={{ display: 'flex',backgroundColor:"black",color:"white"}}>
          <Menu.Item key="home" >
            <Link to="/">Home</Link>
          </Menu.Item>
          
          <Menu.Item key="about" >
            <Link to="/about">About</Link>
          </Menu.Item>
          
          <Menu.Item key="contact">
            <Link to="/contect">Contact</Link>
          </Menu.Item>
        </Menu>
      </Footer> */}
     
       <Footer style={{ textAlign: 'center', backgroundColor:"black",color:"white",marginTop:"62vh" }}>
     <Row>
        <Col flex={12}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ marginRight: '20px' }}>
            <img src="https://profitsols.com/wp-content/uploads/2023/07/LOGO.png" alt="Logo" style={{ height: '30px' }} />
            </div>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </Col>

        <Col flex={12}><Menu  mode="horizontal" defaultSelectedKeys={['home']} style={{ marginTop: '20px',fontSize:"24px", }}>
            <Menu.Item key="home" icon={<HomeOutlined style={{fontSize:"24px"}} />} >
            <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item key="about" icon={<AppstoreOutlined style={{fontSize:"24px"}}/>} >
            <Link to="/about">About</Link>
            </Menu.Item>

            <Menu.Item key="contact" icon={<ContactsOutlined style={{fontSize:"24px"}}/>}>
            <Link to="/contect">contect</Link>
            </Menu.Item>
            <Menu.Item key="Sercious"  icon={<UsergroupAddOutlined style={{fontSize:"24px"}}/>} >
            <Link to="/servious" >Sercious</Link>
            </Menu.Item>
        </Menu>
        </Col>
    </Row>
      

      

      <p style={{ marginTop: '20px' }}>© 2023 Shadow Aoo Company. All rights reserved.</p>
    </Footer>
    </div>
  );
}

export default Index;
