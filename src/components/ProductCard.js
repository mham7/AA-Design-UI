import React from 'react';
import '../App.css';

const ProductCard = ({category, products}) => {

  const handleRedirection = (id) => {
    window.location.href = `/products/${id}`;
  } 

  return (
    <div>
    <h2 className="text-3xl font-semibold text-center mb-12 mt-12 font-verdana" style={{ color:'#917030' }}>{category}</h2>
      <div className="flex justify-center items-center gap-12 mx-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
           <div>
           <img src={product.imageUrl} alt={product.productName} onClick={() => handleRedirection(product.productId)} className="w-full h-full mt-6 mb-6 object-cover rounded-md cursor-pointer" />
            <h2 className='font-md font-semibold text-left mt-2 cursor-pointer' onClick={() => handleRedirection(product.productId)}>{product.productName}</h2>
            <h2 className='font-md text-left mt-2'>${product.productPrice}</h2>
            <button onClick={() => handleRedirection(product.productId)} className='mt-2 text-sm font-semibold text-black underline bg-white w-full mb-2 font-verdana'>Shop Now</button>
           </div>
           <div>
           </div>
          </div>
        ))}
      </div>
    </div>
  
  




    // <div className="w-1/2 p-2">
    // <a href={`/products/${id}`}>
    // <div className="bg-white rounded-md overflow-hidden  transform transition-transform hover:scale-105">
    //     <img className="w-full h-auto object-cover object-center px-40" src={image} alt={title} />
    //     <div className="p-4">
    //     </div>
    //   </div>
    // </a>
    // </div>
  );
};

export default ProductCard;
