import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex-1">
            <div className="text-2xl font-bold text-white mb-4">Stabera</div>
            <p className="text-gray-400 mb-8">
              Sweden's first SEK-backed stablecoin, bringing the stability of the Swedish Krona to the blockchain.
            </p>
          </div>
          <div className="flex-1 md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: info@stabera.se</li>
              <li className="text-gray-400">Stockholm, Sweden</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Stabera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 