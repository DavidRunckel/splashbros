"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MainLogo from '../../public/assets/mainlogo.png';
import AboutHouse from '../../public/assets/abouthouse.png';
import Wave from '../../public/assets/water.png';
import FormLogo from '../../public/assets/formlogo.png';
import FooterLogo from '../../public/assets/footerlogo.png';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <main className="flex min-h-screen flex-col">
      {/* Header Section */}
      <div className="relative w-full h-screen flex flex-col">
        <div className="absolute inset-0 bg-blue-500 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
          <source src="/assets/splashbackground.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-cyan-200 opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-70"></div>
        </div>
        
        <nav className={`w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Image src={MainLogo} alt="Splash Bros Logo" width={400} height={200} className="mr-6" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="text-lg font-semibold text-white hover:text-yellow-500 transition-colors">About</a>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="text-lg font-semibold text-white hover:text-yellow-500 transition-colors">Services</a>
              <a href="#form" onClick={(e) => handleSmoothScroll(e, '#form')} className="text-lg font-semibold text-white hover:text-yellow-500 transition-colors">Locations</a>
              <a href="#form" onClick={(e) => handleSmoothScroll(e, '#form')} className="px-6 py-2 bg-yellow-500 text-sky-800 rounded-full font-semibold hover:bg-blue-200 transition-colors">
                Contact Us
              </a>
            </div>
            {/* Hamburger Nav */}
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-sky-900 z-20">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  <a 
                    href="#about" 
                    onClick={(e) => handleSmoothScroll(e, '#about')} 
                    className="text-lg font-semibold text-white hover:text-yellow-500 transition-colors py-2 border-b border-sky-800"
                  >
                    About
                  </a>
                  <a 
                    href="#services" 
                    onClick={(e) => handleSmoothScroll(e, '#services')} 
                    className="text-lg font-semibold text-white hover:text-yellow-500 transition-colors py-2 border-b border-sky-800"
                  >
                    Services
                  </a>
                  <a 
                    href="#form" 
                    onClick={(e) => handleSmoothScroll(e, '#form')} 
                    className="text-lg font-semibold text-white hover:text-yellow-500 transition-colors py-2 border-b border-sky-800"
                  >
                    Locations
                  </a>
                  <a 
                    href="#form" 
                    onClick={(e) => handleSmoothScroll(e, '#form')} 
                    className="text-lg font-semibold text-white hover:text-yellow-500 transition-colors py-2"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
        
        <div className="container mx-auto px-4 flex-1 flex items-center z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Professional Pressure Washing & Soft Washing Services</h1>
            <p className="text-xl text-white mb-8">Revitalize your property with our expert cleaning solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#form" onClick={(e) => handleSmoothScroll(e, '#form')} className="px-8 py-3 bg-yellow-500 text-sky-900 rounded-full font-semibold text-lg hover:bg-blue-200 transition-colors text-center">
                Get a Free Quote
              </a>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-blue-200 hover:border-blue-200 transition-colors text-center">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
  
      {/* About Section */}
      <div id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-6 text-sky-900">Residential & Commerical Services</h3>
              <h2 className="text-4xl font-bold mb-6 text-sky-900">About Splash Bros.</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Splash Bros. Pressure and Softwash, we believe in more than just cleaning—we believe in building
                relationships. As a locally owned and operated pressure washing company in Athens, GA, we take pride
                in delivering top-quality service with a personal touch.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Say goodbye to stubborn dirt, grime, and mold that tarnish your property's curb appeal. Whether it's your
                siding, driveway, deck, patio, or roof, we've got you covered.
              </p>
              <a href="#form" onClick={(e) => handleSmoothScroll(e, '#form')} className="px-8 py-3 bg-yellow-500 text-sky-900 rounded-full font-semibold text-lg hover:bg-blue-200 transition-colors inline-block">
                Contact Us Today
              </a>
            </div>
            <div className="md:w-1/2">
              <Image 
                src={AboutHouse}
                alt="Pressure Washing Service"  
                height={500} 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling House Section */}
      <div id="locations" className="py-24 relative">
        <div className="absolute inset-0 bg-fixed" style={{ backgroundImage: "url('/assets/scrollinghouse.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-cyan-900 opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20 bg-cyan-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl font-bold text-sky-900 mb-4">YOUR PREMIER POWERWASHING SOLUTION</h2>
            <h1 className="text-4xl font-bold text-sky-900 mb-4">We are committed to excellence in every aspect of our power washing services.</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential to commercial, we specialize in revitalizing exteriors, restoring their beauty, and enhancing curb appeal.
              Explore our services and discover the difference we can make for your property!
            </p>
          </div>
          
          {/* Updated grid layout with 3 cards instead of 6 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-xl font-bold text-sky-900 mb-4">ADDITIONAL SERVICES INCLUDE:</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-bold text-sky-900 mb-4">Residential Power Washing:</h2>
              <ul className="list-disc pl-5">
                <li>Siding Cleaning</li>
                <li>Driveway Cleaning</li>
                <li>Walkway and Pathway Cleaning</li>
                <li>Patio and Deck Cleaning</li>
                <li>Fence Cleaning</li>
                <li>Garage Door Cleaning</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-sky-900 mb-4">Commercial Power Washing:</h2>
              <ul className="list-disc pl-5">
                <li>Storefront Cleaning</li>
                <li>Parking Lot Cleaning</li>
                <li>Sidewalk and Entryway Cleaning</li>
                <li>Awning Cleaning</li>
                <li>Dumpster Pad Cleaning</li>
                <li>Exterior Wall Cleaning</li>
                <li>Graffiti Removal</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-sky-900 mb-4">Roof Cleaning:</h2>
              <ul className="list-disc pl-5">
                <li>Asphalt Shingle Roof Cleaning</li>
                <li>Tile Roof Cleaning</li>
                <li>Metal Roof Cleaning</li>
                <li>Cedar Shake Roof Cleaning</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Fix wave image positioning to be at the very bottom */}
        <div className="w-full mt-12">
          <Image
            src={Wave}
            alt="Wave"
            className="w-full"
            style={{ marginBottom: "-97px" }} // This will ensure the wave connects perfectly with the next section
          />
        </div>
      </div>

      {/* 100% Satisfaction Guarantee Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-fixed" style={{ backgroundImage: "url('/assets/scrollinghouses.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-cyan-900 opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h3 className="text-2xl font-semibold text-white">Serving Athens, GA & Surrounding Areas</h3>
            <h2 className="text-7xl font-bold text-blue-200 mb-6">100% Satisfaction Guaranteed!</h2>
            <a href="#form" onClick={(e) => handleSmoothScroll(e, '#form')} className="px-16 py-6 bg-yellow-500 text-sky-900 rounded-full font-semibold text-2xl hover:bg-blue-200 transition-colors inline-block">
              Schedule Today
            </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center">
                <Image src={FormLogo} alt="Splash Bros Logo" width={450} height={250} className="mr-6" />
              </div>
              <h2 className="text-4xl font-bold text-sky-900 mb-6">Get Your FREE Quote Today!</h2>
              <p className="text-lg text-sky-900 mb-8">
                Fill out the form and we will contact you shortly to discuss your needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-bold text-sky-900">Phone</p>
                    <p className="text-sky-900">(720) 682-1853</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-bold text-sky-900">Email</p>
                    <p className="text-sky-900">clayton.faasen@thesplashbros.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-bold text-sky-900">Service Area</p>
                    <ul className='text-sky-900'>
                      <li>Athens-Clarke County, GA</li>
                      <li>Oconee County, GA</li>
                      <li>Oglethorpe County, GA</li>
                      <li>Madison County, GA</li>
                      <li>Jackson County, GA</li>
                      <li>Barrow County, GA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <iframe
                src="https://calendly.com/dar18977-uga"
                width="100%"
                height="600"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-sky-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <Image src={FooterLogo} alt="Splash Bros Logo" width={250} height={100} className="mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="text-blue-200 hover:text-white transition-colors">About</a></li>
                  <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="text-blue-200 hover:text-white transition-colors">Services</a></li>
                  <li><a href="#form" onClick={(e) => handleSmoothScroll(e, '#form')} className="text-blue-200 hover:text-white transition-colors">Locations</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>
                  <a href="tel:7206821853" className="text-blue-200 hover:text-white transition-colors">
                    (720) 682-1853
                  </a> 
                  </li>
                  <li>
                    <a href="mailto:clayton.faasen@thesplashbros.com" className="text-blue-200 hover:text-white transition-colors">
                      clayton.faasen@thesplashbros.com
                    </a>
                  </li> 
                  <li><a href="https://www.facebook.com/p/Splash-Bros-61565690108202/" className="text-blue-200 hover:text-white transition-colors">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-blue-800 text-center">
            <p className="text-white">© {new Date().getFullYear()} Splash Bros. Pressure and Softwash</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Service Card Component with Hover Effect
function ServiceCard({ title, description, image }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-sky-900 rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Image at the top */}
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        
        {/* Content area */}
        <div className="p-6 text-white">
          {isHovered ? (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p>{description}</p>
            </div>
          ) : (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-center">{title}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Services Data
const services = [
  {
    title: "Pressure Washing",
    description: "High-pressure washing for concrete, pavers, and other hard surfaces to remove stains, oil, gum, and built-up grime.",
    image: "/assets/card2.png"
  },
  {
    title: "Soft Washing",
    description: "Using low-pressure techniques and specialized eco-friendly detergents, we gently cleanse your exterior without causing damage.",
    image: "/assets/card1.png"
  },
  {
    title: "Oil & Rust Removal",
    description: "Utilizing specialized techniques and powerful yet safe cleaning agents, we target and eliminate oil and rust stains from driveways, garage floors, sidewalks, and other surfaces.",
    image: "/assets/card3.png"
  }
];