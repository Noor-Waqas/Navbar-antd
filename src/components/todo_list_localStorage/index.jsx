import React, { useState } from 'react';
import style from './style.module.scss';
import { Input, Button} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


const index = () => {
  const [inputData, setinputData] = useState('');
  const [data, setdata] = useState([]);

  const AddEventHandle = () => {
    const UpdateData = inputData.trim();
    if (UpdateData !== '') {
      setdata([...data, UpdateData]);
      setinputData('');
    }
  };

  const deleteTask = (index) => {
    const Alldata = [...data];
    Alldata.splice(index, 1);
    setdata(Alldata);
  };

  return (
    <div style={{display:"flex",justifyContent:"center",height:"25dvw"}}>
      <div style={{width:"50%"}}>
          <h1 style={{textAlign:"center"}}>Todo List</h1>
          <Input type="text" value={inputData}onChange={(e) => setinputData(e.target.value)} style={{width:"85%"}}
          />
          <Button onClick={AddEventHandle}>Add Item</Button>

          <div>
              {data.map((item, index) => (
                <p key={index}>
                  <div className={style.divColor}>
                  <div className={style.styleDiv}>{item}</div>
                  <div className={style.styleButton}><DeleteOutlined onClick={() => deleteTask(index)}/></div>
                  </div>
                </p>
              ))}
          </div>
         </div>
    </div>
  )
}

export default index