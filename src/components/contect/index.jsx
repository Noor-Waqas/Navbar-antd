import React, {  useState } from 'react'
import { Input,Button,List } from 'antd';
import style from './style.module.scss';
import {DeleteOutlined} from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const index = () => {
  const [inputdata, setinputdata] = useState('')
  const [data, setdata] = useState([]);

  const addHandleItem = () => {
    if (inputdata.trim() !== '') {
      setdata([...data, inputdata]);
      setinputdata('');
      toast("Add items Successfully");
    }
  };
  data
  const DeleteItem = (index) => {
    const updateddata = [...data];
    updateddata.splice(index, 1);
    setdata(updateddata);
    toast("Delete Successfully");
  };

  return (
    <div  className={style.MaindivStyles}>
      <div style={{width:"60%"}} className={style.widthDiv}>
        <div className={style.TodoListDiv}>
        <h1 style={{textAlign:"center"}}>Todo List</h1>
       <div  className={style.InputStylesDiv}>
        <Input
          value={inputdata}
          onChange={(e) => setinputdata(e.target.value)}
          placeholder="Add item"
          className={style.InputStyles}
        />
        <Button className={style.AddToButton} onClick={addHandleItem}>
          Add
        </Button>
      </div>

        <div style={{display:"flex",justifyContent:"center"}}>
          <List
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item className={style.ItemList}>
                {item}
                <DeleteOutlined className={style.ItemListButton} onClick={() => DeleteItem(index)}/>
              </List.Item>
            )}
          />
        </div>

    </div>
    </div>
    <ToastContainer
    style={{width:"250px",height:"20px",marginTop:"25rem",marginLeft:"20px"}}
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
/>
    </div>
  )
}

export default index