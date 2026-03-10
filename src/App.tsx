import { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  UserCircle, 
  Menu, 
  X, 
  Star, 
  ArrowRight, 
  ArrowLeft,
  Instagram,
  Twitter,
  Facebook,
  Github,
  ChevronDown,
  Mail
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black/5">
      {/* Top Banner */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm relative">
        <p>Sign up and get 20% off to your first order. <a href="#" className="underline font-semibold">Sign Up Now</a></p>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
          <X size={16} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter heading-font">SHOP.CO</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium">
            <div className="flex items-center gap-1 cursor-pointer group relative">
              Shop <ChevronDown size={16} />
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-4 hidden group-hover:block min-w-[200px] border border-black/5">
                <a href="#" className="block py-2 hover:text-black/60">Men's Fashion</a>
                <a href="#" className="block py-2 hover:text-black/60">Women's Fashion</a>
                <a href="#" className="block py-2 hover:text-black/60">Kids</a>
                <a href="#" className="block py-2 hover:text-black/60">Accessories</a>
              </div>
            </div>
            <a href="#" className="hover:text-black/60 transition-colors">On Sale</a>
            <a href="#" className="hover:text-black/60 transition-colors">New Arrivals</a>
            <a href="#" className="hover:text-black/60 transition-colors">Brands</a>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" size={20} />
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full bg-[#F0F0F0] rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-black/10"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="lg:hidden">
              <Search size={24} />
            </button>
            <button className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </button>
            <button>
              <UserCircle size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="p-4 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-black tracking-tighter heading-font">SHOP.CO</h1>
              <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-4 text-lg font-medium">
              <a href="#" className="flex justify-between items-center">Shop <ChevronDown size={20} /></a>
              <a href="#">On Sale</a>
              <a href="#">New Arrivals</a>
              <a href="#">Brands</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#F2F0F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="z-10 pb-10 md:pb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 heading-font"
            >
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-black/60 text-base md:text-lg mb-8 max-w-lg"
            >
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black text-white px-12 py-4 rounded-full font-medium text-lg hover:bg-black/80 transition-all w-full md:w-auto"
            >
              Shop Now
            </motion.button>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold">200+</h3>
                <p className="text-black/60 text-sm">International Brands</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold">2,000+</h3>
                <p className="text-black/60 text-sm">High-Quality Products</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-2xl md:text-4xl font-bold">30,000+</h3>
                <p className="text-black/60 text-sm">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://picsum.photos/seed/fashion-hero-1/800/1000" 
              alt="Fashion Models" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Decorative Stars */}
            <div className="absolute top-10 right-0 md:right-10 animate-pulse">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 0L31.3462 24.6538L56 28L31.3462 31.3462L28 56L24.6538 31.3462L0 28L24.6538 24.6538L28 0Z" fill="black"/>
              </svg>
            </div>
            <div className="absolute top-1/2 left-0 md:left-10 animate-pulse delay-700">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 0L24.6291 19.3709L44 22L24.6291 24.6291L22 44L19.3709 24.6291L0 22L19.3709 19.3709L22 0Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-black py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 grayscale invert opacity-80">
            <span className="text-2xl md:text-4xl font-bold tracking-tighter">VERSACE</span>
            <span className="text-2xl md:text-4xl font-bold tracking-tighter">ZARA</span>
            <span className="text-2xl md:text-4xl font-bold tracking-tighter">GUCCI</span>
            <span className="text-2xl md:text-4xl font-bold tracking-tighter">PRADA</span>
            <span className="text-2xl md:text-4xl font-bold tracking-tighter">Calvin Klein</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ name, price, oldPrice, rating, image, discount }: any) => {
  return (
    <div className="group cursor-pointer">
      <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4 aspect-square relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <h4 className="font-bold text-lg mb-1 truncate">{name}</h4>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex text-[#FFC633]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill={i < Math.floor(rating) ? "currentColor" : "none"} />
          ))}
        </div>
        <span className="text-sm text-black/60">{rating}/5</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold text-xl">${price}</span>
        {oldPrice && (
          <span className="text-black/40 line-through font-bold text-xl">${oldPrice}</span>
        )}
        {discount && (
          <span className="bg-[#FF3333]/10 text-[#FF3333] text-xs font-medium px-3 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>
    </div>
  );
};

const ProductSection = ({ title, products }: any) => {
  return (
    <section className="py-16 md:py-24 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 heading-font uppercase">{title}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product: any, index: number) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="px-12 py-3 border border-black/10 rounded-full font-medium hover:bg-black hover:text-white transition-all">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

const BrowseByStyle = () => {
  const styles = [
    { name: 'Casual', image: 'https://picsum.photos/seed/casual-style/800/600', grid: 'md:col-span-1' },
    { name: 'Formal', image: 'https://picsum.photos/seed/formal-style/800/600', grid: 'md:col-span-2' },
    { name: 'Party', image: 'https://picsum.photos/seed/party-style/800/600', grid: 'md:col-span-2' },
    { name: 'Gym', image: 'https://picsum.photos/seed/gym-style/800/600', grid: 'md:col-span-1' },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0F0F0] rounded-[40px] p-6 md:p-16">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 heading-font uppercase">BROWSE BY DRESS STYLE</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {styles.map((style, index) => (
              <div 
                key={index} 
                className={`relative h-[200px] md:h-[289px] rounded-[20px] overflow-hidden group cursor-pointer ${style.grid}`}
              >
                <img 
                  src={style.image} 
                  alt={style.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <h3 className="text-2xl md:text-3xl font-bold">{style.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah M.', text: '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations."', rating: 5 },
    { name: 'Alex K.', text: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."', rating: 5 },
    { name: 'James L.', text: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."', rating: 5 },
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl md:text-5xl font-black heading-font uppercase">OUR HAPPY CUSTOMERS</h2>
          <div className="flex gap-4">
            <button className="p-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all"><ArrowLeft size={20} /></button>
            <button className="p-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all"><ArrowRight size={20} /></button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="border border-black/10 rounded-[20px] p-6 md:p-8">
              <div className="flex text-[#FFC633] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill={i < review.rating ? "currentColor" : "none"} />
                ))}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h4 className="font-bold text-lg">{review.name}</h4>
                <div className="bg-[#01AB31] text-white rounded-full p-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="text-black/60 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] pt-40 pb-10 relative mt-40">
      {/* Newsletter Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-[20px] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-black text-white heading-font max-w-xl">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="w-full max-w-md flex flex-col gap-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" size={20} />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white rounded-full py-3 pl-12 pr-4 focus:outline-none"
              />
            </div>
            <button className="bg-white text-black font-medium py-3 rounded-full hover:bg-white/90 transition-all">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <h1 className="text-3xl font-black tracking-tighter mb-6 heading-font">SHOP.CO</h1>
            <p className="text-black/60 text-sm mb-8 max-w-xs">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Instagram size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Github size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-black/60 text-sm">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Features</a></li>
              <li><a href="#" className="hover:text-black">Works</a></li>
              <li><a href="#" className="hover:text-black">Career</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Help</h4>
            <ul className="flex flex-col gap-4 text-black/60 text-sm">
              <li><a href="#" className="hover:text-black">Customer Support</a></li>
              <li><a href="#" className="hover:text-black">Delivery Details</a></li>
              <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">FAQ</h4>
            <ul className="flex flex-col gap-4 text-black/60 text-sm">
              <li><a href="#" className="hover:text-black">Account</a></li>
              <li><a href="#" className="hover:text-black">Manage Deliveries</a></li>
              <li><a href="#" className="hover:text-black">Orders</a></li>
              <li><a href="#" className="hover:text-black">Payments</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Resources</h4>
            <ul className="flex flex-col gap-4 text-black/60 text-sm">
              <li><a href="#" className="hover:text-black">Free eBooks</a></li>
              <li><a href="#" className="hover:text-black">Development Tutorial</a></li>
              <li><a href="#" className="hover:text-black">How to - Blog</a></li>
              <li><a href="#" className="hover:text-black">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-black/60 text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-4 grayscale opacity-80">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="h-4" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg" alt="Google Pay" className="h-4" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const newArrivals = [
    { name: 'T-shirt with Tape Details', price: 120, rating: 4.5, image: 'https://picsum.photos/seed/tshirt1/400/400' },
    { name: 'Skinny Fit Jeans', price: 240, oldPrice: 260, discount: 20, rating: 3.5, image: 'https://picsum.photos/seed/jeans1/400/400' },
    { name: 'Checkered Shirt', price: 180, rating: 4.5, image: 'https://picsum.photos/seed/shirt1/400/400' },
    { name: 'Sleeve Striped T-shirt', price: 130, oldPrice: 160, discount: 30, rating: 4.5, image: 'https://picsum.photos/seed/tshirt2/400/400' },
  ];

  const topSelling = [
    { name: 'Vertical Striped Shirt', price: 212, oldPrice: 232, discount: 20, rating: 5.0, image: 'https://picsum.photos/seed/shirt2/400/400' },
    { name: 'Courage Graphic T-shirt', price: 145, rating: 4.0, image: 'https://picsum.photos/seed/tshirt3/400/400' },
    { name: 'Loose Fit Bermuda Shorts', price: 80, rating: 3.0, image: 'https://picsum.photos/seed/shorts1/400/400' },
    { name: 'Faded Skinny Jeans', price: 210, rating: 4.5, image: 'https://picsum.photos/seed/jeans2/400/400' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductSection title="NEW ARRIVALS" products={newArrivals} />
      <ProductSection title="TOP SELLING" products={topSelling} />
      <BrowseByStyle />
      <Testimonials />
      <Footer />
    </div>
  );
}
