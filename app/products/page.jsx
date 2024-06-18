import Link from "next/link";
import { getProducts } from "../helpers/api";
import { getSlug } from "../helpers/slugify";

export const metadata = {
    title: "Produkter",
};




export default async function Products() {
    const products = await getProducts();
    return (
        <>
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