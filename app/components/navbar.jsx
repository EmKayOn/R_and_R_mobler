'use client'
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import {    
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    UserProfile,
    useClerk,
    useUser} from "@clerk/nextjs"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../_context/CartContext"
import CartApis from "../_utils/CartApis"





export default function Navbar(){
    const { user }= useUser();
    
    //sign-in
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(()=>{
        setIsLoggedIn(window.location.href.toString().includes('sign-in'))
    },[])
    
    //context-cart///////////
    const {cart, setCart} = useContext(CartContext)
    ///////If user is authenticated fetch cart//////

    useEffect(()=>{
        user&&getCartItems();
    },[user])
    const getCartItems = ()=>{

            CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress)
            .then((res) => {
                console.log('Response from cart items:', res?.data?.data);
                res?.data?.data.forEach(citem=>{
                    setCart((oldCart)=>[
                        ...oldCart,
                        {
                            id: citem.id,
                            product: citem?.attributes?.product?.data[0]
                        }
                    ])
                })
            })
    }
    //////////

    return !isLoggedIn && (
        <>
        <header className="bg-white sticky py-2 top-0 z-50 shadow-md">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="/">
                    <span className="sr-only">Home</span>
                
                    <Image  src = '/1.png' alt="Logo" width={170} height={60}/>
                    </a>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                        <Link className="text-gray-700 transition hover:text-gray-500/75" href="/about"> Om Oss </Link>
                        </li>

                        <li>
                        <Link className="text-gray-700 transition hover:text-gray-500/75" href="/catagories" > Catagories </Link>
                        </li>

                        <li>
                        <Link className="text-gray-700 transition hover:text-gray-500/75" href="/products"> Produkter </Link>
                        </li>

                    </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">

                    <div className="flex items-center gap-5">
                        <SignedOut>
                            <SignInButton/>
                        </SignedOut>
                        <SignedIn>
                            <h2 className="flex gap-1 cursor-pointer"><ShoppingCart/>({cart?.length})</h2>
                            <UserButton />
                        </SignedIn>
                    </div>
                    </div>

                    <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </header>
        </>
    )
}