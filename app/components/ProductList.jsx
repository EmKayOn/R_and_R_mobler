import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  // Ensure productList is always an array
  const validProductList = Array.isArray(productList) ? productList : [];
  return (
    <div className='grid grid-col-2 sm:grid-cols-3 gap-3 md:grid-col-3 '>
            {validProductList.length > 0 ? (
                validProductList.map(item => (
                    <ProductItem product={item} key={item.id} />
                ))
            ) : (
                <p>No related products available.</p>
            )}
        </div>
  )
}

export default ProductList
