import './App.css';
import React from 'react';
import Navbar from './components/layout/Header/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import WebFont from 'webfontloader';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
import ProductDetails from './components/product/ProductDetails';



function App() {

  // React.useEffect(()=>{
  //   WebFont.load({
  //     google: {
  //       families: ["Roboto", "Droid Sons"]
  //     }
  //   })
  // });

  return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="/product/:id" element={<ProductDetails />} />
          </Routes>
        <Footer />
      </BrowserRouter>
              
  );
}

export default App;
