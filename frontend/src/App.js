import './App.css';
import React from 'react';
import Navbar from './components/layout/Header/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import WebFont from 'webfontloader';
import Footer from './components/layout/Footer/Footer';
import Home from './components/layout/Home/Home';


function App() {

  React.useEffect(()=>{
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sons"]
      }
    })
  });

  return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}>
              {/* <Route path="expenses" element={<Expenses />} />
              <Route path="invoices" element={<Invoices />} /> */}
            </Route>
          </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
