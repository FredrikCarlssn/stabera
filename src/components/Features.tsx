import React from 'react';
import { ShieldCheckIcon, ArrowPathIcon, GlobeAltIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Pegged to SEK',
    description: 'Stabera is fully backed by the Swedish Krona, providing the stability of traditional currency with the benefits of crypto.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Regulatory Compliant',
    description: 'Built to comply with Swedish financial regulations, providing a secure and legal way to enter the crypto ecosystem.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Fast Transactions',
    description: 'Benefit from fast and low-cost transactions across the global blockchain network, making payments efficient.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Global Access',
    description: 'Connect Sweden to the global crypto economy, enabling businesses and individuals to participate in international markets.',
    icon: GlobeAltIcon,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#0a2236] to-[#0e2d47]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stabera-gradient animate-shimmer animate-fade-in-up">Why Choose Stabera?</h2>
          <p className="mt-4 text-lg text-cyan-100 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            Bringing the stability of the Swedish Krona to the innovative world of cryptocurrency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.name}
              className="bg-[#1a2a3a] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:scale-102 transition-transform duration-300 animate-fade-in-up"
              style={{animationDelay: `${0.3 + idx * 0.1}s`, animationFillMode: 'both', boxShadow: '0 2px 12px 0 #0a223688'}}
            >
              <div className="h-12 w-12 rounded-md bg-[#22334a] text-cyan-300 p-2 mb-5 flex items-center justify-center">
                <feature.icon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.name}</h3>
              <p className="text-cyan-100">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg shadow-lg animate-fade-in-up" style={{animationDelay: '0.7s', animationFillMode: 'both'}}>
          <div className="p-8 text-center text-[#0a2236]">
            <h3 className="text-2xl font-bold mb-4">Ready to embrace the future of Swedish finance?</h3>
            <a
              href="mailto:info@stabera.com"
              className="inline-block px-8 py-4 rounded-xl font-semibold bg-[#16243a] text-white shadow-md hover:bg-white hover:text-[#16243a] hover:border hover:border-[#16243a] transition-all duration-200 mt-4"
            >
              Email info@stabera.com
            </a>
            <p className="mb-6 max-w-2xl mx-auto">            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 