import React, { useState, useEffect } from 'react';
import { ArrowLeft, Compass, MapPin, Calendar, Users, Mountain, Clock, Mail, Star, ExternalLink } from 'lucide-react';

const TripsLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
      image: null // Will show placeholder
    }
    // Add more trips here as needed
  ];

  const FloatingOrbs = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-64 h-64 rounded-full opacity-10 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${['rgb(102, 126, 234)', 'rgb(118, 75, 162)', 'rgb(16, 185, 129)', 'rgb(245, 158, 11)'][i % 4]}40 0%, transparent 70%)`,
            left: `${(i * 20) % 100}%`,
            top: `${(i * 25) % 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i * 0.5}s`
          }}
        />
      ))}
    </div>
  );

  const MouseTracker = () => (
    <div
      className="fixed pointer-events-none z-10 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-40 blur-sm transition-all duration-75"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
      }}
    />
  );

  const GradientText = ({ children, className = "" }) => (
    <span className={`bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );

  const GlassCard = ({ children, className = "", hover = true }) => (
    <div className={`
      backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl
      shadow-2xl transition-all duration-500
      ${hover ? 'hover:bg-white/20 hover:border-white/30 hover:shadow-purple-500/20 hover:shadow-2xl hover:scale-105' : ''}
      ${className}
    `}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <FloatingOrbs />
      <MouseTracker />
      

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center py-16 relative">
          <div className="mb-8 relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  <GradientText>Mike's Adventures</GradientText>
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
          </div>
        </header>

        {/* Trips Section */}
        <section className="py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText>My Trip Plans</GradientText>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {trips.map((trip, index) => (
              <a 
                key={index}
                href={trip.link}
                className="group block transition-all duration-300 hover:scale-105"
              >
                <GlassCard className="h-full p-0 overflow-hidden">
                  {/* Trip Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
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
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
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
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">
                        {trip.duration}
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">
                        {trip.dates}
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">
                        {trip.groupSize}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-blue-400 group-hover:text-purple-400 transition-colors">
                      <span className="text-sm font-medium">View detailed itinerary</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Mike Thompson - Happy travels! ✈️</p>
        </div>
      </footer>
    </div>
  );
};

export default TripsLanding;