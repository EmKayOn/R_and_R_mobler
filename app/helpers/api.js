
import { getSlug } from "./slugify";

export async function getProducts(){
    const productsFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    const products = await productsFetch.json();
    return products;
}


export async function getProduct(name){
    const products = await getProducts();
    const product = products.filter(item => getSlug(name) === getSlug(item.name))[0];
    console.log(product);
    return product;
}