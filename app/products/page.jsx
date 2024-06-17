import Link from "next/link";
import { getSlug } from "../helpers/slugify";
import { getProducts } from "../helpers/api";

<<<<<<< HEAD
=======
export const metadata = {
    title: "Produkter",
};

async function getProducts(){
    const productsFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    const products = await productsFetch.json();
    return products;
}
>>>>>>> 0287188794006a4f4efe8b4ec62d49d562a5fd05


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