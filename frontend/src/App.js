import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Lightbulb, 
  Users, 
  DollarSign, 
  Shield, 
  Smartphone, 
  Calendar,
  BarChart3,
  CheckCircle,
  ArrowRight, 
  Play,
  Eye,
  Clock,
  Zap,
  Building,
  Globe,
  Settings,
  PieChart,
  Rocket,
  Star,
  Award,
  Crown,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import './App.css';

const LUXURY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1592853625597-7d17be820d0c",
  marketplace: "https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e",
  collection: "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg",
  events: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg",
  tech: "https://images.unsplash.com/photo-1617814086906-d847a8bc6fca"
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${LUXURY_IMAGES.hero})`
        }}
      />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6">
              <span className="bg-gold text-black px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide">
                Présentation de Projet
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">
              LUXE CIRCLE
            </h1>
            <h2 className="text-3xl md:text-4xl mb-8 text-gray-200 font-light">
              Club Privé de Collectionneurs de Véhicules de Luxe
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-gold">Une opportunité business exceptionnelle</strong> dans le marché des véhicules de collection premium avec un potentiel de ROI de <strong className="text-gold">300%+</strong>
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
              Voir la Démo Interactive
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3">
              Explorer le Modèle Business
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
      
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

const BusinessOpportunity = () => {
  const opportunities = [
    {
      icon: TrendingUp,
      title: "Marché en Forte Croissance",
      value: "€45 Milliards",
      description: "Le marché mondial des véhicules de collection croît de 15% par an",
      highlight: "Opportunité énorme"
    },
    {
      icon: Users,
      title: "Clientèle Premium",
      value: "€500K+",
      description: "Patrimoine moyen des collectionneurs, forte capacité d'investissement",
      highlight: "High Net Worth"
    },
    {
      icon: Globe,
      title: "Marché Sous-digitalisé",
      value: "85%",
      description: "Des transactions se font encore par réseaux privés non-digitaux",
      highlight: "Potentiel disruption"
    },
    {
      icon: DollarSign,
      title: "Commissions Élevées",
      value: "3-8%",
      description: "Les plateformes existantes prennent des commissions substantielles",
      highlight: "Revenus récurrents"
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
            L'<span className="text-gold">Opportunité Business</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pourquoi investir dans cette solution maintenant est une décision stratégique gagnante
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-gold transition-all duration-500 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <opportunity.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-sm text-gold font-semibold mb-2">{opportunity.highlight}</div>
                <h3 className="text-xl font-bold text-white mb-2">{opportunity.title}</h3>
                <div className="text-3xl font-bold text-gold mb-4">{opportunity.value}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{opportunity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  const [activeTab, setActiveTab] = useState('problem');

  const problems = [
    "Transactions opaques et risquées sans intermédiaires de confiance",
    "Pas de plateforme centralisée pour les collectionneurs sérieux",
    "Manque d'outils d'évaluation et d'authenticité fiables",
    "Réseaux fermés difficiles d'accès pour nouveaux collectionneurs"
  ];

  const solutions = [
    "Marketplace anonyme sécurisée avec système d'escrow intégré",
    "Club privé exclusif avec vetting des membres",
    "Outils d'analytics et services de conciergerie premium",
    "Plateforme mobile moderne avec expérience utilisateur exceptionnelle"
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
            Problème & <span className="text-gold">Solution</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Notre solution adresse les vrais points de douleur du marché
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-full p-2 flex">
            <button
              onClick={() => setActiveTab('problem')}
              className={`px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'problem' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Target className="w-5 h-5" />
              Problèmes Actuels
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'solution' 
                  ? 'bg-gold text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Lightbulb className="w-5 h-5" />
              Notre Solution
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === 'problem' ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {activeTab === 'problem' ? (
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-red-900/20 border border-red-800 rounded-xl p-6"
                >
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 text-lg">{problem}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-gold/10 border border-gold rounded-xl p-6"
                >
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-black" />
                  </div>
                  <p className="text-gray-300 text-lg">{solution}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const BusinessModel = () => {
  const revenueStreams = [
    {
      icon: Crown,
      title: "Abonnements Premium",
      amount: "€299-2,999/mois",
      description: "4 tiers d'abonnement avec services croissants",
      percentage: "40%",
      color: "bg-blue-600"
    },
    {
      icon: DollarSign,
      title: "Commissions Marketplace",
      amount: "3-5% par transaction",
      description: "Commission sur chaque vente via la plateforme",
      percentage: "35%",
      color: "bg-green-600"
    },
    {
      icon: Settings,
      title: "Services Conciergerie",
      amount: "€500-5,000/service",
      description: "Authentication, transport, storage, maintenance",
      percentage: "20%",
      color: "bg-purple-600"
    },
    {
      icon: Calendar,
      title: "Événements Privés",
      amount: "€200-2,000/ticket",
      description: "Track days, expositions, ventes aux enchères",
      percentage: "5%",
      color: "bg-orange-600"
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
            Modèle <span className="text-gold">Économique</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            4 sources de revenus diversifiées pour un business model robuste et scalable
          </p>
          <div className="bg-black rounded-2xl p-8 max-w-2xl mx-auto border border-gold">
            <div className="text-4xl font-bold text-gold mb-2">€2.5M+ ARR</div>
            <div className="text-gray-300">Revenus récurrents projetés en année 3</div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-gold transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 ${stream.color} rounded-2xl flex items-center justify-center`}>
                  <stream.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gold">{stream.percentage}</div>
                  <div className="text-sm text-gray-400">du CA total</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{stream.title}</h3>
              <div className="text-xl text-gold font-semibold mb-4">{stream.amount}</div>
              <p className="text-gray-400 leading-relaxed">{stream.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechArchitecture = () => {
  const [activeView, setActiveView] = useState('overview');

  const techStack = {
    mobile: [
      { name: "React Native + Expo", use: "App mobile cross-platform" },
      { name: "TypeScript", use: "Développement type-safe" },
      { name: "Redux Toolkit", use: "Gestion d'état complexe" }
    ],
    backend: [
      { name: "Node.js + Express", use: "API REST performante" },
      { name: "PostgreSQL", use: "Base de données relationnelle" },
      { name: "Redis", use: "Cache et sessions" }
    ],
    security: [
      { name: "JWT + OAuth", use: "Authentification sécurisée" },
      { name: "Stripe Connect", use: "Paiements et escrow" },
      { name: "Encryption AES-256", use: "Protection des données" }
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
            Architecture <span className="text-gold">Technique</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une stack moderne et éprouvée pour un développement rapide et sécurisé
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-full p-2 flex">
            {[
              { key: 'overview', icon: Eye, label: 'Vue d\'ensemble' },
              { key: 'mobile', icon: Smartphone, label: 'Mobile' },
              { key: 'backend', icon: Building, label: 'Backend' },
              { key: 'security', icon: Shield, label: 'Sécurité' }
            ].map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setActiveView(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeView === key 
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
          key={activeView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeView === 'overview' ? (
            <div className="text-center">
              <div className="bg-gray-900 rounded-2xl p-12 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Smartphone className="w-16 h-16 text-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">App Mobile</h3>
                    <p className="text-gray-400">iOS + Android<br/>React Native</p>
                  </div>
                  <div>
                    <Building className="w-16 h-16 text-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Backend API</h3>
                    <p className="text-gray-400">Node.js + PostgreSQL<br/>Architecture scalable</p>
                  </div>
                  <div>
                    <Shield className="w-16 h-16 text-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Sécurité</h3>
                    <p className="text-gray-400">Encryption + Escrow<br/>Conformité RGPD</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {techStack[activeView]?.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-xl p-6"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{tech.name}</h4>
                  <p className="text-gray-400 text-sm">{tech.use}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const FinancialProjections = () => {
  const years = [
    {
      year: "Année 1",
      users: "500",
      revenue: "€180K",
      costs: "€120K",
      profit: "€60K",
      status: "break-even"
    },
    {
      year: "Année 2", 
      users: "2,500",
      revenue: "€750K",
      costs: "€300K", 
      profit: "€450K",
      status: "growth"
    },
    {
      year: "Année 3",
      users: "8,000",
      revenue: "€2.5M",
      costs: "€800K",
      profit: "€1.7M",
      status: "scale"
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
            Projections <span className="text-gold">Financières</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Croissance rapide et rentabilité dès la première année
          </p>
          <div className="bg-gradient-to-r from-gold/20 to-green-600/20 border border-gold rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-3xl font-bold text-gold mb-2">ROI: 340%</div>
            <div className="text-gray-300">Return on Investment sur 3 ans</div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {years.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-black rounded-2xl p-8 border-2 ${
                data.status === 'scale' ? 'border-gold' : 'border-gray-800'
              } relative overflow-hidden`}
            >
              {data.status === 'scale' && (
                <div className="absolute top-4 right-4">
                  <Star className="w-6 h-6 text-gold" />
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-6">{data.year}</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Utilisateurs</span>
                  <span className="text-white font-semibold">{data.users}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Revenus</span>
                  <span className="text-green-400 font-bold">{data.revenue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Coûts</span>
                  <span className="text-red-400 font-semibold">{data.costs}</span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Profit Net</span>
                    <span className="text-gold font-bold text-xl">{data.profit}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DevelopmentRoadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      duration: "3 mois",
      title: "MVP & Core Features",
      features: ["Auth & profils utilisateurs", "Marketplace de base", "Système de paiement", "App mobile iOS/Android"],
      investment: "€80K",
      status: "ready"
    },
    {
      phase: "Phase 2", 
      duration: "2 mois",
      title: "Features Premium",
      features: ["Système d'escrow", "Chat anonyme", "Analytics avancées", "Services conciergerie"],
      investment: "€50K",
      status: "planned"
    },
    {
      phase: "Phase 3",
      duration: "2 mois", 
      title: "Scale & Optimisation",
      features: ["IA recommendations", "Événements & calendrier", "API partenaires", "Optimisations performance"],
      investment: "€40K",
      status: "future"
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
            Roadmap de <span className="text-gold">Développement</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un planning réaliste et éprouvé pour un lancement rapide et efficace
          </p>
        </motion.div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-start gap-8 p-8 rounded-2xl border-2 ${
                phase.status === 'ready' ? 'bg-gold/10 border-gold' : 
                phase.status === 'planned' ? 'bg-blue-600/10 border-blue-600' :
                'bg-gray-900 border-gray-700'
              }`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg ${
                phase.status === 'ready' ? 'bg-gold text-black' :
                phase.status === 'planned' ? 'bg-blue-600 text-white' :
                'bg-gray-700 text-gray-300'
              }`}>
                {index + 1}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">{phase.phase}: {phase.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    phase.status === 'ready' ? 'bg-gold text-black' :
                    phase.status === 'planned' ? 'bg-blue-600 text-white' :
                    'bg-gray-700 text-gray-300'
                  }`}>
                    {phase.duration}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-300 mb-3">Features incluses:</h4>
                    <ul className="space-y-2">
                      {phase.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Investissement</div>
                    <div className="text-2xl font-bold text-gold">{phase.investment}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Investissement Total</h3>
            <div className="text-4xl font-bold text-gold mb-2">€170K</div>
            <p className="text-gray-400">Pour un MVP complet et market-ready en 7 mois</p>
          </div>
        </motion.div>
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
            Prêt à <span className="text-gold">Lancer</span> ce Projet ?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Une opportunité unique de créer la référence du marché des véhicules de collection premium. 
            <strong className="text-gold"> ROI projeté de 340% en 3 ans.</strong>
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <Rocket className="w-8 h-8 text-gold mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">Lancement Rapide</div>
              <div className="text-gray-400 text-sm">MVP en 3 mois</div>
            </div>
            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <TrendingUp className="w-8 h-8 text-gold mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">ROI Exceptionnel</div>
              <div className="text-gray-400 text-sm">340% sur 3 ans</div>
            </div>
            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <Shield className="w-8 h-8 text-gold mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">Risque Maîtrisé</div>
              <div className="text-gray-400 text-sm">Approche par phases</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gold text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Démarrer le Projet
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gold text-gold px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-black transition-all duration-300">
              Planifier une Réunion
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
            Présentation de Projet - Développement d'Application Mobile & Web
          </p>
          <div className="flex justify-center space-x-8 text-gray-400 text-sm">
            <span>Stack: React Native + Node.js + PostgreSQL</span>
            <span>Timeline: 7 mois de développement</span>
            <span>ROI: 340% projeté</span>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2025 Présentation Projet Luxe Circle. Document confidentiel.
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
      <BusinessOpportunity />
      <ProblemSolution />
      <BusinessModel />
      <TechArchitecture />
      <FinancialProjections />
      <DevelopmentRoadmap />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;