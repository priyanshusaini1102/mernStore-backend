import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myOrders } from '../../actions/orderActions';
import Loader from '../layout/loader/Loader';
import OrderCard from './OrderCard';

const Orders = () => {
  const dispatch = useDispatch();
  const { loading , orders } = useSelector((state)=>state.myOrdersState);

  useEffect(()=>{
    dispatch(myOrders());
    
  },[dispatch]);

  return <div className='bg-purple-300 py-4 '>{loading ? <Loader/> :
  (
    <div className='bg-white max-w-3xl  md:mx-auto mx-4  rounded-xl sm:p-8 p-4 '>
      <div>
      <h1 className='text-3xl text-center'>Orders</h1>
      <div className='bg-black h-0.5 block my-4'></div>
      <h2>Total Orders : {orders.length}</h2>
      </div>
      <div className='flex flex-col-reverse '>
        {orders.length === 0 ? <h2 className='text-2xl text-center font-sans font-bold'>No order to show.</h2> : orders.map((order)=> <OrderCard order={order} key={order._id}/>)}
      </div>
    </div>
  )}</div>;
};

export default Orders;
