import React,{ Fragment, useEffect, useState} from 'react';
import Loader from '../layout/loader/Loader';
import ProductCard from '../product/ProductCard';
import MetaData from "../layout/MetaData";
import { getProduct} from '../../actions/productAction';
import {useSelector,useDispatch} from 'react-redux';
import {useAlert} from 'react-alert';
import {useParams} from 'react-router-dom';
import Pagination from "react-js-pagination";

const Products = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const {keyword} = useParams();
    const {products,error,loading,productsCount,resultPerPage} = useSelector((state)=> state.productsState);
    const [currentPage,setCurrentPage] = useState(1);
    const setCurrentPageNumber = (e) => {
        setCurrentPage(e);
    }

    useEffect(() => {
        if(error) {
            alert.error(error);
        }
        dispatch(getProduct(keyword,currentPage));
    },[dispatch,alert,error,keyword,currentPage]);
    return <Fragment>
            {loading ? <Loader /> : 
            <Fragment>
            <MetaData title="My Store | Products" />
            <h2 id="featuredProduct" className="text-center text-xl p-3 mx-auto mt-6   ">Products</h2>
            <div className="bg-black h-0.5 w-60 mx-auto my-2"></div>

            <div className="flex basis-5 flex-row flex-wrap justify-center" >
                {products && products.map((product)=> <ProductCard product={product} key={product._id}/>)}
            </div>
            <div className="text-center m-3">
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={products.length}
                    onChange={setCurrentPageNumber}
                    nextPageText="Next"
                    prevPageText="Prev" 
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="p-2 text-center inline border-y-2 px-3 hover:bg-black hover:text-white border-black "
                    linkClass=""
                    activeClass="bg-black  p-2 text-white cursor:default"
                    activeLinkClass="font-bold  "
                />
            </div>
            <p className="text-center font-bold text-black">{products.length>0 ? products.length : `No`} products are available.</p>
            </Fragment>
            }

        </Fragment>
    
};

export default Products;
