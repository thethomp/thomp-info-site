import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Star, Fish, Mountain, Wine, Camera, Palette, TreePine, Bird, Activity, DollarSign, Sun, Phone, AlertCircle, ChevronRight, Heart, Utensils, Car, Plane, X, ExternalLink, Info, Home, Navigation, CloudRain, Thermometer, Wind, Eye } from 'lucide-react';

const PacificNorthwestTrip = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeLocationTab, setActiveLocationTab] = useState('whidbey');
  const [selectedItem, setSelectedItem] = useState(null);
  const [weather, setWeather] = useState({
    whidbey: null,
    leavenworth: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    document.title = 'Pacific Northwest Trip - Thomp Trips';
  }, []);

  // Weather setup - using weather.com links (more reliable than API due to CORS restrictions)
  useEffect(() => {
    setWeather({
      whidbey: {
        location: 'Whidbey Island, WA',
        isLink: true,
        url: 'https://weather.com/weather/tenday/l/Whidbey+Island+Station+WA?canonicalCityId=f61416eaa06978f7007de626e621f166'
      },
      leavenworth: {
        location: 'Leavenworth, WA', 
        isLink: true,
        url: 'https://weather.com/weather/tenday/l/Leavenworth+WA?canonicalCityId=62e09e468079d6d26d8056981bfb735c'
      },
      loading: false,
      error: null
    });
  }, []);

  // Helper function to convert weather icons to emojis
  const getWeatherEmoji = (iconCode) => {
    const iconMap = {
      '01d': '☀️', '01n': '🌙',
      '02d': '⛅', '02n': '☁️',
      '03d': '☁️', '03n': '☁️',
      '04d': '☁️', '04n': '☁️',
      '09d': '🌦️', '09n': '🌦️',
      '10d': '🌧️', '10n': '🌧️',
      '11d': '⛈️', '11n': '⛈️',
      '13d': '❄️', '13n': '❄️',
      '50d': '🌫️', '50n': '🌫️'
    };
    return iconMap[iconCode] || '🌤️';
  };

  // Weather component
  const WeatherCard = ({ location, data, loading, error }) => {
    if (loading) {
      return (
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-6 bg-gray-700 rounded w-1/2 mb-2"></div>
            <div className="flex space-x-2">
              <div className="h-4 bg-gray-700 rounded w-1/3"></div>
              <div className="h-4 bg-gray-700 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      );
    }

    if (error || !data) {
      return (
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-2">{location}</h4>
          <p className="text-gray-400 text-sm">Weather data unavailable</p>
        </div>
      );
    }

    // Handle weather.com link fallback
    if (data.isLink) {
      return (
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-blue-400 mb-3">{data.location}</h4>
          <div className="text-center">
            <p className="text-gray-300 mb-3">Check current weather conditions</p>
            <a 
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Sun className="w-4 h-4" />
              View Weather Forecast
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-800 rounded-lg p-4">
        <h4 className="font-semibold text-blue-400 mb-3">{data.location}</h4>
        
        {/* Current Weather */}
        <div className="mb-4">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">{data.current.icon}</span>
            <div>
              <div className="text-2xl font-bold text-white">{data.current.temp}°F</div>
              <div className="text-gray-300 capitalize">{data.current.condition}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              <span>Humidity: {data.current.humidity}%</span>
            </div>
            <div className="flex items-center">
              <Wind className="w-4 h-4 mr-1" />
              <span>Wind: {data.current.wind} mph</span>
            </div>
          </div>
        </div>

        {/* 3-Day Forecast */}
        <div>
          <h5 className="text-sm font-semibold text-gray-400 mb-2">3-Day Forecast</h5>
          <div className="space-y-2">
            {data.forecast.map((day, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-300 w-16">{day.day}</span>
                <span className="text-lg">{day.icon}</span>
                <span className="text-gray-300 capitalize flex-1 text-center">{day.condition}</span>
                <span className="text-white font-medium">
                  {day.high}°/<span className="text-gray-400">{day.low}°</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Detailed information for activities
  const activityDetails = {
    // Whidbey Activities
    'Deception Pass Bridge': {
      description: 'One of the most photographed bridges in America, spanning 180 feet above the swirling waters below.',
      details: [
        'Free to visit, open 24/7',
        'Multiple pullouts for photos',
        'Walk across on sidewalks for spectacular views',
        'North and South beach access nearby',
        'Tide pools and hiking trails available'
      ],
      location: 'Highway 20, between Oak Harbor and Anacortes',
      tips: 'Best visited early morning or late afternoon for photos. Can be windy!'
    },
    'Windjammer Park': {
      description: 'Beautiful waterfront park with a 1-mile fully accessible trail perfect for all abilities.',
      details: [
        'Wheelchair and stroller friendly',
        'Spectacular views of Penn Cove and Olympic Mountains',
        'Benches throughout for resting',
        'Playground for kids',
        'Covered picnic areas'
      ],
      location: 'Windjammer Way, Oak Harbor',
      tips: 'Great for sunset walks. Bring binoculars for seal and bird watching.'
    },
    'Penn Cove': {
      description: 'Large saltwater cove famous for Penn Cove mussels and excellent bird watching.',
      details: [
        'Important Bird Area (IBA) designation',
        'Home to 211+ bird species',
        'Best spots: Coupeville Wharf, Keystone Landing',
        'Harbor seals and gray whales visible seasonally',
        'Historic waterfront with shops and restaurants'
      ],
      location: 'Coupeville waterfront area',
      tips: 'Low tide offers best wildlife viewing. Bring spotting scope if you have one.'
    },
    'Meerkerk Gardens': {
      description: "Whidbey Island's premier rhododendron garden with 53 acres of woodland gardens and trails.",
      details: [
        'Admission: $10 adults, kids under 13 free',
        'Open 9am-5pm daily',
        'Dogs on leash welcome',
        '10 acres of display gardens',
        '43 acres of forest preserve',
        'Peak bloom: April-May for rhododendrons',
        'Wheelchair accessible paths available'
      ],
      location: '3659 Meerkerk Lane, Greenbank',
      contact: '360-678-1912',
      tips: 'Bring water and comfortable shoes. Allow 2-3 hours for full experience.'
    },
    'Paint Your World': {
      description: 'Paint-your-own pottery studio perfect for creating family memories and souvenirs.',
      details: [
        'No studio fees ever',
        'Glass fusing and canvas painting also available',
        'Can ship finished pieces to your home',
        'Espresso bar and smoothies on site',
        'Great for all ages and skill levels',
        'Birthday party packages available'
      ],
      location: '860 SE Pioneer Way Ste 102, Oak Harbor',
      contact: 'Book online at paintyourworld.net',
      tips: 'Pottery takes 5-7 days to fire, so plan early in trip or use shipping service.'
    },
    // Leavenworth Activities
    'Colchuck Lake': {
      description: 'Premier alpine lake hike showcasing crystal-clear waters surrounded by dramatic granite peaks.',
      details: [
        '8.7 miles round trip, 2,300 feet elevation gain',
        'Difficulty: Hard',
        'Trailhead: Stuart Lake Trailhead',
        'Northwest Forest Pass required ($5/day)',
        'Free day-use wilderness permit at trailhead',
        'Best months: July-October',
        'No dogs allowed',
        'Arrive before 7am for parking'
      ],
      location: '8 miles from Leavenworth via Icicle Creek Road',
      tips: 'Bring bug spray, lunch, and layers. Snow possible into July. This is THE hike for mountain lovers!'
    },
    'Fly Fishing': {
      description: 'World-class fly fishing on the Icicle River and Wenatchee River with experienced guides.',
      details: [
        'Half-day trips: $250-350 per person',
        'Full-day trips: $400-500 per person',
        'All equipment and instruction included',
        'Washington State License required (buy online)',
        'Best spots: Icicle Creek, Wenatchee River',
        'Species: Rainbow trout, cutthroat, salmon (seasonal)',
        'Guides provide lunch on full-day trips'
      ],
      guides: [
        'Family Lines Fly Fishing: 206-506-6286',
        'Wenatchee Fly Co: 509-670-7157',
        'Northwest Fly-Fishing Academy: 206-506-6286'
      ],
      tips: 'Book 2-3 weeks ahead for summer. Early morning trips are best.'
    },
    'München Haus': {
      description: 'Authentic Bavarian beer garden with outdoor seating and mountain views.',
      details: [
        'Famous for bratwurst and pretzels',
        'Over 20 German beers on tap',
        'Dog-friendly outdoor seating',
        'Live music on weekends',
        'No reservations - first come, first served',
        'Cash and card accepted',
        'Kid-friendly with games'
      ],
      location: '709 Front St, Leavenworth',
      hours: 'Daily 11am-9pm (summer)',
      tips: 'Peak times are 12-2pm and 5-7pm. Great people watching on Front Street.'
    }
  };

  const fixedSchedule = [
    { date: 'Saturday, July 26', icon: <Plane className="w-5 h-5" />, events: ['Morning: Pick up at Sea-Tac (~9am)', 'From Airport: Head to home in Lake Forest Park', 'Afternoon: Check into Oak Harbor Airbnb'] },
    { date: 'Monday, July 28', icon: <Fish className="w-5 h-5" />, events: ['6:00 AM: Fishing Charter (already booked)'] },
    { date: 'Sun 7/27 OR Tue 7/29', icon: <Users className="w-5 h-5" />, events: ['Cousin visit for lunch/dinner'] },
    { date: 'Wednesday, July 30', icon: <Car className="w-5 h-5" />, events: ['Depart Oak Harbor → Drive to Leavenworth'] },
    { date: 'Sunday, August 3', icon: <Plane className="w-5 h-5" />, events: ['Early departure for Sea-Tac (9am flights)'] }
  ];

  const accommodations = {
    oakHarbor: {
      name: 'Oak Harbor Airbnb',
      address: '2333 Happy Ln, Oak Harbor, WA 98277',
      checkIn: 'July 26, afternoon',
      checkOut: 'July 30, morning',
      notes: 'Close to Windjammer Park and downtown'
    },
    leavenworth: {
      name: 'Leavenworth Airbnb',
      address: 'Christensen Rd, Leavenworth, WA 98826',
      checkIn: 'July 30, afternoon',
      checkOut: 'August 3, morning',
      notes: 'Mountain views, close to downtown'
    }
  };

  const DetailModal = ({ item, onClose }) => {
    const details = activityDetails[item];
    if (!details) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">{item}</h3>
            <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded text-gray-300">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6 space-y-4">
            <p className="text-gray-300 text-lg">{details.description}</p>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center text-white">
                <Info className="w-4 h-4 mr-2 text-blue-400" />
                Details
              </h4>
              <ul className="space-y-1">
                {details.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300 ml-1">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {details.location && (
              <div>
                <h4 className="font-semibold mb-1 flex items-center text-white">
                  <MapPin className="w-4 h-4 mr-2 text-green-400" />
                  Location
                </h4>
                <p className="text-sm text-gray-300">{details.location}</p>
              </div>
            )}

            {details.contact && (
              <div>
                <h4 className="font-semibold mb-1 flex items-center text-white">
                  <Phone className="w-4 h-4 mr-2 text-purple-400" />
                  Contact
                </h4>
                <p className="text-sm text-gray-300">{details.contact}</p>
              </div>
            )}

            {details.hours && (
              <div>
                <h4 className="font-semibold mb-1 flex items-center text-white">
                  <Clock className="w-4 h-4 mr-2 text-orange-400" />
                  Hours
                </h4>
                <p className="text-sm text-gray-300">{details.hours}</p>
              </div>
            )}

            {details.guides && (
              <div>
                <h4 className="font-semibold mb-2 text-white">Guide Services</h4>
                <ul className="space-y-1">
                  {details.guides.map((guide, idx) => (
                    <li key={idx} className="text-sm text-gray-300">{guide}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.tips && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-1 flex items-center text-white">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Insider Tips
                </h4>
                <p className="text-sm text-gray-300">{details.tips}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ActivityCard = ({ icon, title, items }) => (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3 text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => {
          const itemName = item.split(' - ')[0];
          const hasDetails = activityDetails[itemName];
          
          return (
            <li key={idx} className="flex items-start">
              <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <button
                onClick={() => hasDetails && setSelectedItem(itemName)}
                className={`text-sm text-left ml-1 ${
                  hasDetails 
                    ? 'text-blue-400 hover:text-blue-300 underline cursor-pointer' 
                    : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const whidbeyActivities = {
    outdoor: [
      'Deception Pass Bridge - Spectacular views',
      'Windjammer Park - 1-mile accessible trail',
      'Joseph Whidbey State Park - 2.5-mile loop',
      'Beach access at North Beach, Fort Casey',
      'Scenic drives: Ebey\'s Landing, West Beach',
      'Biking routes along waterfront'
    ],
    dining: [
      'Island Cafe - All-day breakfast, comfort food',
      'The Mill at The Kasteel - Mexican fusion',
      'Chris\' Bakery - Operating since 1943',
      'Flyers Restaurant - Craft beer & fresh seafood',
      'Inn at Langley - Fine dining, water views',
      'Frasers Gourmet Hideaway - Oak Harbor\'s premier'
    ],
    culture: [
      'Pacific Northwest Naval Air Museum',
      'Coupeville Historic Walking Tour - 65 sites',
      'Garry Oak Gallery - 25 local artists',
      'Wine tasting at Ott & Hunter Wines',
      'Island County Historical Museum',
      'Master Gardener Demonstration Gardens'
    ],
    nature: [
      'Penn Cove - Bird watching, 211+ species',
      'Deer Lagoon Preserve - Important Bird Area',
      'Meerkerk Gardens - Rhododendron showcase',
      'Bayview Garden - 30-year family nursery',
      'Whidbey Audubon Society - Free bird lists',
      'Ebey\'s Landing - Prairie and bluff trails'
    ],
    creative: [
      'Paint Your World - Pottery painting studio',
      'Whidbey Clay Center - Community studio',
      'Ishler Pottery Studio - Functional pieces',
      'Penn Cove Pottery - Waterfront location',
      'Cultus Bay Gardens - Floral arranging classes',
      'Local art galleries in Coupeville'
    ]
  };

  const leavenworthActivities = {
    outdoor: [
      'Colchuck Lake - 8.7 miles, premier alpine hike',
      'Waterfront Park Trail - 3 miles flat riverside',
      'Apple Capital Loop - 22 miles paved biking',
      'River tubing on Wenatchee River',
      'Fly Fishing - Guided trips available',
      'Icicle River Nature Trail - Wheelchair accessible'
    ],
    dining: [
      'München Haus - Beer garden, mountain views',
      'Andreas Keller - Authentic German atmosphere',
      'Ludwig\'s - Biergarten, live polka Saturdays',
      'Café Mozart - European fine dining',
      'JJ Hills - Lodge atmosphere',
      'Fresh Burger Cafe - Gourmet burgers'
    ],
    culture: [
      'Nutcracker Museum - 7,000 piece collection',
      'Greater Leavenworth Museum - Town history',
      'Front Street Bavarian shopping',
      'Art galleries downtown',
      'Leavenworth Adventure Park - Alpine coaster'
    ],
    wine: [
      'Patterson Cellars - Downtown, $25 tasting',
      'Stein Beer Hall - 55 beers on tap',
      'Icicle Ridge Winery - Log building views',
      'Silvara Cellars - Hilltop Cascade views',
      'Eagle Creek Winery - Family-owned',
      'Wine shuttle tours available'
    ],
    nature: [
      'Ohme Gardens - Alpine rock garden, Wenatchee',
      'Leavenworth National Fish Hatchery',
      'Blackbird Island Trail - 1-mile paved loop',
      'Wenatchee River trails - Bird watching',
      'Mountain wildflower hikes',
      'Tumwater Canyon scenic drive'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Detail Modal */}
      {selectedItem && (
        <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-4">Pacific Northwest Family Adventure</h1>
          <p className="text-2xl mb-6">Whidbey Island & Leavenworth</p>
          <div className="flex flex-wrap gap-6 text-lg">
            <div className="flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              July 26 - August 3, 2025
            </div>
            <div className="flex items-center">
              <Users className="w-6 h-6 mr-2" />
              7 Family Members
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2" />
              Oak Harbor & Leavenworth, WA
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-800 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {['overview', 'activities', 'dining', 'details', 'schedule', 'essentials'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm uppercase tracking-wider transition-colors whitespace-nowrap ${
                  activeTab === tab 
                    ? 'border-blue-400 text-blue-400' 
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                {tab === 'details' ? 'Trip Details' : tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Fixed Schedule */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Clock className="w-8 h-8 mr-3 text-blue-600" />
                Fixed Schedule
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fixedSchedule.map((day, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg shadow-lg p-4">
                    <div className="flex items-center mb-2 text-blue-600">
                      {day.icon}
                      <h3 className="font-semibold ml-2">{day.date}</h3>
                    </div>
                    <ul className="space-y-1">
                      {day.events.map((event, i) => (
                        <li key={i} className="text-sm text-gray-300">{event}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Weather Info */}
            <section className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <Sun className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">Live Weather Forecast</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <WeatherCard 
                  location="Whidbey Island" 
                  data={weather.whidbey} 
                  loading={weather.loading} 
                  error={weather.error} 
                />
                <WeatherCard 
                  location="Leavenworth" 
                  data={weather.leavenworth} 
                  loading={weather.loading} 
                  error={weather.error} 
                />
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Summer Trip Tips</h3>
                <p className="text-gray-300 text-sm">
                  Pacific Northwest summers feature long daylight hours (sunrise ~5:30am, sunset ~9:00pm). 
                  Pack layers for temperature swings and always bring rain gear just in case!
                </p>
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Trip Highlights</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <Mountain className="w-12 h-12 mx-auto mb-2 text-green-400" />
                  <h3 className="font-semibold text-white">Mountain Adventures</h3>
                  <p className="text-sm text-gray-300 mt-1">Alpine lakes & trails</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <Fish className="w-12 h-12 mx-auto mb-2 text-blue-400" />
                  <h3 className="font-semibold text-white">Fishing Experiences</h3>
                  <p className="text-sm text-gray-300 mt-1">Charter & fly fishing</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <Palette className="w-12 h-12 mx-auto mb-2 text-purple-400" />
                  <h3 className="font-semibold text-white">Arts & Culture</h3>
                  <p className="text-sm text-gray-300 mt-1">Museums & galleries</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <TreePine className="w-12 h-12 mx-auto mb-2 text-pink-400" />
                  <h3 className="font-semibold text-white">Gardens & Nature</h3>
                  <p className="text-sm text-gray-300 mt-1">53 acres of gardens</p>
                </div>
              </div>
            </section>

            {/* Info Box */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-white">
                <Info className="w-6 h-6 mr-2 text-blue-400" />
                Click on Any Activity for Detailed Information
              </h3>
              <p className="text-gray-300">
                Throughout this guide, blue underlined items can be clicked for complete details including 
                locations, prices, hours, contact information, and insider tips!
              </p>
            </div>
          </div>
        )}

        {activeTab === 'activities' && (
          <div>
            {/* Location Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-700 rounded-lg p-1 inline-flex">
                <button
                  onClick={() => setActiveLocationTab('whidbey')}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    activeLocationTab === 'whidbey' 
                      ? 'bg-gray-800 text-blue-400 shadow' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Whidbey Island
                </button>
                <button
                  onClick={() => setActiveLocationTab('leavenworth')}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    activeLocationTab === 'leavenworth' 
                      ? 'bg-gray-800 text-blue-400 shadow' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Leavenworth
                </button>
              </div>
            </div>

            {/* Activities Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {activeLocationTab === 'whidbey' && (
                <>
                  <ActivityCard 
                    icon={<Mountain className="w-6 h-6 text-green-600" />}
                    title="Outdoor Adventures"
                    items={whidbeyActivities.outdoor}
                  />
                  <ActivityCard 
                    icon={<Camera className="w-6 h-6 text-purple-600" />}
                    title="Museums & Culture"
                    items={whidbeyActivities.culture}
                  />
                  <ActivityCard 
                    icon={<Bird className="w-6 h-6 text-blue-600" />}
                    title="Nature & Wildlife"
                    items={whidbeyActivities.nature}
                  />
                  <ActivityCard 
                    icon={<Palette className="w-6 h-6 text-pink-600" />}
                    title="Arts & Crafts"
                    items={whidbeyActivities.creative}
                  />
                </>
              )}
              {activeLocationTab === 'leavenworth' && (
                <>
                  <ActivityCard 
                    icon={<Mountain className="w-6 h-6 text-green-600" />}
                    title="Outdoor Adventures"
                    items={leavenworthActivities.outdoor}
                  />
                  <ActivityCard 
                    icon={<Camera className="w-6 h-6 text-purple-600" />}
                    title="Bavarian Culture"
                    items={leavenworthActivities.culture}
                  />
                  <ActivityCard 
                    icon={<Wine className="w-6 h-6 text-red-600" />}
                    title="Wine & Beer"
                    items={leavenworthActivities.wine}
                  />
                  <ActivityCard 
                    icon={<TreePine className="w-6 h-6 text-pink-600" />}
                    title="Gardens & Nature"
                    items={leavenworthActivities.nature}
                  />
                </>
              )}
            </div>

            {/* Anytime Activities */}
            <section className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Anytime Activities (Both Locations)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center text-white">
                    <Activity className="w-5 h-5 mr-2 text-orange-400" />
                    Pickleball
                  </h4>
                  <p className="text-sm text-gray-300">
                    Oak Harbor Park (4 courts) & Osborn Elementary in Leavenworth
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center text-white">
                    <Heart className="w-5 h-5 mr-2 text-red-400" />
                    Indoor Fun
                  </h4>
                  <p className="text-sm text-gray-300">
                    Board games, cards, puzzles, movie nights, cooking together
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center text-white">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" />
                    Evening Activities
                  </h4>
                  <p className="text-sm text-gray-300">
                    Sunset watching (9pm!), stargazing, happy hour at the Airbnb
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'dining' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
                <Utensils className="w-8 h-8 mr-3 text-orange-400" />
                Restaurant Guide
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">Whidbey Island</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                      <h4 className="font-semibold text-lg mb-2 text-white">Casual Favorites</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="border-b border-gray-600 pb-1">
                          <strong>Island Cafe</strong> - 1542 NE 7th Ave
                          <br />All-day breakfast, comfort food, local favorite
                        </li>
                        <li className="border-b border-gray-600 pb-1">
                          <strong>The Mill at The Kasteel</strong>
                          <br />Mexican-American fusion, homemade tortillas
                        </li>
                        <li className="border-b border-gray-600 pb-1">
                          <strong>Chris' Bakery</strong>
                          <br />Since 1943, fresh pastries, must-try donuts
                        </li>
                        <li>
                          <strong>Flyers Restaurant & Brewery</strong>
                          <br />Craft beers, fresh seafood, beer garden
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                      <h4 className="font-semibold text-lg mb-2 text-white">Special Occasions</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="border-b border-gray-600 pb-1">
                          <strong>Inn at Langley</strong> - 400 1st St, Langley
                          <br />Prix fixe menu, $95-125pp, reserve 2-3 weeks ahead
                        </li>
                        <li className="border-b border-gray-600 pb-1">
                          <strong>Frasers Gourmet Hideaway</strong>
                          <br />Oak Harbor's premier, weekend reservations recommended
                        </li>
                        <li>
                          <strong>Front Street Grill</strong> - Coupeville
                          <br />Penn Cove mussels, waterfront dining
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-green-400">Leavenworth</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                      <h4 className="font-semibold text-lg mb-2 text-white">German Essentials</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="border-b border-gray-600 pb-1">
                          <button
                            onClick={() => setSelectedItem('München Haus')}
                            className="text-left text-blue-700 hover:text-blue-900 underline"
                          >
                            <strong>München Haus</strong>
                          </button>
                          - 709 Front St
                          <br />Beer garden, no reservations, dog-friendly
                        </li>
                        <li className="border-b border-gray-600 pb-1">
                          <strong>Andreas Keller</strong>
                          <br />Authentic atmosphere, weekend reservations crucial
                        </li>
                        <li className="border-b border-gray-600 pb-1">
                          <strong>Ludwig's</strong>
                          <br />Live polka Saturdays, famous Schweinshax'n
                        </li>
                        <li>
                          <strong>Café Mozart</strong>
                          <br />Fine European, 1,600-bottle wine cellar
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                      <h4 className="font-semibold text-lg mb-2 text-white">Non-German Options</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="border-b border-gray-600 pb-1">
                          <strong>JJ Hills Restaurant</strong>
                          <br />Lodge atmosphere, mountain-view outdoor seating
                        </li>
                        <li className="border-b border-gray-600 pb-1">
                          <strong>Fresh Burger Cafe</strong>
                          <br />Gourmet burgers, vegetarian options
                        </li>
                        <li>
                          <strong>Gustav's Grill</strong>
                          <br />American fare, family-friendly
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'details' && (
          <div className="space-y-8">
            {/* Accommodations */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
                <Home className="w-8 h-8 mr-3 text-blue-400" />
                Accommodations
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Oak Harbor</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p><strong>Address:</strong> {accommodations.oakHarbor.address}</p>
                    <p><strong>Check-in:</strong> {accommodations.oakHarbor.checkIn}</p>
                    <p><strong>Check-out:</strong> {accommodations.oakHarbor.checkOut}</p>
                    <p><strong>Notes:</strong> {accommodations.oakHarbor.notes}</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Leavenworth</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p><strong>Address:</strong> {accommodations.leavenworth.address}</p>
                    <p><strong>Check-in:</strong> {accommodations.leavenworth.checkIn}</p>
                    <p><strong>Check-out:</strong> {accommodations.leavenworth.checkOut}</p>
                    <p><strong>Notes:</strong> {accommodations.leavenworth.notes}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Contacts */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
                <Phone className="w-8 h-8 mr-3 text-purple-400" />
                Important Contacts & Addresses
              </h2>
              <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                {/* Key Address */}
                <div className="mb-6 p-4 bg-blue-900/50 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold mb-2 flex items-center text-blue-300">
                    <Home className="w-5 h-5 mr-2" />
                    Mike & Natalie's House (Stop After Airport)
                  </h4>
                  <p className="text-sm text-blue-200 font-medium">
                    3110 NE 185th St, Lake Forest Park, WA 98155
                  </p>
                  <p className="text-xs text-blue-300 mt-1">
                    First stop from Sea-Tac before heading to Oak Harbor
                  </p>
                </div>
                
              </div>
            </section>

            {/* Directions */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
                <Navigation className="w-8 h-8 mr-3 text-green-400" />
                Key Directions
              </h2>
              <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Sea-Tac to Oak Harbor</h4>
                    <p className="text-sm text-gray-300">
                      ~2 hours via I-5 N and WA-20 W. Stop at Deception Pass Bridge for photos!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Oak Harbor to Leavenworth</h4>
                    <p className="text-sm text-gray-300">
                      ~3.5 hours via WA-20 E, I-5 S, and US-2 E. Scenic route through Cascade Mountains.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Leavenworth to Sea-Tac</h4>
                    <p className="text-sm text-gray-300">
                      ~2.5 hours via US-2 W and I-5 S. Leave by 6:30am for 9am flights.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
                <AlertCircle className="w-6 h-6 mr-2 text-blue-400" />
                Flexible Itinerary Approach
              </h2>
              <p className="text-gray-300">
                This trip is designed as a "menu of options" rather than a rigid schedule. 
                Each morning, choose activities based on weather, energy levels, and what sounds fun!
                Only the items in the Fixed Schedule are set in stone.
              </p>
            </div>
            
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-white">Advance Booking Timeline</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold flex items-center mb-2 text-white">
                    <Clock className="w-5 h-5 mr-2 text-orange-400" />
                    2-3 Weeks Before Trip
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Restaurant reservations for special dinners</li>
                    <li>• Fly fishing guide bookings</li>
                    <li>• Wine tasting reservations for groups of 6+</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold flex items-center mb-2 text-white">
                    <Phone className="w-5 h-5 mr-2 text-yellow-400" />
                    Week Before Trip
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Confirm all reservations</li>
                    <li>• Check weather forecast</li>
                    <li>• Buy Washington State fishing licenses online</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'essentials' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Packing List</h2>
              <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                <h3 className="font-semibold mb-3 text-white">Clothing & Gear</h3>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Layers for 66-75°F days, cool evenings</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Rain jacket (just in case)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Comfortable walking shoes</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Hiking boots (for Colchuck Lake)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Swimsuit for river activities</span>
                  </li>
                </ul>
                
                <h3 className="font-semibold mb-3 text-white">Activity Items</h3>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Pickleball paddles & balls</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Board games & cards</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Binoculars for bird/whale watching</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Camera with extra batteries</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Day pack for hiking</span>
                  </li>
                </ul>

                <h3 className="font-semibold mb-3 text-white">Essentials</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Sun protection (hat, sunscreen, sunglasses)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Blankets for outdoor activities</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Reusable water bottles</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span className="ml-1 text-gray-300">Bug spray for hiking</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Budget Guidelines</h2>
              <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                    <span className="text-sm font-medium text-white">Casual Meals</span>
                    <span className="text-sm text-gray-300">$15-25/person</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                    <span className="text-sm font-medium text-white">Upscale Dining</span>
                    <span className="text-sm text-gray-300">$35-60/person</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                    <span className="text-sm font-medium text-white">Wine Tasting</span>
                    <span className="text-sm text-gray-300">$10-25/person</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                    <span className="text-sm font-medium text-white">Museums</span>
                    <span className="text-sm text-gray-300">$5-15/person</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                    <span className="text-sm font-medium text-white">Garden Admission</span>
                    <span className="text-sm text-gray-300">$10/person</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                    <span className="text-sm font-medium text-white">Fly Fishing Guide</span>
                    <span className="text-sm text-gray-300">$250-500/person</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Parking Pass</span>
                    <span className="text-sm text-gray-300">$5/day or $30/annual</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-700 rounded-lg p-4">
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-green-400 mr-2" />
                  <p className="text-sm text-gray-300">
                    <strong>Free Activities:</strong> Beaches, most trails, scenic drives, 
                    historic downtown areas, window shopping, pickleball courts
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-white">Passes & Licenses</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Northwest Forest Pass: $5/day or $30/annual (some trailheads)</li>
                  <li>• WA State Discover Pass: $30/annual (state parks)</li>
                  <li>• WA Fishing License: Buy online at wdfw.wa.gov</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">Have an Amazing Pacific Northwest Adventure!</p>
          <p className="text-sm text-gray-400">
            Questions? Let's discuss at our morning planning sessions over coffee ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PacificNorthwestTrip;