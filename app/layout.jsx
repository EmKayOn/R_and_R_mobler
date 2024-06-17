import Link from "next/link"
import "./input.css"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>R&R</h1>
                <nav>
                    <Link href="/">Hem</Link>
                    <Link href="/about">Om oss</Link>
                    <Link href="/products">Produkter</Link>
                </nav>
                {children}
                <footer>Footer</footer>
            </body>
        </html>
    )
}