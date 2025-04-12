import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from "react";


const roomImages = [
  "/images/slider/slide1.jpeg",
  "/images/slider/slide2.jpg",
  "/images/slider/slide3.jpeg",
  "/images/slider/slide4.jpeg",
  "/images/slider/slide5.jpg",
  "/images/slider/slide6.jpg",
  "/images/slider/slide7.jpeg",
  "/images/slider/slide8.jpeg",
  "/images/slider/slide9.jpeg",
];



function App() {
  const [currentRoomSlide, setCurrentRoomSlide] = useState(0);
  const contactMeRef = useRef(null);

  useEffect(() => {
    const roomInterval = setInterval(() => {
      setCurrentRoomSlide((prevSlide) => (prevSlide + 1) % roomImages.length);
    }, 3000);
    return () => clearInterval(roomInterval);
  }, []);

  const scrollToContactMe = () => {
    contactMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/headerImage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">THE KOST RED PALM</h1>
          <button 
            onClick={scrollToContactMe}
            className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:scale-105 transition-transform">
              ORDER NOW
          </button>
        </div>
      </section>


      {/* Fasilitas Section */}
      <section className="bg-gray-900 text-white py-12">
        <h2 className="text-2xl font-bold text-center mb-10">FASILITAS</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow">

            <h3 className="text-xl font-semibold mb-4">Kamar Lantai Bawah</h3>
            <img className="card-img-top h-60 w-full object-cover mb-4" src="/images/image1.jpeg" alt="lantaiAtas" />
            <ul className="list-disc pl-5 space-y-2">
              <li>Kamar 3x3</li>
              <li>Kasur 160x200</li>
              <li>AC</li>
              <li>Lemari</li>
              <li>Meja rias + Meja Dinding</li>
              <li>Ruangan Dapur</li>
              <li>Kamar Mandi Dalam</li>
              <li>Listrik (Pribadi)</li>
              
            </ul>
            <div className='flex item-center ' >
              <svg className="mt-5"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="60"
                viewBox="0 0 34 30"
                fill="none"
              >
                <path
                  d="M17.4637 2.50439C12.1305 2.50439 7.81708 6.35227 7.81708 11.1099C7.81708 17.564 17.4637 27.0915 17.4637 27.0915C17.4637 27.0915 27.1102 17.564 27.1102 11.1099C27.1102 6.35227 22.7968 2.50439 17.4637 2.50439ZM17.4637 14.1833C15.5619 14.1833 14.0184 12.8064 14.0184 11.1099C14.0184 9.41336 15.5619 8.03649 17.4637 8.03649C19.3654 8.03649 20.9089 9.41336 20.9089 11.1099C20.9089 12.8064 19.3654 14.1833 17.4637 14.1833Z"
                  fill="black"
                />
              </svg>
              <span className='mt-3'>
                Jl. Lingkar Timur UNUD Jl. Merdeka No. 21, Jimbaran, Kuta
                Selatan, Badung, Bali Badung, Bali 80361
              </span>
            </div>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow">
                  
            <h3 className="text-xl font-semibold mb-4">Kamar Lantai Atas</h3>
            <img className="card-img-top h-60 w-full object-cover mb-4" src="/images/image2.jpeg" alt="lantaiAtas" />
            <ul className="list-disc pl-5 space-y-2">
              <li>Kamar 3x3</li>
              <li>Kasur 160x200</li>
              <li>AC</li>
              <li>Lemari</li>
              <li>Meja rias + Meja Dinding</li>
              <li>Kamar Mandi Dalam</li>
              <li>Listrik (Pribadi)</li>
              
            </ul>
            <div className='flex item-center ' >
              <svg className="mt-5"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="60"
                viewBox="0 0 34 30"
                fill="none"
              >
                <path
                  d="M17.4637 2.50439C12.1305 2.50439 7.81708 6.35227 7.81708 11.1099C7.81708 17.564 17.4637 27.0915 17.4637 27.0915C17.4637 27.0915 27.1102 17.564 27.1102 11.1099C27.1102 6.35227 22.7968 2.50439 17.4637 2.50439ZM17.4637 14.1833C15.5619 14.1833 14.0184 12.8064 14.0184 11.1099C14.0184 9.41336 15.5619 8.03649 17.4637 8.03649C19.3654 8.03649 20.9089 9.41336 20.9089 11.1099C20.9089 12.8064 19.3654 14.1833 17.4637 14.1833Z"
                  fill="black"
                />
              </svg>
              <span className='mt-3'>
                Jl. Lingkar Timur UNUD Jl. Merdeka No. 21, Jimbaran, Kuta
                Selatan, Badung, Bali Badung, Bali 80361
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Foto Kamar - Slider */}
      <section className="bg-white py-12">
        <h2 className="text-2xl font-bold text-center mb-8">FOTO KAMAR</h2>
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="w-full h-[400px] md:h-[600px] rounded-2xl shadow-xl bg-center bg-cover transition-all duration-700 "
            style={{ backgroundImage: `url('${roomImages[currentRoomSlide]}')` }}
          ></div>
        </div>
      </section>

      {/* Video dan Lokasi */}
      <section className="bg-gray-900 text-white py-12">
        <h2 className="text-2xl font-bold text-center mb-8">VIDEO DAN LOKASI</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

       
          <iframe className="youtube rounded-xl shadow-lg w-full object-cover" width="600" height="400" src="https://www.youtube.com/embed/21oqh7EaV18?si=xf3LzbITHU9RJsk0&amp;start=8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          <iframe className="lokasi rounded-xl shadow-lg w-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.8571012504096!2d115.17876743847658!3d-8.799520412300073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd245bf678c7183%3A0xf7949a9a66772b7a!2sThe%20Kost%20Red%20Palm!5e0!3m2!1sid!2sid!4v1703211995351!5m2!1sid!2sid" width="600" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section ref={contactMeRef} className="bg-white py-12 text-center">
        <a href="https://wa.me/6281916053551" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-xl shadow-md transition">
          Hubungi WA
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-sm py-6 border-t-4 border-orange-600 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center flex-wrap gap-2">
            <span>Developer by:</span>
            <span className="bg-gray-700 px-2 py-1 rounded font-bold">IKO PRASTYA</span>
            <span>&copy; 2025</span>
          </div>
          <div className="text-right">
            <span>| React | The Kost Red Palm</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
