import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'antd';
import style from './style.module.scss';

const Index = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true); 

  const getApi = async (url) => {
    const resp = await axios.get(url);
    const data = resp.data;
    return data;
  };

  const ProductList = async () => {
    try {
      setLoading(true);
      const data = await getApi('https://api.escuelajs.co/api/v1/products');
      setProduct(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ProductList();
  }, []);

  return (
    <div className={style.MainContainer}>
      <div className={style.productList}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          product.map((item) => (
            <Row key={item.id}>
              <Col span={24}>
                <div className={style.PoductSyltes}>
                  <div>
                    <div>
                      <h1>{item.title}</h1>
                    </div>
                    <div>
                      <img src={item.images} width={500} height={300} className={style.imgStyles} alt="" />
                    </div>
                    <div>{item.name}</div>
                    <div>Rs: {item.price}</div>
                    <div>{item.updatedAt}</div>
                    <div>{item.creationAt}</div>
                    <div>
                      <p>{item.description}</p>
                    </div>
                    <Button className={style.AddToButton}>Delete</Button>
                  </div>
                </div>
              </Col>
            </Row>
          ))
        )}
      </div>
    </div>
  );
};

export default Index;
