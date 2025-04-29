import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              <span className="text-sek-blue">SEK</span> Stablecoin for 
              <span className="text-sek-blue"> Sweden's</span> Digital Economy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stabera enables seamless crypto transactions with the stability of the Swedish Krona. 
              Bringing blockchain innovation to Sweden's financial ecosystem.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sek-blue to-sek-yellow rounded-lg blur opacity-75"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center justify-center h-64 bg-gray-50 rounded-md">
                  <div className="text-center">
                    <div className="flex justify-center items-center mb-4">
                      <div className="h-16 w-16 bg-sek-blue rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">SEK</span>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">1 STABERA = 1 SEK</p>
                    <p className="text-gray-600 mt-2">Stable, Secure, Swedish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 