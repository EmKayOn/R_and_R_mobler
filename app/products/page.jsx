import Link from "next/link";

async function getProducts(){
    const productsFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    const products = await productsFetch.json();
    return products;
}

function getSlug(item){
    return item.replace(/ /g, "_").replace(/\./g, "").toLowerCase()
}

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