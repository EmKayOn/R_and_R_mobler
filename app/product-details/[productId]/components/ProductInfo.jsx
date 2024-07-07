'use client'
import React, { useContext } from 'react'
import { AlertOctagon, BadgeCheck, Link, ShoppingCart } from 'lucide-react'
import SkelitonProductInfo from './SkelitonProductInfo'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApis from '../../../_utils/CartApis'
import { CartContext } from '../../../_context/CartContext'

function ProductInfo({product}) {
    const {cart, setCart} = useContext(CartContext)
    const { user } = useUser();
    const router = useRouter();
    const handleAddToCart = ()=>{
        if(!user){
            router.push('/sign-in')
        }else{
            const data = {
                data: {
                    username: user.fullName,
                    email: user.primaryEmailAddress.emailAddress,
                    products: [product?.id]
                }
            }
            CartApis.addToCart(data).then(res=>{
                console.log('cart created successfully', res.data.data)
                setCart(oldCart=>[
                    ...oldCart,
                    {
                        id:res?.data?.data?.id,
                        product
                    }
                ])
            }).catch(error=>{
                console.log('error', error)
            })
        }
    }
    return (
        <div>
            {product?.id ? 
                <div className='ml-4 mt-4'>
                    <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
                    <h2 className='text-[15px] text-gray-400'>{product?.attributes?.categories}</h2>
                    <h2 className='text-[11px] mt-5'>{product?.attributes?.description[0]?.children[0].text}</h2>
                    <h2 className='text-[11px] text-gray-500 flex gap-2 items-center mt-6'>{product?.attributes?.finnsILager ? <BadgeCheck className='text-green-500 h-5 w-5 '/> : <AlertOctagon className='text-red-500 h-5 w-5 ' />}Finns I Lager</h2>
                    <h2 className='text-[32px] text-teal-500 mt-2 r'>{product?.attributes?.price} Kr</h2>
                    <button onClick={()=>handleAddToCart()} className='flex gap-2 bg-teal-500 hover:bg-teal-600 p-3 rounded-lg text-white'>
                        <ShoppingCart/>Lägg till i kundvagn
                    </button>
                </div>
                :
                <SkelitonProductInfo />
            }
        </div>
    )
}

export default ProductInfo
