import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import Product from './Product';
import './Home.css';

const product = {
    name:"Blue Dart Mic ",
    price:22,
    _id: "calcetto",
    images:[{url:"https://www.shutterstock.com/image-photo/yellow-tennis-modern-shoes-isolated-on-1115795330"}]

};

const Home = () => {
  return (
    <Fragment>
      <div className="banner p-6 cursor-default bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center min-h-full flex flex-col content-center justify-center items-center m-0 ">
          <div className="">
            <p className="text-center text-3xl text-black font-bold  m-5">Welcome To My Store</p>
            <h1 className="text-center text-md text-white m-3">Find Amazing Products Below </h1>
            <a href="#container" className="text-center">
            <button className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Scroll <FontAwesomeIcon icon={faMouse} size="sm" />
            </button>
            </a>
          </div>
      </div>

      <h2 className="text-center text-xl p-3 mx-auto mt-6   ">Featured Product</h2>
      <div className="bg-black h-0.5 w-60 m-auto"></div>

      <div className="flex basis-5 flex-row flex-wrap justify-center" >
          <Product  product={product} />
          <Product  product={product} />
          <Product  product={product} />
          <Product  product={product} />
          <Product  product={product} />
          <Product  product={product} />
          <Product  product={product} />
          <Product  product={product} />
          <Product  product={product} />
          <Product  product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
