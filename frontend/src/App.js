import './App.css';
import React, {useEffect, useState} from 'react';
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
import {  clearErrors, loadUser } from './actions/userAction';
import UpdatePassword from './components/User/UpdatePassword';
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from './components/User/ResetPassword';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import axios from 'axios';

import PrePayment from './components/Cart/PrePayment';
import Success from './components/Cart/Success';
import Orders from './components/Orders/Orders';
import { useSelector } from 'react-redux';
import OrderDetails from './components/Orders/OrderDetails';


function App() {
  const { isAuthenticated } = useSelector((state)=>state.userState); 

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey(){
    const {data} = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(()=>{
    store.dispatch(loadUser());
    store.dispatch(clearErrors());

    getStripeApiKey();
  }, []);



  return (
      <BrowserRouter>
        <Navbar  />
        
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/aboutus" element={<AboutUs/>} />
            {isAuthenticated &&  <Route exact path="/account" element={<Account/>} />}
            <Route exact path="/login" element={<LoginSignUp />} />
            <Route  path="/product/:id" element={<ProductDetails />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
            {isAuthenticated &&  <Route exact path="/login/shipping" element={<Shipping />} />}
            {isAuthenticated &&  <Route exact path="/order/confirm" element={<ConfirmOrder />} />}
            {isAuthenticated &&  <Route exact path="/process/payment" element={<PrePayment stripeApiKey={stripeApiKey}/>} />}
            {isAuthenticated &&  <Route exact path="/success" element={<Success />} />}
            {isAuthenticated &&  <Route exact path="/orders" element={<Orders />} />}
            {isAuthenticated && <Route exact path="/account/order/:id" element={<OrderDetails />} /> }
            
            <Route exact path="/products/:keyword" element={<Products />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />
            {isAuthenticated &&  <Route exact path="/password/update" element={<UpdatePassword />} />}
            <Route exact path="/password/forgot" element={<ForgotPassword />} />
          </Routes>
        <Footer />
      </BrowserRouter>
              
  );
}

export default App;
