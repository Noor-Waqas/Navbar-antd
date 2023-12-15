import React, { useState } from 'react';
import { Button, Drawer,Menu,Space} from 'antd';
import style from './style.module.scss';
import { MenuOutlined } from '@ant-design/icons'; 
import { Link } from 'react-router-dom';

const ManuBar =( {isInline = false })=>{
  return(  
  <Menu className={style.imgwrapperClass} mode={isInline ? "inline" : "horizontal"} >
          <Menu.Item key="logo" className={style.imgclass}>
            <img src="https://profitsols.com/wp-content/uploads/2023/07/LOGO.png" alt="Logo" style={{ marginRight: '10px' }} />
          </Menu.Item>

          <Menu.Item key="home" style={{ marginLeft: 'auto' }}className={style.headerMenu}>
          <Link to="/"> Home </Link>  

          </Menu.Item>

          <Menu.Item key="contact" className={style.headerMenu}>
          <Link to="/contect"> Contact </Link>  
          </Menu.Item>

          <Menu.Item key="about"className={style.headerMenu} >
          <Link to="/about"> About </Link>  

          </Menu.Item>

          <Menu.Item key="login" className={style.headerMenu}>
            <Button> Login</Button>
          </Menu.Item>
  </Menu>
  )
}
const HerrowSection =()=>{
  return(  
  <Menu style={{ backgroundColor: "black", color: "white", fontSize: "24px" }} mode="horizontal" >
          <Menu.Item key="logo" style={{fontSize:"24px",marginTop:"6px"}}>
          <p>+923206437540</p>
          </Menu.Item>
  </Menu>
  )
}

const Index = () => {
  const [open, setOpen] = useState(false);  
  const onClose = () => {
    setOpen(false);
  };  
  
  return (
    <>
    <div  className={style.wrapperClass}>
       <HerrowSection/>
      <div >
          <div className={style.manuIcon} >
              <div  style={{ display:"flex",justifyContent:"end" }}>
                <MenuOutlined style={{ color: "white", fontSize: "24px",position:"relative",marginBottom:"-45px" }} onClick={() => { setOpen(true) }} />
              </div>
          </div>

      
          <ManuBar  />
  <div className={style.drawerClass}>

      <Drawer
        title={`+923206437540`}
        placement="left"
        width={200}
        onClose={onClose}
        open={open}
        className={style.drawerClass}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}style={{backgroundColor:"black",color:"white"}}>Cancel</Button>
        //     {/* <Button type="primary" onClick={onClose}>
        //       OK
        //     </Button> */}
        //   </Space>
        // }
      >
       <ManuBar isInline/>
      </Drawer>
      </div>
      
      </div>
      </div>
    </>
  );
};

export default Index;
