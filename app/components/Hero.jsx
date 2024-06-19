export default function Hero() {
    return (
        <>
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
        
        <img src="https://i.ibb.co/MMTXwwm/main.jpg" alt="Background Image" class="object-cover object-center w-full h-full" />
        <div class="absolute inset-0 bg-black opacity-5"></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-5">Välkommen till R&R Möbler</h1>
            <p className="text-lg text-gray-100 mb-8">Där stil möter komfort! Utforska vårt noggrant utvalda sortiment av möbler som förvandlar ditt hem till en oas av skönhet och funktionalitet.</p>
        </div>
        </div>
        </>
    )
}