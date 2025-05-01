import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0e2d47] to-[#18314f]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-stabera-gradient mb-6 animate-shimmer animate-fade-in-up">Enabling a Swedish Crypto Economy</h2>
            <div className="space-y-6 text-cyan-100 animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
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
          
          <div className="bg-[#16243a] p-8 rounded-lg overflow-hidden shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both', boxShadow: '0 4px 24px 0 #0a2236cc'}}>
            <div className="bg-[#11263a] p-8">
              <h3 className="text-2xl font-bold text-stabera-gradient mb-6 animate-shimmer">How Stabera Works</h3>
              
              <ol className="space-y-6">
                {[1,2,3,4].map((num, idx) => (
                  <li className="flex animate-fade-in-up" style={{animationDelay: `${0.5 + idx * 0.1}s`, animationFillMode: 'both'}} key={num}>
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-cyan-700 text-white font-bold flex items-center justify-center mr-4">{num}</div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">{[
                        'Deposit Swedish Krona',
                        'Mint Stabera Tokens',
                        'Use in the Crypto Ecosystem',
                        'Redeem for SEK Anytime',
                      ][idx]}</h4>
                      <p className="text-cyan-100 mt-1">{[
                        "Users deposit SEK into Stabera's regulated custodial accounts.",
                        'Equivalent Stabera tokens are minted on the blockchain at a 1:1 ratio.',
                        'Use your Stabera tokens for trading, payments, and DeFi applications.',
                        'Redeem your Stabera tokens for Swedish Krona whenever you need.',
                      ][idx]}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 