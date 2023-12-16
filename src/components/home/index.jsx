import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './style.module.scss';
import { Button,Col, Row } from 'antd';

const index = () => {
  const [product,setproduct]=useState([])
  const [productdetails,setproductdetails]=useState([])

      const getApi = async (url)=>{
        const resp= await axios.get(url)
        const data= resp.data
        return data
      }
    
        const ProductList= async ()=>{
          // const data = await getApi("https://fakestoreapi.com/products")
          const data = await getApi("https://api.escuelajs.co/api/v1/products")

          setproduct(data)
        }
  
          useEffect(()=>{
          ProductList()
          },[])

          const getApiProduct = async (url)=>{
            const resp= await axios.get(url)
            const data= resp.data
            return data
          }
        
            const ProductListDetails= async ()=>{
              const data = await getApiProduct("https://api.escuelajs.co/api/v1/users")
    
              setproductdetails(data)
            }
      
              useEffect(()=>{
                ProductListDetails()
              },[])
          console.log("user",productdetails)
  return (
   <div className={style.MainContainer}>

        <div className={style.productList} >     
           {product.map((item) => (<>
        <Row>
      <Col span={24}>
              <div className={style.PoductSyltes}>    
              <div>         
              <div > <h1>{item.title}</h1></div>
              <div><img src={item.images} width={500} height={300} className={style.imgStyles} alt="" /></div>
              <div>{item.name}</div>
              <div>Rs :{item.price}</div>
              <div>{item.updatedAt}</div>
              <div>{item.creationAt}</div>
              <div><p>{item.description}</p></div>
              <Button className={style.AddToButton}>Add to Cart</Button>
              </div>
              </div>
              </Col>
        </Row>
              </>
            ))}

    {productdetails.map((item) => (<>
        <Row>
      <Col span={24}>
              <div className={style.PoductSyltes}>    
              <div>         
              <div><img src={item.avatar} width={500} height={300} className={style.imgStyles} alt="" /></div>
              <div > <h1>{item.email}</h1></div>
              <div>{item.name}</div>
              <div>Rs :{item.role}</div>
              <div>{item.creationAt}</div>
              <div>{item.updatedAt}</div>
              <Button className={style.AddToButton}>Details</Button>
              </div>
              </div>
              </Col>
        </Row>
              </>
            ))}
        </div>
    

   </div>
  )
}

export default index