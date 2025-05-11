// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#2bd876]">Farmly</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#2bd876] transition duration-300 cursor-pointer">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#2bd876] transition duration-300 cursor-pointer">How It Works</a>
            <a href="#about" className="text-gray-700 hover:text-[#2bd876] transition duration-300 cursor-pointer">About</a>
            <a href="#contact" className="text-gray-700 hover:text-[#2bd876] transition duration-300 cursor-pointer">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Link to="/auth" className="text-gray-700 hover:text-[#2bd876] transition duration-300 cursor-pointer">
            <button className="bg-[#52df8f] hover:bg-[#2bd876] text-white font-semibold py-2 px-6 rounded-lg transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              Sign In
            </button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none cursor-pointer">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 py-5 shadow-md">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-[#2bd876] transition duration-300 cursor-pointer">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-[#2bd876] transition duration-300 cursor-pointer">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-[#2bd876] transition duration-300 cursor-pointer">About</a>
              <a href="#contact" className="text-gray-700 hover:text-[#2bd876] transition duration-300 cursor-pointer">Contact</a>
              <Link to="/auth" className="text-gray-700 hover:text-[#2bd876] transition duration-300 cursor-pointer">
              <button className="bg-[#52df8f] hover:bg-[#2bd876] text-white font-semibold py-2 px-6 rounded-lg transition duration-300 !rounded-button whitespace-nowrap cursor-pointer" >
                Sign In
              </button>
              </Link> 
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20farm%20landscape%20with%20rolling%20green%20fields%2C%20morning%20sunlight%2C%20and%20a%20modern%20sustainable%20farming%20operation%20with%20vibrant%20crops%2C%20soft%20misty%20atmosphere%2C%20high%20quality%20professional%20photography%2C%20natural%20lighting%2C%20serene%20rural%20scene&width=1440&height=800&seq=hero1&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.8'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Empowering Farmers, Connecting Buyers
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Join Farmly – your trusted marketplace for fresh produce. We bridge the gap between farmers and buyers, creating a sustainable ecosystem for all.
            </p>
            <Link to="/auth" className="text-gray-700 hover:text-[#2bd876] transition duration-300 cursor-pointer">
            <button className="bg-gradient-to-r from-[#2bd876] to-[#52df8f] hover:from-[#52df8f] hover:to-[#2bd876] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer">
              Get Started
            </button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <i className="fas fa-chevron-down text-[#2bd876] text-2xl"></i>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 bg-[#f6fdfa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Core Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how Farmly revolutionizes agricultural commerce with our innovative platform features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#c1f4d7] rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
              <div className="text-center mb-4">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Produce Listings</h3>
                <p className="text-gray-600">
                  Easily create and browse detailed listings of fresh farm produce with quality indicators and availability.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#c1f4d7] rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
              <div className="text-center mb-4">
                <div className="text-4xl mb-4">🗣️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Buyer Chat</h3>
                <p className="text-gray-600">
                  Direct communication between farmers and buyers ensures clear expectations and builds lasting relationships.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#c1f4d7] rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
              <div className="text-center mb-4">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Live Dashboard</h3>
                <p className="text-gray-600">
                  Track your sales, inventory, and market trends with our intuitive real-time dashboard.
                </p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-[#c1f4d7] rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
              <div className="text-center mb-4">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Payments</h3>
                <p className="text-gray-600">
                  Our trusted payment system ensures timely, secure transactions between all parties.
                </p>
              </div>
            </div>
            
            {/* Feature 5
            <div className="bg-[#c1f4d7] rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
              <div className="text-center mb-4">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Geo-matching</h3>
                <p className="text-gray-600">
                  Connect with local buyers and sellers to reduce transportation costs and environmental impact.
                </p>
              </div>
            </div> */}
            
            {/* Feature 6 */}
            {/* <div className="bg-[#c1f4d7] rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
              <div className="text-center mb-4">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Multilingual</h3>
                <p className="text-gray-600">
                  Break language barriers with our multilingual platform, connecting farmers and buyers globally.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with Farmly is simple. Follow these easy steps to begin your journey.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/3">
              <div className="w-16 h-16 rounded-full bg-[#2bd876] flex items-center justify-center text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sign Up</h3>
              <p className="text-gray-600 px-4">
                Create your account as a farmer or buyer in just minutes.
              </p>
            </div>
            
            {/* Connector */}
            <div className="hidden md:block w-16 h-1 bg-[#79e7a8]"></div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/3">
              <div className="w-16 h-16 rounded-full bg-[#2bd876] flex items-center justify-center text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">List or Find</h3>
              <p className="text-gray-600 px-4">
                Post your produce or browse available listings in your area.
              </p>
            </div>
            
            {/* Connector */}
            <div className="hidden md:block w-16 h-1 bg-[#79e7a8]"></div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center md:w-1/3">
              <div className="w-16 h-16 rounded-full bg-[#2bd876] flex items-center justify-center text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Connect & Trade</h3>
              <p className="text-gray-600 px-4">
                Chat, negotiate, and complete secure transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#f6fdfa]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Farmly, we're dedicated to transforming agricultural commerce by directly connecting farmers with buyers. Our platform eliminates unnecessary middlemen, ensuring farmers receive fair compensation for their hard work while buyers access fresher produce at better prices.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe in sustainable farming practices and supporting local economies. By facilitating direct connections, we reduce food miles and help build stronger communities.
              </p>
              
            </div>
            
            <div className="md:w-1/2 overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Diverse%20group%20of%20farmers%20and%20buyers%20collaborating%20at%20a%20modern%20farmers%20market%2C%20exchanging%20fresh%20produce%2C%20using%20tablets%20and%20smartphones%2C%20surrounded%20by%20colorful%20fruits%20and%20vegetables%2C%20bright%20natural%20lighting%2C%20professional%20photography%2C%20showing%20community%20and%20technology%20in%20agriculture&width=600&height=400&seq=about1&orientation=landscape" 
                alt="Farmers and buyers collaborating" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2bd876] to-[#79e7a8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Farming Business?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of farmers and buyers already benefiting from the Farmly platform.
          </p>
          <button className="bg-white text-[#2bd876] font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f6fdfa] border-t border-[#c1f4d7]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <div className="text-2xl font-bold text-[#2bd876] mb-4">Farmly</div>
              <p className="text-gray-600 mb-4">
                The future of farming, linked. Connecting farmers and buyers for a sustainable agricultural ecosystem.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#2bd876] hover:text-[#52df8f] transition duration-300 cursor-pointer">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-[#2bd876] hover:text-[#52df8f] transition duration-300 cursor-pointer">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-[#2bd876] hover:text-[#52df8f] transition duration-300 cursor-pointer">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-[#2bd876] hover:text-[#52df8f] transition duration-300 cursor-pointer">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
            
            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#2bd876] transition duration-300 cursor-pointer">Home</a></li>
                <li><a href="#features" className="text-gray-600 hover:text-[#2bd876] transition duration-300 cursor-pointer">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-600 hover:text-[#2bd876] transition duration-300 cursor-pointer">How It Works</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-[#2bd876] transition duration-300 cursor-pointer">About Us</a></li>
                
              </ul>
            </div>
            
            {/* Column 3 */}
            <div id="contact">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-[#2bd876] mt-1 mr-3"></i>
                  <span className="text-gray-600">Kinfra Park, Koratty, India</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone-alt text-[#2bd876] mt-1 mr-3"></i>
                  <span className="text-gray-600">+91 1234567890</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope text-[#2bd876] mt-1 mr-3"></i>
                  <span className="text-gray-600">info@farmly.com</span>
                </li>
              </ul>
              
            </div>
          </div>
          
          <div className="border-t border-[#c1f4d7] mt-12 pt-6 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Farmly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

