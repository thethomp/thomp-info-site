import React, { useEffect } from 'react';
import { Compass, MapPin, ExternalLink, Mountain } from 'lucide-react';

const TripsLanding = () => {
  useEffect(() => {
    document.title = 'Thomp Trips';
  }, []);

  const trips = [
    {
      title: 'Pacific Northwest Family Adventure',
      location: 'Whidbey Island & Leavenworth, WA',
      description: 'Complete family itinerary with fishing charters, alpine hiking, Bavarian culture, and island exploration. Includes detailed activities, restaurant guides, and insider tips.',
      duration: '8 days',
      dates: 'July 26 - Aug 3',
      groupSize: '7 family members',
      link: '/trips/pacific-northwest-family-adventure',
      icon: Mountain,
      image: '/pnw-trip.png'
    }
    // Add more trips here as needed
  ];


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center py-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-green-600">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Thomp Trips
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 mb-4">
              Trip plans, itineraries, and memories to share
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Hey there! I love planning adventures and wanted a place to organize all my trip plans and itineraries. 
              Feel free to browse around and steal any ideas for your own travels!
            </p>
          </div>
        </header>

        {/* Trips Section */}
        <section className="py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              My Trip Plans
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {trips.map((trip, index) => (
              <a 
                key={index}
                href={trip.link}
                className="group block transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gray-800 rounded-lg shadow-xl h-full p-0 overflow-hidden hover:shadow-2xl hover:bg-gray-750 transition-all">
                  {/* Trip Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-green-600 relative overflow-hidden">
                    {trip.image ? (
                      <img 
                        src={trip.image} 
                        alt={trip.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <trip.icon className="w-16 h-16 text-white/70" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  
                  {/* Trip Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                      {trip.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-blue-400 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      {trip.location}
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {trip.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-xs border border-gray-600 text-gray-300">
                        {trip.duration}
                      </span>
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-xs border border-gray-600 text-gray-300">
                        {trip.dates}
                      </span>
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-xs border border-gray-600 text-gray-300">
                        {trip.groupSize}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-blue-400 group-hover:text-green-400 transition-colors">
                      <span className="text-sm font-medium">View detailed itinerary</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Mike Thompson - Happy travels! ✈️</p>
        </div>
      </footer>
    </div>
  );
};

export default TripsLanding;