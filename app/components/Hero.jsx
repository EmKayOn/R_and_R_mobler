import Image from "next/image"
import React from "react"


export default function Hero() {
    return (
        <>

        <section className="relative">
            {/* Background image and overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-white bg-opacity-50 pr-6"></div>
                <Image
                src="/HERO.jpg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="sm:bg-transparent "
                />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r  sm:bg-transparent"></div>

            {/* Content */}
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl text-center sm:text-left p-6 bg-white bg-opacity-75 rounded-lg shadow-lg">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Utforska Vår {' '}
                    <strong className="block font-extrabold text-teal-600">Elegant Möbler.</strong>
                </h1>

                <p className="mt-4 max-w-lg text-gray-600 sm:text-xl/relaxed">
                Upptäck den perfekta blandningen av komfort och stil med vår exklusiva kollektion. Från tidlösa klassiker till moderna mästerverk, vi har något för varje smak.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
                    <a
                    href="/products"
                    className="block w-full sm:w-auto rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500"
                    >
                    Handla Nu
                    </a>

                    <a
                    href="#"
                    className="block w-full sm:w-auto rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-rose-500"
                    >
                    Learn More
                    </a>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

