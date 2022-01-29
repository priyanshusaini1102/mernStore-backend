import React, { Fragment, useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { clearErrors, getProductDetails } from '../../actions/productAction';
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import Loader from '../layout/loader/Loader';
import ReactStars from 'react-rating-stars-component';
import Carousel from '../layout/Carousel/Carousel';
import ReviewCard from './ReviewCard';
import MetaData from '../layout/MetaData';


const ProductDetails = () => {

    const alert = useAlert();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product,loading,error } = useSelector((state) => state.productDetailsState);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        if(error){
                    alert.error(error);
                    dispatch(clearErrors());
                  }

        dispatch(getProductDetails(id));
    }, [dispatch,id,error,alert]);
    
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    }
    return (
        <Fragment>

        {loading ? <Loader /> : 
            <Fragment>
                <MetaData title={`My Store | ${product.name}`} />
                <div className='flex flex-row  flex-wrap '>

                    <div className='lg:flex-1 flex-none m-auto   '>
                        {product.name && <Carousel images={product.images}/>}
                    </div>
                    {/* Product Heading Section */}
                    <div className="flex-1 p-4 border-l-4 my-2 border-black ">
                    <h1 className="text-3xl font-bold mb-3 capitalize">{product && product.name}</h1>
                    <div className="flex flex-row flex-nowrap" >
                        <ReactStars classNames="m-0 p-0" {...options} /> <span className='whitespace-nowrap ml-4 justify-center items-center'>({product.numOfReviews} ratings)</span>
                    </div>
                    <h2 className="text-lg text-gray-600 font-thin m-3  ml-0 ">Price : <span className='text-sm'>₹</span>{product.price}</h2>
                    {/* Product Buy Section */}
                    <div className="flex flex-row ">
                    <div className='mx-3 ml-0 border flex flex-row  border-black rounded w-fit '>
                        <button className="flex-none px-3 py-1 rounded-sm  hover:shadow-black " onClick={()=>setQuantity(quantity-1)}>-</button>
                            <p  name="qty"  className="flex-none w-12 p-2  text-center bg-gray-100 outline-none">{quantity}</p>
                        <button className="flex-none px-3 py-1 mr-0 rounded-sm " onClick={()=>setQuantity(quantity+1)}>+</button>
                    </div>
                        <button type="button" className="whitespace-nowrap lg:ml-2 ml-0 px-3 py-1 m-1 text-yellow-800 border border-yellow-800 rounded-md  hover:bg-yellow-800 hover:text-white">
                        Add To Cart
                    </button>
                    </div>
                    <p className="text-xs  font-serif font-thin text-gray-500">Status:<span className="text-xs ml-1 font-serif font-thin text-green-500">In Stock</span></p>
                    <button type="button" className="px-6 py-2 ml-0 m-1 mt-5  lg:w-fit md:w-fit w-full text-black border border-black rounded-md  hover:bg-gray-800 hover:text-white">
                        Buy Now
                    </button>
                    {/* Product Description Section */}
                    <p className="text-lg font-semibold mt-6 ">About this item</p>
                    <p className="text-gray-800">{product.description}</p>
                    <button type="button" className="whitespace-nowrap px-6 py-2 ml-0 m-1 mt-5 text-gray-800 border border-gray-400 rounded-md  hover:bg-gray-200 hover:text-black">
                        Submit Review
                    </button>
                    </div>
                </div>
                {/* Reviews Scetion */}
                <div className=" border-black border-t-2 border-b-2 rounded-lg shadow-lg my-6  m-3">
                <h3 className="text-2xl font-bold text-black mx-4">Reviews</h3>

                {product.reviews && product.reviews[0] ? (
                    <div className=" m-4 shadow-md rounded-xl p-2 ">
                        {product.reviews && product.reviews.map((review)=> <ReviewCard review={review} key={review._id}/>)}
                    </div>
                ) : (
                    <p className="text-sm mx-4 font-bold underline p-2 pl-0 ">No Reviews Yet</p>
                    )}
                    </div>
            </Fragment>
        }
        
        </Fragment>
    )
}

export default ProductDetails;
