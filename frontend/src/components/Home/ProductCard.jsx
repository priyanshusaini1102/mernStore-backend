import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';


const Product = ({product}) => {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    }

    return (
        <Link className="productCard"  to={`/product/${product._id}`} >
            {/* <div className=' p-4 m-auto w-full hover:border hover:-translate-y-1 transition duration-700 border-black border-opacity-20 w-content inline-block'>
            <img className='h-60 w-60 object-cover ' src={product.images[0].url} alt={product.images[0].url}  />
            <p className=' font-serif capitalize text-black'>{product.name}</p>
            <div >
                <ReactStars classNames="m-0 p-0" {...options} /> <span className='text-sm'>(${product.numOfReviews} reviews)</span>
            </div>
            <span>${product.price}</span>
            </div> */}
           
            <div className=" w-60  m-4 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-300 transform transition cursor-pointer">
                <img className='h-60 object-cover' src={product.images[0].url} alt={product.images[0].url}/>
                <div className="p-5">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p className=' font-serif capitalize text-black'></p>
                    <div >
                        <ReactStars classNames="m-0 p-0" {...options} /> <span className='text-sm'>(${product.numOfReviews} reviews)</span>
                    </div>
                    <span>${product.price}</span>
                </div>
            </div>

            </Link>
    )
}

export default Product
