'use client'

import React, {useEffect, useState} from 'react'
import ProductApis from '../../_utils/ProductApis'
import BreadCrumb from '../../components/BreadCrumb'
import ProductBanner from './components/ProductBanner'
import ProductInfo from './components/ProductInfo'
import ProductList from '../../components/ProductList'
import { usePathname } from 'next/navigation'

function productDetails({params}) {
    const path = usePathname();
    console.log('path',path)
    const [productDetails,setProductDetails] = useState({})
    const [productList, setProductList] = useState({})
    useEffect(()=>{
        getProductById_();
    },[params?.productId])

    
    const getProductById_= ()=>{
        ProductApis.getProductById(params?.productId).then(res=>{
            console.log('product item', res.data.data)
            setProductDetails( res.data.data)
            getProductListByCategory( res.data.data)
            })

    const getProductListByCategory = (product)=>{
        ProductApis.getProductsByCategory(product?.attributes.categories)
            .then(res=>{
            console.log(res?.data?.data)
            setProductList(res?.data?.data)     
        })
        }
    }
    return (
        <div className='px-10 py-8 md:px-28 '>
        <BreadCrumb path={path}/>
        <div className='grid justify-around grid-cols-1 gap-5 sm:grid-cols-2  sm:gap-0 mt-10 '>
            <ProductBanner product={productDetails}/>
            <ProductInfo product={productDetails} />
        </div>
            <div>
                <h2 className='mt-24 mb-8 text-xl'>Relaterade produkter</h2>
                <ProductList productList={productList}/>
            </div>
        </div>
    );
}

export default productDetails;
