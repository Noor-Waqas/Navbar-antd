import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Nav from '../navbar'
import Home from '../home'
import About from "../about";
import Contect from "../contect";
// import Servious from "../all_servious/serviousOne";
// import ServiousTwo from "../all_servious/serviousTwo";
import Footter from "../fotter";


const index = () => {
  return (
    <div>
      {/* <Nav/> */}
    <BrowserRouter>
        <Nav/>
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/todo.list" element={<Contect />}/>
            {/* <Route path="/servious" element={<Servious />}/>
            <Route path="/serviousTwo" element={<ServiousTwo />}/> */}
            </Routes>
        <Footter/>
      </BrowserRouter>
    </div>
  )
}

export default index