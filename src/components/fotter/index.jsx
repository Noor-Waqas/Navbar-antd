import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
import { Col, Row } from 'antd';
const Index = () => {
  return (
    <div>
       <Footer style={{ textAlign: 'center', backgroundColor:"black",color:"white",marginTop:"15px" }}>
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
    </Row>
      <p style={{ marginTop: '20px' }}>© 2023 Shadow Aoo Company. All rights reserved.</p>
    </Footer>
    </div>
  );
}

export default Index;
