import React, {  useState } from 'react';
import { Input, Button, Table } from 'antd';
import { DeleteOutlined,EditOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './style.module.scss';

const Index  = () => {
  const [inputdata, setinputdata] = useState('');
  const [data, setdata] = useState([]);
  const [counting, setcounting] = useState(0);

  const addHandleItem = () => {
    setdata([...data, 
      {
        item: inputdata,
        key: counting,
        no: counting + 1,
      },
    ]);
    setinputdata(setcounting(counting + 1));
    toast('Add items Successfully');
  }; 

  const editHandleItem =()=>{
    console.log("adding data successfulloy")
  }



  const deleteHandleItem = (key) => {
    const updateddata = data.filter((item) => item.key !== key);
    setdata(updateddata);
    toast('Delete Successfully');
  };

  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'item',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_,item) => (<>
        <div>
              <DeleteOutlined className={style.ItemListButton} onClick={() => deleteHandleItem(item.key)}/>
              <EditOutlined  onClick={() => editHandleItem()}/>
        </div>
        </>
      ),
    },
  ];

  return (
    <div className={style.MaindivStyles} >
      <div style={{ width: '90%' }} className={style.widthDiv}>
        <div className={style.TodoListDiv}>
          <h1 style={{ textAlign: 'center' }}>Todo List</h1>

          <div className={style.InputStylesDiv}>
            <Input
              value={inputdata}
              onChange={(e) => setinputdata(e.target.value)}
              placeholder="Add item "
              className={style.InputStyles}
            />
            <Button type='primary' className={style.AddToButton} onClick={addHandleItem}>
              Add
            </Button>
          </div>
          {
            data.length ? (<div className={style.tableDataDiv}>
              <Table dataSource={data}  columns={columns} className={style.tableData} />
            </div>) : ""
          }
        </div>
      </div>
      <ToastContainer theme="dark"/>
    </div>
  )
};

export default Index;
