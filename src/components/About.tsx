import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Enabling a Swedish Crypto Economy
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Stabera is Sweden's first SEK-backed stablecoin, designed to bridge the gap between 
                traditional Swedish finance and the growing world of blockchain technology.
              </p>
              <p>
                Our mission is to enable Swedes to participate in the global crypto economy 
                while maintaining the stability and trust of their national currency.
              </p>
              <p>
                Each Stabera token is fully backed 1:1 by Swedish Krona reserves, providing 
                users with the confidence that their digital assets maintain real-world value.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-white p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Stabera Works</h3>
              
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sek-blue text-white font-bold flex items-center justify-center mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Deposit Swedish Krona</h4>
                    <p className="text-gray-600 mt-1">
                      Users deposit SEK into Stabera's regulated custodial accounts.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sek-blue text-white font-bold flex items-center justify-center mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Mint Stabera Tokens</h4>
                    <p className="text-gray-600 mt-1">
                      Equivalent Stabera tokens are minted on the blockchain at a 1:1 ratio.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sek-blue text-white font-bold flex items-center justify-center mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Use in the Crypto Ecosystem</h4>
                    <p className="text-gray-600 mt-1">
                      Use your Stabera tokens for trading, payments, and DeFi applications.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sek-blue text-white font-bold flex items-center justify-center mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Redeem for SEK Anytime</h4>
                    <p className="text-gray-600 mt-1">
                      Redeem your Stabera tokens for Swedish Krona whenever you need.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 