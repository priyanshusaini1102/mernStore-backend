import './App.css';
import React, {useEffect} from 'react';
import Navbar from './components/layout/Header/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
import ProductDetails from './components/product/ProductDetails';
import Products from './components/product/Products';
import Contact from './components/Contact/Contact';
import LoginSignUp from './components/User/LoginSignUp';
import AboutUs from './components/AboutUs/AboutUs';
import Account from './components/User/Account';
import store from './store';
import { loadUser } from './actions/userAction';


function App() {

  useEffect(()=>{
    store.dispatch(loadUser());
  }, []);



  return (
      <BrowserRouter>
        <Navbar  />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/aboutus" element={<AboutUs/>} />
            <Route exact path="/account" element={<Account/>} />
            <Route exact path="/login" element={<LoginSignUp />} />
            <Route  path="/product/:id" element={<ProductDetails />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:keyword" element={<Products />} />
          </Routes>
        <Footer />
      </BrowserRouter>
              
  );
}

export default App;
