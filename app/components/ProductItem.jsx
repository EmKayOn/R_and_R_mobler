import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { List } from 'lucide-react'

function ProductItem({product}) {
    return (
        <Link href ={`/product-details/${product?.id}`} className='hover:border p-1 hover:shadow-md rounded-lg border-teal-400 hover:cursor-pointer'>
            <Image src={product?.attributes?.banner?.data?.attributes?.url} 
            alt='banner-card' 
            width={600} 
            height={350} 
            className='rounded-t-lg h-[170px] object-cover'
            />
            <div className='flex justify-between p-3 items-center rounded-b-lg bg-gray-50'>
            <div className=''>
                <h2 className='text-[12px] font-medium line-clamp-1'>{product?.attributes?.title}</h2>
                <h2 className='text-[10px] text-gray-400 flex gap-1 items-center'>
                    <List className='w-4 h-4' />
                    {product?.attributes?.category}
                </h2>
            </div>
            <h2>{product?.attributes?.price}</h2>
            </div>
        </Link>
    )
}

export default ProductItem


/*
images 
            {product?.attributes?.image?.data?.map((imageData, index) =>(
    <Image  
    key={index}
    src={imageData?.attributes?.url}
    alt={`banner-card-${index}`}
    width={400}
    height={350}
    className='rounded-t-lg'/>
))}*/