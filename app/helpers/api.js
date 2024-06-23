
import { getSlug } from "./slugify";

export async function getProducts(){
    const productsFetch = await fetch("https://fakestoreapi.com/products");
    const products = await productsFetch.json();
    return products;
}


export async function getProduct(name){
    const products = await getProducts();
    const product = products.filter(item => getSlug(name) === getSlug(item.title))[0];
    console.log(product);
    return product;
}