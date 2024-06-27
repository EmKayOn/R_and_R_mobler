import { Roboto } from "next/font/google"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import "./globals.css"

const inter = Roboto({ subsets : ["latin"], weight : "700"})
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                { children }
                <Footer />
            </body>
        </html>
    )
}