import Hero from "./components/Hero"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import "./globals.css"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <Hero />
                { children }
                <Footer />
            </body>
        </html>
    )
}