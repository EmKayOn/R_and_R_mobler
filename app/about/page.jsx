import Image
 from "next/image";
export const metadata = {
    title: "Om Oss",
};

export default function About() {
    return (
        <div className="bg-gray-50 text-gray-900 ">
        <main className="mx-auto max-w-screen-xl px-4 py-8 sm:px-12 sm:py-12 lg:px-8">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-200 pb-2">Om Oss</h2>
            <p className="mb-6 text-lg leading-relaxed">På R&R Möbler är vi experter på försäljning och tillverkning av högkvalitativa möbler. Vårt mål är att erbjuda dig de bästa och mest eleganta produkterna på marknaden. Vi tillverkar och skräddarsyr möbler enligt dina önskemål, med hjälp av vårt utbildade och engagerade team.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-200 pb-2">Vår Vision</h2>
            <p className="mb-6 text-lg leading-relaxed">Vi på R&R Möbler tror på mångfald och strävar efter att skapa marknadens största utbud inom heminredning. Vår vision är att göra det roligt och enkelt för dig som kund att hitta det du letar efter – oavsett vad det är. Vi erbjuder ett brett sortiment av produkter från olika stilar, material och prisklasser, så att du kan skapa ett hem som verkligen reflekterar din personlighet.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-200 pb-2">Din Inspiration</h2>
            <p className="mb-6 text-lg leading-relaxed">Vi tror att vem som helst kan vara en inspiration. Därför ger vi dig nycklarna att forma ditt hem precis som du vill ha det. Vårt team arbetar ständigt med att utöka vårt sortiment med olika stilar, smaker, ursprung, material och prisklasser, så att du enkelt kan hitta allt du behöver för ditt hem hos oss.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-200 pb-2">Vår Erfarenhet</h2>
            <p className="mb-6 text-lg leading-relaxed">Trots att R&R Möbler är en relativt ny e-handelsplats för heminredning, har vi många års erfarenhet inom branschen. Vi strävar efter att göra din shoppingupplevelse enkel, inspirerande och rolig. Från det första mötet med oss, genom hela köpprocessen, i kontakten med vår kundtjänst och fram till att produkten är levererad och på plats hemma hos dig, vill vi ge dig en positiv upplevelse.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-200 pb-2">Besök Oss</h2>
            <p className="mb-6 text-lg leading-relaxed">Vi välkomnar dig att besöka vårt showroom på Linköpingsvägen 23, 612 34 Finspång.</p>
            <ul className="list-disc list-inside text-lg">
              <li><strong>Öppettider:</strong></li>
              <li>Måndag till fredag: 09:00 - 18:00</li>
              <li>Lördag: 10:00 - 16:30</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-200 pb-2">Kontakta Oss</h2>
            <p className="mb-6 text-lg leading-relaxed"><strong>Bolagsinformation:</strong></p>
            <ul className="list-disc list-inside text-lg">
              <li>R & R Svets AB</li>
              <li>Org.nr: 559207-2895</li>
              <li>Telefon: +46 702 209 414 / 011 711 41</li>
              <li>Adress: Linköpingsvägen 23, 612 34 Finspång</li>
              <li>E-post: <a href="mailto:info@rr-mobler.se" className="text-blue-500 underline">info@rr-mobler.se</a></li>
            </ul>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 R&R Möbler. Alla rättigheter förbehållna.</p>
          </div>
        </footer>
      </div>
    );
}


//src="https://i.ibb.co/MMTXwwm/main.jpg"