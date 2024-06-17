import Link from "next/link"


export default function Navbar(){
    return (
        <>


                    <nav className="flex gap-5 justify-end items-start py-16 pr-9 pl-20 bg-white shadow-sm max-md:flex-wrap max-md:px-5">
                    <Link className="grow my-auto text-2xl text-black"  href="/">R&R.</Link>
                    <div className="flex gap-5 justify-between py-px my-auto text-base leading-6 whitespace-nowrap text-neutral-700">
                        <div className="flex gap-2">
                        <button><Link href="/products">Produkter</Link></button>
                        </div>
                        <div className="flex gap-2">
                        <div><Link href="/about">Om oss</Link></div>
                        </div>
                        <div>Inspirations</div>
                    </div>
                    <div className="flex gap-3 self-start pb-6 mt-2 text-sm leading-5 bg-white text-zinc-600 max-md:flex-wrap">
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5ed47e7cf5a1dc9507a019a912cd7c48ebe13efb2cd24b74a44381079325215?"
                        className="shrink-0 self-start aspect-[1.32] w-[21px]"
                        />
                        <div className="flex-auto max-md:max-w-full">
                        Search for minimalist chair
                        </div>
                    </div>
                    <div className="flex gap-5 self-start py-2.5 pr-20">
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/59f4c3b13db05d570288452379a44fc55260689d84d7f7f284f4e0a1de2cef13?"
                        className="shrink-0 w-6 aspect-square"
                        />
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/85a00d032cb20242bd4232f34de96c0972e55dcb5478414a23fbcc6590962c49?"
                        className="shrink-0 w-6 aspect-square"
                        />
                    </div>
                    </nav>

        </>
    )
}