import React from 'react'
import Image from 'next/image'

function ProductBanner({product}) {
    return (
        <div>
            {product?.attributes?.banner?.data?.attributes?.url
            ?
                <Image 
                src={product?.attributes?.banner?.data?.attributes?.url}
                alt='product-details-banner'
                width={1200}
                height={500} 
                className='rounded-lg'
                /> :
                <div className='w-[700px] h-[250px] bg-slate-200 rounden-lg animate-pulse'>
                </div>
            }
            
        </div>
    )
}

export default ProductBanner
