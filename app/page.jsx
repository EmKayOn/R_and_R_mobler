import Hero from "./components/Hero"
import React from "react";
import "./globals.css"
import ProductSection from "./components/ProductSection";

export const metadata = {
    title: "Hem sida",
};

export default function Page() {
    return (<>
            <Hero />
            <ProductSection />
            </>
    )
}