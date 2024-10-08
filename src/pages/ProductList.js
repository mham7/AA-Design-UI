import React, { useContext } from 'react';
import ProductCard from "../components/ProductCard";
import { ProductContext } from '../contexts/ProductsProvider';
import AppLoader from '../loader/AppLoader';

const ProductCardList = () => {
  const productContext = useContext(ProductContext);
  const { products } = productContext || { products: [] };

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.categoryName]) {
      acc[product.categoryName] = [];
    }
    acc[product.categoryName].push(product);
    return acc;
  }, {});

  if (products.length === 0) {
    return (
      
        <AppLoader/>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col justify-center items-center">
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <ProductCard
            key={category}
            category={category}
            products={categoryProducts}
          />
        ))}


      </div>
    </div>
  );
};

export default ProductCardList;
