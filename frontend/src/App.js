import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, 
  Users, 
  Calendar, 
  Shield, 
  Star, 
  ArrowRight, 
  Play,
  Check,
  Crown,
  Smartphone,
  Monitor,
  TrendingUp,
  MessageSquare,
  DollarSign,
  Map,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import './App.css';

const LUXURY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1592853625597-7d17be820d0c",
  porsche: "https://images.unsplash.com/photo-1592853625597-7d17be820d0c",
  lamborghini: "https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e",
  green_lambo: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg",
  mercedes: "https://images.unsplash.com/photo-1617814086906-d847a8bc6fca",
  ferrari: "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg"
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${LUXURY_IMAGES.hero})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">
              LUXE CIRCLE
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 font-light">
              Exclusive Community for Luxury Vehicle Collectors
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A premium private club featuring anonymous marketplace, concierge services, 
              and exclusive events for discerning collectors worldwide.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="bg-gradient-to-r from-gold to-yellow-500 text-black px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <Play className="w-5 h-5" />
              View Demo
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3">
              Explore Features
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:scale-105"
    >
      <div className="h-48 bg-cover bg-center relative overflow-hidden"
           style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500" />
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const CoreFeatures = () => {
  const features = [
    {
      icon: Car,
      title: "Anonymous Marketplace",
      description: "Secure, private buying and selling of luxury vehicles with escrow protection and verified authentication.",
      image: LUXURY_IMAGES.lamborghini
    },
    {
      icon: Users,
      title: "Private Collection",
      description: "Showcase your exclusive collection to fellow members with detailed analytics and valuation insights.",
      image: LUXURY_IMAGES.ferrari
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Access to private viewings, track days, concours d'elegance, and networking events worldwide.",
      image: LUXURY_IMAGES.green_lambo
    },
    {
      icon: Shield,
      title: "Concierge Services",
      description: "Premium support for authentication, transportation, storage, and maintenance of your vehicles.",
      image: LUXURY_IMAGES.mercedes
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Exceptional <span className="text-gold">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the pinnacle of luxury vehicle collecting with our comprehensive platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MembershipTier = ({ tier, price, features, popular = false, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative bg-gray-900 rounded-2xl p-8 ${popular ? 'ring-2 ring-gold scale-105' : ''} hover:shadow-2xl transition-all duration-500`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gold text-black px-6 py-2 rounded-full font-semibold text-sm">
            MOST POPULAR
          </span>
        </div>
      )}
      
      <div className="text-center">
        <div className="mb-6">
          <Icon className={`w-12 h-12 mx-auto ${popular ? 'text-gold' : 'text-white'}`} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-400 ml-2">/month</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <Check className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
          popular 
            ? 'bg-gold text-black hover:bg-yellow-500' 
            : 'border-2 border-gray-600 text-white hover:border-gold hover:text-gold'
        }`}>
          Choose Plan
        </button>
      </div>
    </motion.div>
  );
};

const MembershipTiers = () => {
  const tiers = [
    {
      tier: "Standard",
      price: "€299",
      icon: Star,
      features: [
        "Basic marketplace access",
        "Community features",
        "Standard support",
        "Monthly newsletters"
      ]
    },
    {
      tier: "Premium",
      price: "€599",
      icon: Award,
      popular: true,
      features: [
        "Priority marketplace listings",
        "Advanced analytics",
        "Premium support",
        "Event access",
        "Concierge services"
      ]
    },
    {
      tier: "VIP",
      price: "€1,299",
      icon: Crown,
      features: [
        "Featured listings",
        "Personal concierge",
        "Exclusive events",
        "White-glove services",
        "Investment insights",
        "Private showings"
      ]
    },
    {
      tier: "Platinum",
      price: "€2,999",
      icon: Shield,
      features: [
        "Everything in VIP",
        "Personal advisor",
        "Auction access",
        "Global events",
        "Storage services",
        "Authentication guarantee"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Membership <span className="text-gold">Tiers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect membership level to match your collecting passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <MembershipTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('mobile');

  const technologies = {
    mobile: [
      { name: "React Native", description: "Cross-platform mobile development" },
      { name: "TypeScript", description: "Type-safe development" },
      { name: "Redux Toolkit", description: "State management" },
      { name: "Expo", description: "Development platform" }
    ],
    backend: [
      { name: "Node.js", description: "Server runtime" },
      { name: "PostgreSQL", description: "Primary database" },
      { name: "Redis", description: "Caching & sessions" },
      { name: "Socket.io", description: "Real-time features" }
    ],
    security: [
      { name: "JWT Authentication", description: "Secure access tokens" },
      { name: "Stripe Payments", description: "Secure transactions" },
      { name: "End-to-end Encryption", description: "Data protection" },
      { name: "Escrow System", description: "Transaction security" }
    ]
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Technology <span className="text-gold">Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built with enterprise-grade technology for security, performance, and scalability
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-full p-2 flex">
            {[
              { key: 'mobile', icon: Smartphone, label: 'Mobile App' },
              { key: 'backend', icon: Monitor, label: 'Backend' },
              { key: 'security', icon: Shield, label: 'Security' }
            ].map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === key 
                    ? 'bg-gold text-black' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {technologies[activeTab].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{tech.name}</h4>
              <p className="text-gray-400 text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Statistics = () => {
  const stats = [
    { number: "10K+", label: "Premium Members", icon: Users },
    { number: "€2.5B+", label: "Vehicles Traded", icon: DollarSign },
    { number: "500+", label: "Exclusive Events", icon: Calendar },
    { number: "99.9%", label: "Transaction Security", icon: Shield }
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Join the <span className="text-gold">Elite</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Experience the future of luxury vehicle collecting. Join thousands of discerning collectors in our exclusive community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gold text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Request Invitation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gold text-gold px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gold mb-4">LUXE CIRCLE</h3>
          <p className="text-gray-400 mb-6">
            Exclusive Community for Luxury Vehicle Collectors
          </p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2025 Luxe Circle. All rights reserved. | Presentation Interface
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <Hero />
      <CoreFeatures />
      <MembershipTiers />
      <Statistics />
      <TechStack />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;