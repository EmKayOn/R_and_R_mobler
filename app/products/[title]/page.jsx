import { getProduct } from "../../helpers/api"


export default async function product({params}) {
    const product = await getProduct(params.title)
    return (
        <>
            {product.title}
        </>
    )
}
