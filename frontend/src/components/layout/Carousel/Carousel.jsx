import React from 'react';

const Carousel = ({images}) => {
    return (
        <div>
            <img className="m-auto p-5 border w-96 h-96 object-cover" src={ images[0].url} alt="product" />
        </div>
    )
}

export default Carousel
