import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className='grid grid-col-2 sm:grid-cols-3 md:grid-col-4 gap-3'>
      {productList.map(item=>(
        <ProductItem product={item} key={item.id}/>
      ))}
    </div>
  )
}

export default ProductList
