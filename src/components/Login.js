import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, Shield, Car } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mot de passe simple pour la démo
  const DEMO_PASSWORD = '123Wagen*';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulation d'une vérification
    setTimeout(() => {
      if (password === DEMO_PASSWORD) {
        onLogin(true);
      } else {
        setError('Mot de passe incorrect');
        setPassword('');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-6 relative overflow-hidden">
      {/* Racing stripe header */}
      <div className="racing-stripe absolute top-0 left-0 right-0"></div>
      
      {/* Overlay pour le contenu */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          {/* Logo et titre */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="luxwagen-title text-4xl font-bold text-white">
                Lux<span className="text-gold">Wagen</span>
              </h1>
            </div>
            <p className="text-white/80 font-medium">Présentation Business Exclusive</p>
            <div className="w-16 h-1 bg-primary-blue mx-auto mt-4"></div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Code d'Accès Confidentiel
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-primary-blue" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-300 font-medium backdrop-blur-sm"
                  placeholder="Entrez le code d'accès"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/60 hover:text-primary-blue transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border-2 border-red-400/50 rounded-xl p-4 text-red-200 text-sm font-medium flex items-center gap-2 backdrop-blur-sm"
              >
                <Shield className="w-4 h-4" />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Vérification en cours...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Accéder à la Présentation
                </>
              )}
            </button>
          </form>

          {/* Footer info */}
          <div className="mt-8 pt-6 border-t border-white/20 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-white/70">
              <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
              <span>Document confidentiel</span>
              <div className="w-2 h-2 bg-gold rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Éléments décoratifs */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold/30 rounded-full blur-sm"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-blue/30 rounded-full blur-sm"></div>
      </motion.div>
    </div>
  );
};

export default Login; 