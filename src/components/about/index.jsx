import React from 'react'
import style from './style.module.scss';


const index = () => {
  return (
    <div >

      <div className={style.ifaramStyle}>
       <iframe width="100%" height="400" src="https://vrnl.xyz/?params=8015,TP2020" frameborder="0" allowfullscreen></iframe>
      </div>

      <div className={style.ifaramStyle}>
       <iframe width="100%" height="400" src="https://vrnl.xyz/?params=8002,TEST" frameborder="0" allowfullscreen></iframe>
      </div>

      <div className={style.ifaramStyle}>
       <iframe width="100%" height="400" src="https://vrnl.xyz/?params=8011,LUCKY7" frameborder="0" allowfullscreen></iframe>
      </div>

      <div className={style.ifaramStyle}>
       <iframe width="100%" height="400" src="https://vrnl.xyz/?params=8017,LUCKY7B" frameborder="0" allowfullscreen></iframe>
      </div>


    </div>
  )
}

export default index