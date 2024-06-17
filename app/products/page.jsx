import Link from "next/link";
import { getSlug } from "../helpers/slugify";
import { getProducts } from "../helpers/api";



export default async function Products() {
    const products = await getProducts();
    return (
        <>
            <h1>Produkter</h1>
            <ul>
                {products.map( (products, index) => {
                    return (
                        <li key={index}>
                            <Link href = {"/products/" + getSlug(products.name)}>{products.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}