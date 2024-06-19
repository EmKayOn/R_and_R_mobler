import { getSlug } from "../../helpers/slugify";
import { getProduct } from "../../helpers/api";

export default async function Product({params}) {
    const product = await getProduct(params.name)

    return (
        <>
            
            
        </>
    )
}