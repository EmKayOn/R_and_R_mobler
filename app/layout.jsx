'use client'
import { Roboto } from "next/font/google"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import {    
    ClerkProvider,
    SignInButton, } from "@clerk/nextjs"
import "./globals.css"
import { CartContext } from "./_context/CartContext"
import { useState } from "react"

const inter = Roboto({ subsets : ["latin"], weight : "700"})

export default function RootLayout({ children }) {
    const [cart, setCart] = useState([]);
    
    return (
        <ClerkProvider>
            <CartContext.Provider value={{cart, setCart}}>
            <html lang="en">
                <body className={inter.className}>
                    <header>
                        <Navbar />
                    </header>
                    <main>
                    { children }
                    </main> 
                    
                    <Footer />
                </body>
            </html>
            </CartContext.Provider >
        </ClerkProvider>
    )
}