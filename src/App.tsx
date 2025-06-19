import React, { useState } from 'react';
import { X, ShoppingBag, Users, Info, Phone, Home, Fish, Star, MapPin, Mail, Clock } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface Staff {
  id: number;
  name: string;
  position: string;
  image: string;
  experience: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "KOI KING OVERLOAD",
    price: 123,
    image: "/images/koi king.jpg",
    description: "GROWTH 454g small & medium ₱150\n1kg small and medium ₱250\nEXCEL 454g small & medium ₱175\nCOLOR 454g small ₱199\nWHOLESALE is available minimum 5ctn each."
  },
  {
    id: 2,
    name: "Porpoise",
    price: 9999,
    image: "/images/porpoise.jpg",
    description: "Porpoise 5kg --- 40% Protein koi keeper recommended 5kg Growth M or L--- ₱1,200 5kg MIX (growth + color)---- ₱1,300 For wholesale kindly message us directly!."
  },
  {
    id: 3,
    name: "Magic Color",
    price: 11111,
    image: "/images/magicolor.jpg",
    description: "Energy-efficient LED lighting system with adjustable color spectrum for plant growth and fish display."
  },
  {
    id: 4,
    name: "JAPANESE MATTING",
    price: 3200,
    image: "/images/japmat.jpg",
    description: "JAPANESE MATTING."
  },
  {
    id: 5,
    name: "Aquatic Plant Fertilizer",
    price: 280,
    image: "https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Liquid fertilizer for healthy aquatic plant growth. Promotes lush green foliage and strong root development."
  },
  {
    id: 6,
    name: "Ceramic Aquarium Decoration",
    price: 890,
    image: "https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Beautiful ceramic castle decoration. Safe for all fish species and adds charm to any aquarium setup."
  }
];

const staff: Staff[] = [
  {
    id: 1,
    name: "Madam Suzette",
    position: "Store Manager",
    image: "/images/sus.jpg",
    experience: "4 years in Pet Stop store management"
  },
  {
    id: 2,
    name: "Wendyll",
    position: "Store Attendant",
    image: "/images/en.jpg",
    experience: "1 week employee"
  },
  {
    id: 3,
    name: "Ken",
    position: "Store Attendant",
    image: "/images/john.jpg",
    experience: "1 week employee"
  },
  {
    id: 4,
    name: "Erika",
    position: "Store Attendant",
    image: "/images/tt.jpg",
    experience: "5 months employee"
  },
  {
    id: 5,
    name: "Regine",
    position: "Store Attendant",
    image: "/images/haha.png",
    experience: "1 months employee"
  }
];

type ModalType = 'products' | 'staff' | 'about' | 'contact' | 'special' | null;

function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = (modalType: ModalType) => {
    setActiveModal(modalType);
    setIsMobileMenuOpen(false); // Close mobile menu when opening a modal
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const goHome = () => {
    setActiveModal(null);
    setIsMobileMenuOpen(false); // Close mobile menu when going home
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-lg border-b-4 border-orange-500 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="/images/petstop.jpg" alt="Pet Stop Logo" className="h-12 w-12" />
              <h1 className="text-2xl font-bold text-gray-800">Pet Stop</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={goHome}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => openModal('contact')}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all duration-200 flex items-center space-x-1"
              >
                <Phone className="h-4 w-4" />
                <span>Contact Us</span>
              </button>
              <button
                onClick={() => openModal('products')}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Products</span>
              </button>
              <button
                onClick={() => openModal('staff')}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
              >
                <Users className="h-4 w-4" />
                <span>Staff</span>
              </button>
              <button
                onClick={() => openModal('about')}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
              >
                <Info className="h-4 w-4" />
                <span>About Us</span>
              </button>
              <button
                onClick={() => openModal('special')}
                className="px-3 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
              >
                ipot ni nek nek
              </button>
            </nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-orange-500"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden bg-white border-t border-gray-200">
              <div className="flex flex-col space-y-2 py-4 px-4">
                <button
                  onClick={goHome}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => openModal('contact')}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>Contact Us</span>
                </button>
                <button
                  onClick={() => openModal('products')}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Products</span>
                </button>
                <button
                  onClick={() => openModal('staff')}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
                >
                  <Users className="h-5 w-5" />
                  <span>Staff</span>
                </button>
                <button
                  onClick={() => openModal('about')}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
                >
                  <Info className="h-5 w-5" />
                  <span>About Us</span>
                </button>
                <button
                  onClick={() => openModal('special')}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
                >
                  <Fish className="h-5 w-5" />
                  <span>ipot ni nek nek</span>
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-orange-500">PetStop</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your premier destination for aquatic pets, supplies, and expert care. 
            Discover the beauty of underwater life with our premium products.
          </p>
        </section> 

        {/* Featured Items Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Items</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    ₱{product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">In Stock</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Button */}
        <section className="text-center mb-12">
          <button
            onClick={() => openModal('products')}
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Buy Now - View All Products
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-orange-500">Pet Stop</h4>
              <p className="text-gray-300">
                Your trusted partner for all aquatic needs. Quality products, expert advice, and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Obrero, Davao City</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>0917 304 0055</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>petstop@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Store Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon - Fri: 8:30AM - 5:30PM</span>
                </div>
                 <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Sat: 9AM - 5:30PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Sun: Closed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            <p>&copy; 2025 Pet Stop. Created with care for aquatic enthusiasts.</p>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {activeModal === 'products' && 'Our Products'}
                {activeModal === 'staff' && 'Meet Our Team'}
                {activeModal === 'about' && 'About AquaLife'}
                {activeModal === 'contact' && 'Contact Us'}
                {activeModal === 'special' && 'Special Section'}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              {/* Products Modal */}
              {activeModal === 'products' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-3">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-orange-500">₱{product.price}</span>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Staff Modal */}
              {activeModal === 'staff' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {staff.map((member) => (
                    <div key={member.id} className="text-center bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-orange-500"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-orange-500 font-semibold mb-2">{member.position}</p>
                      <p className="text-gray-600 text-sm">{member.experience}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* About Modal */}
              {activeModal === 'about' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Find Us Online</h3>
                    <div className="flex justify-center space-x-8 mb-8">
                      <a href="#" className="flex flex-col items-center space-y-2 hover:opacity-75 transition-opacity duration-200">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">SHOPEE</span>
                        </div>
                        <span className="text-gray-600">Shopee Store</span>
                      </a>
                      <a href="#" className="flex flex-col items-center space-y-2 hover:opacity-75 transition-opacity duration-200">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">FB</span>
                        </div>
                        <span className="text-gray-600">Facebook Page</span>
                      </a>
                      <a href="#" className="flex flex-col items-center space-y-2 hover:opacity-75 transition-opacity duration-200">
                        <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">LAZADA</span>
                        </div>
                        <span className="text-gray-600">Lazada Store</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Created By</h4>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-orange-500">Wendyll Erosido</p>
                      <p className="text-gray-600">Web Developer & Aquatic Enthusiast</p>
                      <p className="text-gray-600">Email: yourname@example.com</p>
                      <p className="text-gray-600">Phone: +63 123 456 7890</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Modal */}
              {activeModal === 'contact' && (
                <div className="max-w-2xl mx-auto">
                  <div className="bg-orange-50 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">0917 304 0055</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">petstop@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">Obrero, Davao City</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button 
                      className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              )}

              {/* Special Modal */}
              {activeModal === 'special' && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Ipot Ni NEK NEK</h3>
                  <div className="max-w-md mx-auto">
                    <img 
                      src="/images/ipot.jpg" 
                      alt="Cat poop"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <p className="mt-4 text-gray-600 italic">Sometimes life gives you unexpected surprises... 🐱</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;