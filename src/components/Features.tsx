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
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Stabera?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Bringing the stability of the Swedish Krona to the innovative world of cryptocurrency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-12 w-12 rounded-md bg-sek-blue text-white p-2 mb-5">
                <feature.icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-sek-blue to-primary rounded-lg shadow-lg">
          <div className="p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to embrace the future of Swedish finance?</h3>
            <a
              href="mailto:info@stabera.com"
              className="inline-block btn bg-white text-primary hover:bg-gray-100 mt-4"
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