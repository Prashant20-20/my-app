 import Nav from "./component/Nav";  
import ClientList from "./component/Clientlist";
import Home from "./component/Home"; 
import Error from "./component/Error";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Footer from "./component/Footer";
import Contactus from "./component/Contactus";
import Product from "./component/Product";

function App()
{
  
  return (
    <>
     
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/client-list" element={<ClientList/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/contactus" element={<Contactus/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
       <Footer/>
    </>
  )
}

export default App;