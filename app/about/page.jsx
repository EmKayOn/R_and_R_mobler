export const metadata = {
    title: "Om Oss",
};

export default function About() {
    return (
        <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
        <div className="mt-40 w-full max-w-[1275px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
                  About
                </div>
                <div className="mt-6 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
                  Subheading for description or instructions
                </div>
                <div className="mt-6 text-xl font-medium leading-8 max-md:max-w-full">
                  Body text for your whole article or post. We’ll put in some
                  lorem ipsum to show how a filled-out page might look:
                  <br />
                  <br />
                  Excepteur efficient emerging, minim veniam anim aute carefully
                  curated Ginza conversation exquisite perfect nostrud nisi
                  intricate Content. Qui international first-class nulla ut.
                  Punctual adipisicing, essential lovely queen tempor eiusmod
                  irure. Exclusive izakaya charming Scandinavian impeccable aute
                  quality of life soft power pariatur Melbourne occaecat
                  discerning. Qui wardrobe aliquip, et Porter destination Toto
                  remarkable officia Helsinki excepteur Basset hound. Zürich
                  sleepy perfect consectetur.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://i.ibb.co/MMTXwwm/main.jpg"
                className="grow w-full aspect-[0.78] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
}