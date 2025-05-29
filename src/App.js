import React, { useState, useEffect } from 'react';
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
  ChevronRight,
  LogOut,
  Search,
  FileCheck
} from 'lucide-react';
import Login from './components/Login';
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
    <div className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Racing stripe header */}
      <div className="racing-stripe"></div>
      
      {/* Overlay pour le contenu - plus transparent pour voir l'animation */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen py-10">
        <div className="text-center px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="mb-8">
              <span className="bg-primary-blue text-white px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide shadow-lg">
                Projet de digitalisation de business
              </span>
            </div>
            
            <div className="hero-shine">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h1 className="luxwagen-title text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
                  Lux<span className="text-gold">Wagen</span>
                </h1>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl mb-12 text-white font-light drop-shadow-md">
              Luxury Cars Social Club
            </h2>
            
            <div className="max-w-6xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
                <strong>Objectif :</strong><br/>
                Transformer ton activité de Négociant de véhicules de luxe <br/> <strong className="text-gold">en application mobile séléctive dans le domaine de la voiture de luxe.</strong>
              </p>
              
              {/* Nouveau contenu convaincant - 4 blocs en ligne */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-primary-blue mb-2">❌ Fini les One-Shots</h3>
                    <p className="luxwagen-text text-xs leading-relaxed">
                      Chaque transaction devient un actif qui travaille pour toi. 
                      Plus de ventes isolées, mais un écosystème qui se renforce.
                    </p>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-primary-blue mb-2">🎯 Capitalise sur Chaque Deal</h3>
                    <p className="luxwagen-text text-xs leading-relaxed">
                      Transforme ton expérience en réputation digitale mesurable. 
                      Chaque certification renforce ta position de leader.
                    </p>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-primary-blue mb-2">🚀 Crée Ton Audience</h3>
                    <p className="luxwagen-text text-xs leading-relaxed">
                      Ton réseau VIP devient une communauté 
                      exclusive qui génère des opportunités en continu et devient même ambassadrice du club privé.
                    </p>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-primary-blue mb-2">⚡ Scale Ton Business</h3>
                    <p className="luxwagen-text text-xs leading-relaxed">
                      De négociant local à référence nationale voire internationale. Ton label LuxWagen 
                      devient le gage de qualité du marché premium. Ton business devient scalable et valorisé.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white opacity-70 drop-shadow-lg" />
      </motion.div>
    </div>
  );
};

const BusinessTransformation = () => {
  const objectives = [
    {
      icon: Target,
      title: "Valoriser ton Expertise Existante",
      current: "Ton savoir-faire reste local et limité",
      target: "Ton expertise devient un actif digital valorisé",
      why: "Tu continues ton métier de négociant, mais chaque expertise devient traçable et monétisable via l'app.",
      impact: "Même travail, valeur multipliée",
      color: "primary-blue"
    },
    {
      icon: TrendingUp,
      title: "Scaler ton Business Actuel",
      current: "Limité par ta capacité physique et géographique",
      target: "Ton business s'étend sans limite géographique",
      why: "L'app te permet de certifier et vendre à distance. Plus besoin d'être physiquement présent partout.",
      impact: "Croissance sans contraintes",
      color: "gold"
    },
    {
      icon: DollarSign,
      title: "Créer de Nouveaux Revenus",
      current: "Revenus uniquement sur marge de vente",
      target: "Multiples flux : certification, commission, abonnements",
      why: "L'app génère des revenus récurrents : frais de certification, commissions marketplace, abonnements premium.",
      impact: "Diversification des revenus",
      color: "primary-blue"
    },
    {
      icon: Rocket,
      title: "Préparer la Sortie/Valorisation",
      current: "Business personnel non-valorisable",
      target: "Actif digital vendable ou partenariats stratégiques",
      why: "Une app avec utilisateurs actifs = actif valorisable. Possibilité de vente, levée de fonds ou partenariats.",
      impact: "Exit strategy créée",
      color: "gold"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="luxwagen-title text-5xl font-bold text-gray-900 mb-6">
            L'App comme <span className="text-primary-blue">Investissement Passerelle</span>
          </h2>
          <p className="text-xl luxwagen-text max-w-3xl mx-auto mb-8">
            Transformer ton activité existante en actif digital valorisable
          </p>
          
          {/* Message clé */}
          <div className="bg-primary-blue/10 rounded-2xl p-6 max-w-4xl mx-auto mb-12 border border-primary-blue/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">💰 L'Investissement Intelligent</h3>
            <p className="text-lg luxwagen-text">
              <strong>Tu continues ton métier de négociant</strong>, mais l'app devient la passerelle qui :<br/>
              ✓ Valorise ton travail existant ✓ Scale ton business ✓ Crée de nouveaux revenus ✓ Prépare une sortie
            </p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Titre et impact */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-${objective.color} rounded-2xl flex items-center justify-center`}>
                      {React.createElement(objective.icon, { 
                        className: `w-8 h-8 ${objective.color === 'gold' ? 'text-black' : 'text-white'}` 
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{objective.title}</h3>
                  </div>
                  
                  <div className={`bg-${objective.color}/10 rounded-xl p-4 border border-${objective.color}/20`}>
                    <div className="text-sm font-semibold text-gray-900">{objective.impact}</div>
                  </div>
                </div>
                
                {/* Situation AVANT → APRÈS */}
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-xs font-semibold text-gray-500 mb-1">SITUATION ACTUELLE</div>
                      <div className="text-sm text-gray-700">{objective.current}</div>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="w-6 h-6 text-gold" />
                    </div>
                    
                    <div className={`bg-${objective.color}/10 rounded-xl p-4 border border-${objective.color}/20`}>
                      <div className="text-xs font-semibold text-gray-500 mb-1">AVEC L'APP</div>
                      <div className="text-sm font-semibold text-gray-900">{objective.target}</div>
                    </div>
                  </div>
                </div>
                
                {/* Comment ça marche */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">🔧 Comment ça marche</h4>
                    <p className="text-sm luxwagen-text leading-relaxed">{objective.why}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Création d'audience et positionnement central */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-blue/10 to-gold/10 rounded-2xl p-8 max-w-5xl mx-auto border border-primary-blue/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Créer ton Audience Ultra-Nichée</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Crown className="w-6 h-6 text-gold" />
                  Club Sélectif Premium
                </h4>
                <div className="space-y-3 text-sm luxwagen-text">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2"></div>
                    <span>Accès sur invitation uniquement (ton réseau VIP initial)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2"></div>
                    <span>Propriétaires de véhicules +100k€ minimum</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2"></div>
                    <span>Validation de profil par tes soins</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2"></div>
                    <span>Communauté de 200-500 membres max</span>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary-blue" />
                  Toi au Centre du Réseau
                </h4>
                <div className="space-y-3 text-sm luxwagen-text">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                    <span>Tous les échanges passent par ton expertise</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                    <span>Tu deviens l'intermédiaire de confiance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                    <span>Chaque transaction renforce ta position</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                    <span>Effet réseau qui s'auto-entretient</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Schéma de l'effet réseau */}
            <div className="bg-white rounded-xl p-6 border border-primary-blue/20 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">🔄 L'Effet Boule de Neige</h4>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p className="text-xs luxwagen-text">Tu invites ton réseau VIP existant</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <p className="text-xs luxwagen-text">Ils invitent leurs contacts premium</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p className="text-xs luxwagen-text">Tu valides chaque nouveau membre</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto">
                    <span className="text-black font-bold text-sm">4</span>
                  </div>
                  <p className="text-xs luxwagen-text">Ton influence grandit exponentiellement</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary-blue/10 to-gold/10 rounded-xl p-6 border border-primary-blue/20">
              <p className="text-lg luxwagen-text">
                <strong className="text-primary-blue">Résultat :</strong> Tu capitalises tes efforts en créant une communauté 
                exclusive qui se développe autour de ton expertise. Plus elle grandit, plus ta position centrale se renforce.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const UserExperiencePremium = () => {
  const features = [
    {
      icon: Users,
      title: "Parrainage Sélectif VIP",
      description: "Chaque membre a son QR Code unique pour inviter",
      details: [
        "QR Code personnel pour chaque membre",
        "Parrainage = entretien avec toi obligatoire",
        "Tu valides ou refuses chaque candidat",
        "Membres deviennent tes ambassadeurs"
      ],
      color: "primary-blue"
    },
    {
      icon: Eye,
      title: "Anonymat Sélectif",
      description: "Les membres contrôlent leur visibilité",
      details: [
        "Navigation anonyme pour explorer discrètement",
        "Révèle son identité uniquement à ses contacts de confiance",
        "Chat anonyme pour négocier sans pression",
        "Contrôle total de qui voit quoi"
      ],
      color: "gold"
    },
    {
      icon: Shield,
      title: "Label de Confiance",
      description: "Ton expertise valorise chaque véhicule",
      details: [
        "Certification LuxWagen = gage de qualité premium",
        "Véhicules labellisés se vendent plus vite et plus cher",
        "Historique vérifié par tes soins = confiance totale",
        "Médiation experte en cas de litige"
      ],
      color: "primary-blue"
    },
    {
      icon: Crown,
      title: "Services Premium Personnalisés",
      description: "Monétise ton expertise avec des services exclusifs",
      details: [
        "Accès anticipé aux pépites (membres Platinum)",
        "Ventes privées hors app pour véhicules d'exception",
        "Service de négociation mandaté (tu closes pour eux)",
        "Consultation expertise pour achats importants"
      ],
      color: "gold"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="motorsport-title text-5xl font-bold text-gray-900 mb-6">
            L'Expérience <span className="text-primary-blue">Utilisateur Premium</span>
          </h2>
          <p className="text-xl motorsport-text max-w-3xl mx-auto mb-8">
            Pourquoi les membres VIP vont adopter et promouvoir ton app
          </p>
          
          {/* Message clé */}
          <div className="bg-white rounded-2xl p-6 max-w-4xl mx-auto mb-12 border border-primary-blue/20 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">🎯 Le Concept Unique</h3>
            <p className="text-lg motorsport-text">
              <strong>Chaque membre devient ton ambassadeur.</strong> Ils ne font pas que utiliser l'app, 
              ils la font grandir car ils en tirent une vraie valeur exclusive.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-${feature.color} rounded-2xl flex items-center justify-center`}>
                  {React.createElement(feature.icon, { 
                    className: `w-8 h-8 ${feature.color === 'gold' ? 'text-black' : 'text-white'}` 
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 text-${feature.color} mt-0.5 flex-shrink-0`} />
                    <span className="motorsport-text text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schéma du parcours utilisateur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🔄 Parcours d'un Nouveau Membre</h3>
          
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Invitation QR</h4>
              <p className="text-xs motorsport-text">Un membre scanne son QR Code pour inviter</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Entretien Toi</h4>
              <p className="text-xs motorsport-text">Tu évalues le candidat en personne ou visio</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Validation</h4>
              <p className="text-xs motorsport-text">Tu acceptes et actives son compte premium</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Accès VIP</h4>
              <p className="text-xs motorsport-text">Il découvre la communauté et les fonctionnalités</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">5</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Ambassadeur</h4>
              <p className="text-xs motorsport-text">Il invite à son tour son réseau premium</p>
            </div>
          </div>
        </motion.div>

        {/* Valeur pour les membres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-blue/10 to-gold/10 rounded-2xl p-8 max-w-4xl mx-auto border border-primary-blue/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💎 Pourquoi ils Deviennent Ambassadeurs</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Sécurité Totale</h4>
                <p className="motorsport-text text-sm">Ton expertise élimine les arnaques</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-black" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Exclusivité</h4>
                <p className="motorsport-text text-sm">Accès à des véhicules introuvables ailleurs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Valeur Utilisateur d'Abord</h4>
                <p className="motorsport-text text-sm">On construit pour tes membres, pas pour nous. Leur satisfaction = ton succès.</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl border border-primary-blue/20">
              <p className="text-lg motorsport-text">
                <strong className="text-primary-blue">Résultat :</strong> Ils ne font pas que utiliser l'app, 
                ils la défendent et la promeuvent car elle leur apporte une vraie valeur exclusive.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DevelopmentRoadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "MVP - Fondations Solides",
      status: "Développement Inclus",
      responsibility: "Notre équipe",
      color: "primary-blue",
      objectives: [
        "App mobile native (iOS + Android)",
        "Système de parrainage QR Code",
        "Chat anonyme et gestion visibilité",
        "Interface de certification pour toi"
      ],
      deliverables: [
        "Application fonctionnelle complète",
        "Dashboard admin personnalisé",
        "Système d'invitation sélective",
        "Tests et débogage complets"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Lancement - Mise en Production",
      status: "Déploiement Inclus",
      responsibility: "Notre équipe + Toi",
      color: "gold",
      objectives: [
        "Déploiement sur App Store & Google Play",
        "Onboarding de tes premiers VIP",
        "Formation à l'utilisation des outils",
        "Monitoring et ajustements initiaux"
      ],
      deliverables: [
        "App live sur les stores",
        "Transfert de propriété (code, git, comptes)",
        "Formation à l'utilisation",
        "Passation technique complète"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="luxwagen-title text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-primary-blue">Périmètre d'Intervention</span>
          </h2>
          <p className="text-xl luxwagen-text max-w-3xl mx-auto mb-8">
            2 phases pour livrer une application fonctionnelle et opérationnelle
          </p>
          
          {/* Timeline visuelle */}
          <div className="bg-white rounded-2xl p-6 max-w-4xl mx-auto mb-12 border border-primary-blue/20 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Ce qui est Inclus</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Développement</h4>
                <p className="text-sm text-gray-600">Application complète prête à l'emploi</p>
                <div className="bg-primary-blue/10 px-3 py-1 rounded-full text-xs font-semibold text-primary-blue mt-2">
                  Inclus
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold">2</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Lancement</h4>
                <p className="text-sm text-gray-600">Déploiement + formation + support initial</p>
                <div className="bg-gold/20 px-3 py-1 rounded-full text-xs font-semibold text-gray-900 mt-2">
                  Inclus
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className={`h-2 bg-${phase.color}`}></div>
              
              <div className="p-8">
                <div className="grid lg:grid-cols-4 gap-8">
                  {/* En-tête de phase */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 bg-${phase.color} rounded-2xl flex items-center justify-center`}>
                        <span className={`text-2xl font-bold ${phase.color === 'gold' ? 'text-black' : 'text-white'}`}>
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                        <p className="text-gray-600">{phase.phase}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-gold" />
                        <span className="luxwagen-text text-sm">{phase.responsibility}</span>
                      </div>
                      <div className="bg-green-100 text-green-800 inline-block px-4 py-2 rounded-full text-sm font-bold">
                        {phase.status}
                      </div>
                    </div>
                  </div>
                  
                  {/* Objectifs */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary-blue" />
                      Objectifs
                    </h4>
                    <div className="space-y-3">
                      {phase.objectives.map((objective, objIndex) => (
                        <div key={objIndex} className="flex items-start gap-3">
                          <div className={`w-2 h-2 bg-${phase.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="luxwagen-text text-sm">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Livrables */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      Livrables
                    </h4>
                    <div className="space-y-3">
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <div key={delIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <span className="luxwagen-text text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Note spéciale pour chaque phase */}
                  <div className="lg:col-span-1">
                    <div className={`bg-${phase.color}/10 rounded-xl p-4 border border-${phase.color}/20`}>
                      <h4 className="text-sm font-bold text-gray-900 mb-2">
                        {index === 0 && "🔧 Notre Expertise"}
                        {index === 1 && "🚀 Collaboration"}
                      </h4>
                      <p className="text-xs luxwagen-text">
                        {index === 0 && "Développement technique complet. Tu te concentres sur ton business, on s'occupe de la tech."}
                        {index === 1 && "On déploie, tu onboardes tes VIP. Collaboration étroite pour un lancement réussi."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Approche éthique */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 max-w-5xl mx-auto shadow-lg border border-primary-blue/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🌱 Notre Approche</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Valeur Utilisateur d'Abord</h4>
                <p className="luxwagen-text text-sm">On construit pour tes membres, pas pour nous. Leur satisfaction = ton succès.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Qualité Avant Tout</h4>
                <p className="luxwagen-text text-sm">Une app solide et bien pensée plutôt qu'un produit bâclé livré rapidement.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary-blue/10 to-gold/10 rounded-xl p-6 border border-primary-blue/20">
              <p className="text-lg luxwagen-text">
                <strong className="text-primary-blue">Transparence Totale :</strong> Cette app n'a de potentiel que si après sa création 
                tu mets en place une stratégie d'acquisition, et l'inclut dans ton travail quotidien en parallèle de ton activité de négociant.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Post-lancement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-100 rounded-2xl p-8 max-w-5xl mx-auto border border-gray-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Important : Après Livraison</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-left">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary-blue" />
                  Maintenance & Évolutions
                </h4>
                <p className="luxwagen-text text-sm mb-3">
                  Maintenance technique et nouvelles fonctionnalités = contrat séparé si souhaité.
                </p>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="text-xs text-gray-600">
                    Optionnel selon tes besoins futurs
                  </p>
                </div>
              </div>
              
              <div className="text-left">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-gold" />
                  Scaling & Infrastructure
                </h4>
                <p className="luxwagen-text text-sm mb-3">
                  Si l'app explose, upgrade infrastructure nécessaire (coûts évolutifs selon succès).
                </p>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="text-xs text-gray-600">
                    Problème de riche à gérer plus tard avec l'équipe qui va gérer la maintenance
                  </p>
                </div>
              </div>
              
              <div className="text-left">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary-blue" />
                  Stratégie Marketing
                </h4>
                <p className="luxwagen-text text-sm mb-3">
                  Canaux d'acquisition : personal branding, agence ads, influenceurs auto, etc.
                </p>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="text-xs text-gray-600">
                    Le travail principal parallèle à ton activité de négoce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-primary-blue border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h3 className="text-3xl font-bold text-white">
              Lux<span className="text-gold">Wagen</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8 text-gray-400 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-2">Périmètre</h4>
              <p>Développement complet</p>
              <p>Lancement opérationnel</p>
              <p>Formation & passation</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Stack Technologique</h4>
              <p>React Native + Node.js</p>
              <p>iOS & Android natif</p>
              <p>Architecture scalable</p>
            </div>
          </div>
          
          <div className="border-t border-gray-500 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 Présentation Projet LuxWagen - Document confidentiel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Header avec bouton de déconnexion adaptatif
const Header = ({ onLogout }) => {
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  // Détecter le background selon la position de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Si on est dans le Hero (background sombre), bouton blanc
      // Sinon (sections blanches), bouton sombre
      setIsDarkBackground(scrollY < heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={onLogout}
        className={`w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2 backdrop-blur-md border rounded-full md:rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium shadow-lg ${
          isDarkBackground 
            ? 'bg-white/20 border-white/30 text-white hover:bg-white/30' 
            : 'bg-gray-900/20 border-gray-900/30 text-gray-900 hover:bg-gray-900/30'
        }`}
        title="Déconnexion"
      >
        <LogOut className="w-4 h-4" />
        <span className="hidden md:inline">Déconnexion</span>
      </button>
    </div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (success) => {
    if (success) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Si pas authentifié, afficher le login
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Si authentifié, afficher la présentation avec header
  return (
    <div className="App bg-black min-h-screen">
      <Header onLogout={handleLogout} />
      <Hero />
      <BusinessTransformation />
      <UserExperiencePremium />
      <DevelopmentRoadmap />
      <Footer />
    </div>
  );
}

export default App;