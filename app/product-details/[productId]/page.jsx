'use client'

import React, {useEffect} from 'react'
import ProductApis from '../../_utils/ProductApis'

function productDetails({params}) {
    useEffect(()=>{
        getProductById();
    },[params?.productId])

    
    const getProductById=()=>{
        ProductApis.getProductById(params?.productId).then(res=>{
            console.log('product item', res.data.data)
        })
    }
    
    return (
        <div>
        {params?.productId}
        </div>
    )
    }

export default productDetails
