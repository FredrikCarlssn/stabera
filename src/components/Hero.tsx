import React from 'react';
import coinLogo from '../img/stabera-coin.png';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 py-24 bg-gradient-to-b from-[#0a2236] to-[#0e2d47] relative overflow-hidden">
      {/* Animated particle background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400 opacity-70 blur-xl animate-float"
            style={{
              width: `${16 + (i % 3) * 12}px`,
              height: `${16 + (i % 3) * 12}px`,
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="md:w-1/2 md:pr-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-stabera-gradient animate-shimmer animate-fade-in-up">
            Sweden's Digital Economy
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-xl mx-auto md:mx-0 animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            Stabera enables seamless crypto transactions with the stability of the Swedish Krona. Bringing blockchain innovation to Sweden's financial ecosystem.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative flex flex-col items-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-56 h-56 rounded-full bg-gradient-to-tr from-cyan-400 via-green-400 to-transparent blur-2xl opacity-60 animate-float"></div>
            <div className="bg-[#16243a] rounded-2xl p-8 shadow-2xl flex flex-col items-center animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both', boxShadow: '0 4px 24px 0 #0a2236cc'}}>
              <img src={coinLogo} alt="Stabera Coin Logo" className="h-40 w-40 object-contain mb-6" />
              <p className="text-3xl font-bold text-white mb-2">1 SEKash = 1 SEK</p>
              <p className="text-cyan-200">Stable, Secure, Swedish</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 