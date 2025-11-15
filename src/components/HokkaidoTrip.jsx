import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Snowflake,
  Mountain,
  UtensilsCrossed,
  Waves,
  Info,
  Users,
  Clock,
  Train,
  Plane,
  Hotel,
  CheckCircle2,
  MapPinned,
  Coffee,
  Wine,
  Soup,
  Fish,
  IceCream,
  Package,
  Backpack,
  DollarSign,
  Sparkles,
  CloudSnow,
  Sunrise,
  Sunset,
  Beer,
  Ship,
  Camera,
  Music,
  ShoppingBag,
  CircleDot,
  TrendingUp,
  Heart,
  AlertCircle,
  ChevronRight
} from 'lucide-react';

const HokkaidoTrip = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedDay, setExpandedDay] = useState(null);

  useEffect(() => {
    document.title = 'Hokkaido Ski Trip 2025 - Thomp Trips';
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Sparkles },
    { id: 'itinerary', label: 'Day-by-Day', icon: Calendar },
    { id: 'locations', label: 'Locations', icon: MapPinned },
    { id: 'food-onsen', label: 'Food & Onsen', icon: UtensilsCrossed },
    { id: 'ski-planning', label: 'Ski Planning', icon: Mountain },
    { id: 'details', label: 'Trip Details', icon: Info },
    { id: 'philosophy', label: 'Why This Works', icon: Heart }
  ];

  const itineraryDays = [
    {
      date: 'Sat Dec 13',
      title: 'ARRIVE → RUSUTSU',
      emoji: '✈️',
      location: 'Rusutsu',
      activities: [
        'Tokyo → New Chitose (CTS) → Rusutsu (1h20 drive)',
        'Optional half-day ski (if arrival before ~12:30)',
        'Check-in & explore resort',
        'Onsen + resort dinner/bar'
      ],
      notes: 'Arrival day - ease into the trip. Resort has everything you need.'
    },
    {
      date: 'Sun Dec 14',
      title: 'RUSUTSU (Ski Day 1)',
      emoji: '⛷️',
      location: 'Rusutsu',
      activities: [
        'Full day skiing East/West/Isola mountains',
        'Resort dinner, drinks & arcade',
        'Early night (big day tomorrow!)'
      ],
      notes: 'First full powder day! Rusutsu has 3 interconnected mountains.'
    },
    {
      date: 'Mon Dec 15',
      title: 'RUSUTSU (Ski Day 2)',
      emoji: '🏔️',
      location: 'Rusutsu',
      activities: [
        'Full day skiing (best early-season coverage in Hokkaido)',
        'Onsen + chill night (or bar in Westin)'
      ],
      notes: 'Maximize the legendary Rusutsu terrain before moving on.'
    },
    {
      date: 'Tue Dec 16',
      title: 'RUSUTSU → NISEKO (Half Ski Day)',
      emoji: '🚗',
      location: 'Rusutsu → Niseko',
      activities: [
        'Check out & drive to Niseko (1h)',
        'Check in & ski Hirafu/Hanazono for ~3-4 hours',
        'Dinner in Niseko village (tons of options)',
        'Bar-hop or cozy lodge night'
      ],
      notes: 'Transfer day with bonus skiing. Niseko village is way more lively than Rusutsu.'
    },
    {
      date: 'Wed Dec 17',
      title: 'NISEKO (Ski Day 3)',
      emoji: '❄️',
      location: 'Niseko',
      activities: [
        'Full Niseko ski day across United resorts',
        'Explore the village',
        'Dinner + drinks'
      ],
      notes: 'Classic Niseko powder day. Try all 4 resort areas with one pass.'
    },
    {
      date: 'Thu Dec 18',
      title: 'NISEKO → OTARU (Rest & Food Day)',
      emoji: '🍣',
      location: 'Niseko → Otaru',
      activities: [
        'Check out & drive to Otaru (~1h40)',
        'Check in to Otaru accommodation',
        'Walk the historic canal at dusk',
        'Sushi Street / seafood dinner',
        'Otaru dessert shops + sake bars'
      ],
      notes: 'Transition from resort → charming port town. This is where the food gets NEXT LEVEL.'
    },
    {
      date: 'Fri Dec 19',
      title: 'OTARU (Choose: Ski or Chill Day)',
      emoji: '⛷️',
      location: 'Otaru',
      activities: [
        'OPTION A: Ski day at Kiroro (best snow), Kokusai (reliable), or Teine (ocean views)',
        'OPTION B: Explore Otaru (glass shops, music box museum, LeTAO)',
        'Onsen',
        'Seafood dinner (uni, crab, oysters)'
      ],
      notes: 'Flexible day - ski legs vs. culture/food. Everyone decides individually.'
    },
    {
      date: 'Sat Dec 20',
      title: 'OTARU (Free Day)',
      emoji: '☕',
      location: 'Otaru',
      activities: [
        'OPTION A: Sleep in, relax, last Hokkaido eats',
        'OPTION B: One more ski day at Kiroro (30min), Kokusai (40min), or Teine (45min)',
        'Optional day trip to Sapporo (not necessary)',
        'Pack + prepare for travel day',
        'Relaxing final night in Otaru'
      ],
      notes: 'Wind down day. Savor the last moments in Hokkaido. Still possible to ski if you want one more powder day!'
    },
    {
      date: 'Sun Dec 21',
      title: 'DEPART',
      emoji: '🛫',
      location: 'Otaru → Tokyo',
      activities: [
        'Otaru → Sapporo → New Chitose Airport (1-1.25 hrs)',
        'Fly CTS → Tokyo → Home',
        'Flight: ~6pm (safe margins for transit)'
      ],
      notes: 'No rush departure - plenty of time to get to airport.'
    }
  ];

  const locations = [
    {
      name: 'Rusutsu Resort',
      nights: 3,
      highlights: [
        'Best early-season snow coverage in Hokkaido',
        '3 interconnected mountains (East, West, Isola)',
        '42 courses across 212 hectares',
        'Tree runs, powder bowls, and groomed cruisers',
        'Resort village with onsen, restaurants, arcade, wave pool'
      ],
      terrain: 'Diverse terrain for all levels. Famous for consistent powder.',
      vibe: 'Self-contained resort. Quiet, family-friendly, all-inclusive.',
      skiAreas: 'East Mt., West Mt., Isola Mt. - all lift-connected'
    },
    {
      name: 'Niseko United',
      nights: 2,
      highlights: [
        'Legendary powder and tree skiing',
        '4 interconnected resorts (Grand Hirafu, Hanazono, Niseko Village, Annupuri)',
        'International village with amazing dining scene',
        'Night skiing available',
        'Views of Mt. Yotei (Hokkaido\'s Fuji)'
      ],
      terrain: 'Wide-open bowls, tree skiing, steep terrain. Gates to backcountry.',
      vibe: 'Lively international resort town. Nightlife, great food, social atmosphere.',
      skiAreas: 'Hirafu, Hanazono, Niseko Village, Annupuri - one pass for all'
    },
    {
      name: 'Otaru',
      nights: 3,
      highlights: [
        'Historic port city with romantic canal district',
        'TOP TIER seafood (uni, crab, oysters, sushi)',
        'Famous for glassworks, music boxes, and LeTAO desserts',
        'Multiple onsen options',
        'Base for day trips to Kiroro, Kokusai, or Teine ski resorts'
      ],
      terrain: 'Not a ski resort - charming town with access to nearby skiing',
      vibe: 'Romantic, cultural, food-focused. Perfect wind-down after resort life.',
      skiAreas: 'Kiroro (30min), Kokusai (40min), Teine (45min) - all day trip accessible'
    }
  ];

  const foodHighlights = [
    {
      location: 'Rusutsu Resort',
      type: 'Resort Dining',
      options: [
        {
          name: 'Vale Restaurant',
          description: 'Buffet-style with Japanese and Western options',
          specialty: 'Breakfast and dinner buffets',
          vibe: 'Convenient, family-style'
        },
        {
          name: 'Westin Hotel Restaurants',
          description: 'Multiple dining options from casual to upscale',
          specialty: 'Teppanyaki, Italian, casual dining',
          vibe: 'Resort luxury'
        },
        {
          name: 'Resort Izakayas & Bars',
          description: 'After-ski drinks and pub food',
          specialty: 'Beer, sake, comfort food',
          vibe: 'Relaxed après-ski'
        }
      ]
    },
    {
      location: 'Niseko',
      type: 'International Food Scene',
      options: [
        {
          name: 'Rakuichi Soba',
          description: 'Famous handmade soba noodles',
          specialty: 'Soba noodles with mountain water',
          vibe: 'Traditional, cozy'
        },
        {
          name: 'Ezo Seafoods',
          description: 'Oyster bar and seafood',
          specialty: 'Fresh Hokkaido oysters, crab',
          vibe: 'Casual, lively'
        },
        {
          name: 'Bang Bang',
          description: 'Asian fusion and craft cocktails',
          specialty: 'Creative dishes, great bar scene',
          vibe: 'Modern, social'
        },
        {
          name: 'Kamimura',
          description: 'French-Japanese fine dining',
          specialty: 'Tasting menus, wine pairing',
          vibe: 'Upscale, special occasion'
        }
      ]
    },
    {
      location: 'Otaru',
      type: 'Seafood Paradise',
      options: [
        {
          name: 'Otaru Sushi Street (Sushiya-dori)',
          description: 'Concentrated strip of top sushi restaurants',
          specialty: 'Fresh uni, crab, scallops, local fish',
          vibe: 'Traditional, authentic'
        },
        {
          name: 'Masazushi',
          description: 'Historic sushi institution since 1938',
          specialty: 'Omakase, seasonal fish',
          vibe: 'Classic, refined'
        },
        {
          name: 'Otaru Beer Hall',
          description: 'Local brewery with German-style beers',
          specialty: 'Beer, sausages, hearty food',
          vibe: 'Festive, casual'
        },
        {
          name: 'LeTAO',
          description: 'Famous Hokkaido dessert shop',
          specialty: 'Double fromage cheesecake, chocolate',
          vibe: 'Sweet, Instagram-worthy'
        },
        {
          name: 'Naruto Honten',
          description: 'Fried chicken paradise',
          specialty: 'Zangi (Hokkaido-style fried chicken)',
          vibe: 'Casual, comfort food'
        }
      ]
    }
  ];

  const onsenOptions = [
    {
      location: 'Rusutsu',
      onsens: [
        {
          name: 'Kotobuki no Yu (Rusutsu Resort)',
          type: 'Resort onsen',
          description: 'Large indoor and outdoor baths with mountain views',
          access: 'Inside Rusutsu Resort - easy access from accommodation'
        }
      ]
    },
    {
      location: 'Niseko',
      onsens: [
        {
          name: 'Niseko Grand Hotel',
          type: 'Day-use onsen',
          description: 'Large rotenburo (outdoor bath) with Mt. Yotei views',
          access: '10min drive from Hirafu village'
        },
        {
          name: 'Yukichichibu Onsen',
          type: 'Public onsen',
          description: 'Local favorite with indoor and outdoor baths',
          access: 'Near Niseko Village'
        },
        {
          name: 'Kanronomori',
          type: 'Natural forest onsen',
          description: 'Secluded outdoor baths in the forest',
          access: 'Between Niseko and Rusutsu'
        }
      ]
    },
    {
      location: 'Otaru',
      onsens: [
        {
          name: 'Otaru Tenguyama Onsen',
          description: 'Hilltop onsen with views over Otaru city and harbor',
          access: 'Short ropeway ride up the mountain'
        },
        {
          name: 'Otarukourakuen',
          description: 'Downtown public bath, convenient location',
          access: 'Walking distance from canal area'
        },
        {
          name: 'Asarigawa Onsen',
          description: 'Natural hot spring in nearby valley',
          access: '15min drive from central Otaru'
        }
      ]
    }
  ];

  const skiResortDetails = [
    {
      name: 'Rusutsu Resort',
      stats: {
        skiableArea: '212 hectares',
        trails: '42 courses',
        lifts: '18 lifts + 1 gondola',
        verticalDrop: '994m',
        longestRun: '3,500m',
        snowfall: '~14m annually',
        season: 'Late Nov - Early April'
      },
      terrain: {
        beginner: '30%',
        intermediate: '40%',
        advanced: '30%'
      },
      features: [
        'Best early-season coverage',
        'Tree skiing in abundance',
        'Powder bowls and groomers',
        'Night skiing available',
        'Terrain parks',
        'Free shuttle between mountains'
      ],
      tickets: 'Multi-day passes available. Included with some resort packages.',
      rentals: 'On-site rental shops with quality gear'
    },
    {
      name: 'Niseko United',
      stats: {
        skiableArea: '2,191 acres combined',
        trails: '70+ courses',
        lifts: '38 lifts total across 4 resorts',
        verticalDrop: '1,308m',
        longestRun: '5,600m',
        snowfall: '~15m annually',
        season: 'Late Nov - Early May'
      },
      terrain: {
        beginner: '30%',
        intermediate: '38%',
        advanced: '32%'
      },
      features: [
        'Legendary powder quality',
        'Extensive tree skiing',
        'Backcountry gates',
        'Night skiing at Hanazono & Hirafu',
        'International instruction available',
        '4 resorts, 1 pass'
      ],
      tickets: 'All-mountain pass covers all 4 resorts. Multi-day discounts.',
      rentals: 'Many rental shops in Hirafu village, reserve ahead'
    },
    {
      name: 'Kiroro (from Otaru)',
      stats: {
        skiableArea: '22 courses',
        trails: '2 mountains',
        lifts: '9 lifts + 1 gondola',
        verticalDrop: '610m',
        snowfall: '~21m annually (most in Hokkaido!)',
        season: 'Early Dec - Early May'
      },
      terrain: {
        beginner: '45%',
        intermediate: '29%',
        advanced: '26%'
      },
      features: [
        'Highest snowfall in Hokkaido',
        'Long cruising runs',
        'Powder skiing',
        'Less crowded than Niseko'
      ],
      access: '30min from Otaru',
      tickets: 'Day passes available'
    }
  ];

  const packingList = [
    {
      category: 'Ski Gear',
      items: [
        'Ski jacket & pants (waterproof!)',
        'Base layers (merino wool recommended)',
        'Mid layers (fleece or down)',
        'Ski socks (multiple pairs)',
        'Gloves/mittens (waterproof, consider backups)',
        'Neck gaiter/balaclava',
        'Goggles (+ spare lens for flat light)',
        'Helmet',
        'Skis/board (or plan to rent)',
        'Hand/toe warmers'
      ]
    },
    {
      category: 'Onsen & Relaxation',
      items: [
        'Small towel for onsen',
        'Swimsuit (for mixed onsen or pool)',
        'Flip-flops/slides',
        'Toiletries (most onsens provide basics)'
      ]
    },
    {
      category: 'Daily Essentials',
      items: [
        'Warm casual clothes for evenings',
        'Comfortable walking shoes (waterproof)',
        'Daypack/backpack',
        'Reusable water bottle',
        'Phone charger + portable battery',
        'Camera (optional but recommended)',
        'Travel adapters (Japan uses Type A/B)'
      ]
    },
    {
      category: 'Winter Town Gear',
      items: [
        'Warm coat/puffer for non-ski days',
        'Casual winter hat',
        'Scarf',
        'Thermal layers for evening walks',
        'Sunglasses'
      ]
    },
    {
      category: 'Documents & Money',
      items: [
        'Passport',
        'Travel insurance docs',
        'Credit cards (Visa/Mastercard widely accepted)',
        'Cash (yen) - some places are cash-only',
        'Hotel confirmations',
        'Rental car confirmation (if driving)'
      ]
    }
  ];

  const whyThisWorks = [
    {
      principle: 'Perfect Ski Cadence',
      explanation: 'Two full days at Rusutsu → transfer with bonus ski → one full day at Niseko → rest → optional ski. Avoids burnout while maximizing powder days.',
      icon: TrendingUp
    },
    {
      principle: 'Resort → Resort → Real Town',
      explanation: 'Start with all-inclusive resort convenience (Rusutsu), then lively international village (Niseko), finish in authentic Japanese port town (Otaru). Keeps things fresh.',
      icon: MapPinned
    },
    {
      principle: 'No Brutal Transit Days',
      explanation: 'Rusutsu to Niseko is 1hr. Niseko to Otaru is 1h40. Both include skiing or sightseeing on transfer days. Zero wasted days.',
      icon: Train
    },
    {
      principle: 'Avoids "Over-Nisekoing"',
      explanation: 'Niseko is amazing but can feel crowded and touristy after a few days. Two nights is the sweet spot. Rusutsu offers quieter powder, Otaru offers culture.',
      icon: Users
    },
    {
      principle: 'Otaru Finish = Charm + Calm + Food',
      explanation: 'After a week of skiing, you want culture, incredible food, and relaxation. Otaru delivers all three. The canal at night, sushi street, LeTAO desserts - perfect wind-down.',
      icon: Heart
    },
    {
      principle: 'Early Season Reliability',
      explanation: 'Mid-December is peak early season. Rusutsu and Niseko have the best early coverage in Hokkaido. Kiroro (accessible from Otaru) has the most snow in all of Japan.',
      icon: CloudSnow
    },
    {
      principle: 'Flexible Final Days',
      explanation: 'Dec 19-20 are choose-your-own-adventure. Ski more? Explore Otaru? Day trip to Sapporo? Everyone can customize based on energy levels.',
      icon: CheckCircle2
    },
    {
      principle: 'Zero Stress Departure',
      explanation: 'Dec 21 flight at 6pm gives plenty of buffer. Wake up relaxed, have a nice breakfast, leisurely train to airport. No 5am panic.',
      icon: Sparkles
    }
  ];

  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg p-8 text-white">
        <div className="flex items-start gap-4">
          <Snowflake className="w-12 h-12 mt-1" />
          <div>
            <h1 className="text-4xl font-bold mb-2">Hokkaido Ski Trip 2025</h1>
            <p className="text-xl text-blue-100 mb-4">
              Rusutsu → Niseko → Otaru
            </p>
            <p className="text-lg text-blue-50">
              Super-reliable early-season powder • Food + Onsen • Minimal transit friction
            </p>
          </div>
        </div>
      </div>

      {/* Trip Overview Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <Calendar className="w-8 h-8 text-blue-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">9 Days</div>
          <div className="text-sm text-gray-400">Dec 13-21, 2025</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <Mountain className="w-8 h-8 text-cyan-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">4-5 Days</div>
          <div className="text-sm text-gray-400">Ski opportunities</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <MapPin className="w-8 h-8 text-green-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">3 Locations</div>
          <div className="text-sm text-gray-400">Rusutsu, Niseko, Otaru</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <Hotel className="w-8 h-8 text-purple-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">3-2-3</div>
          <div className="text-sm text-gray-400">Nights per location</div>
        </div>
      </div>

      {/* Trip Flow */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <MapPinned className="w-6 h-6 text-cyan-400" />
          Trip Flow Overview
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg">
            <Plane className="w-6 h-6 text-blue-400" />
            <span className="text-white font-semibold">Tokyo</span>
            <ChevronRight className="w-5 h-5 text-gray-500" />
            <span className="text-white font-semibold">New Chitose (CTS)</span>
            <ChevronRight className="w-5 h-5 text-gray-500" />
            <span className="text-white font-semibold">Rusutsu</span>
            <span className="text-gray-400 text-sm">(3 nights)</span>
          </div>
          <div className="flex items-center gap-4 text-lg ml-12">
            <ChevronRight className="w-5 h-5 text-gray-500" />
            <span className="text-white font-semibold">Niseko</span>
            <span className="text-gray-400 text-sm">(2 nights)</span>
          </div>
          <div className="flex items-center gap-4 text-lg ml-12">
            <ChevronRight className="w-5 h-5 text-gray-500" />
            <span className="text-white font-semibold">Otaru</span>
            <span className="text-gray-400 text-sm">(3 nights)</span>
          </div>
          <div className="flex items-center gap-4 text-lg ml-12">
            <ChevronRight className="w-5 h-5 text-gray-500" />
            <span className="text-white font-semibold">CTS</span>
            <ChevronRight className="w-5 h-5 text-gray-500" />
            <span className="text-white font-semibold">Tokyo</span>
            <ChevronRight className="w-5 h-5 text-gray-500" />
            <span className="text-white font-semibold">Home</span>
          </div>
        </div>
        <div className="mt-6 text-gray-300 italic">
          Minimal hotel changes • Beautiful pacing • No rushed days
        </div>
      </div>

      {/* Quick Itinerary Overview */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-cyan-400" />
          Calendar at a Glance
        </h2>
        <div className="space-y-3">
          {itineraryDays.map((day, index) => (
            <div key={index} className="flex items-start gap-4 p-3 bg-gray-900 rounded-lg hover:bg-gray-750 transition-colors">
              <div className="text-2xl">{day.emoji}</div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-white font-semibold">{day.date}</span>
                  <span className="text-cyan-400 text-sm">→ {day.title}</span>
                </div>
                <div className="text-gray-400 text-sm">{day.activities[0]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ski Plan Summary */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Mountain className="w-6 h-6 text-cyan-400" />
          Ski Plan Summary
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 mt-1" />
            <div>
              <div className="text-white font-semibold">Rusutsu</div>
              <div className="text-gray-400 text-sm">2 full days + optional arrival half-day</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 mt-1" />
            <div>
              <div className="text-white font-semibold">Niseko</div>
              <div className="text-gray-400 text-sm">1 full day + optional half-day on arrival</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 mt-1" />
            <div>
              <div className="text-white font-semibold">Otaru-based</div>
              <div className="text-gray-400 text-sm">Up to 2 optional ski days - Dec 19 & 20 (Kiroro/Kokusai/Teine)</div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="text-white text-lg">
              <span className="font-bold">Total skiable opportunities:</span> 6.5 days
            </div>
            <div className="text-gray-400 text-sm mt-1">
              Expected realistic ski days: 4-6 days
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <UtensilsCrossed className="w-6 h-6 text-orange-400" />
            Food & Onsen Highlights
          </h3>
          <div className="space-y-3 text-gray-300">
            <div>
              <div className="font-semibold text-white">Rusutsu</div>
              <div className="text-sm">Resort izakayas, buffets, arcades, indoor wave pool</div>
            </div>
            <div>
              <div className="font-semibold text-white">Niseko</div>
              <div className="text-sm">Big variety: ramen, izakayas, high-end Japanese, craft cocktails</div>
            </div>
            <div>
              <div className="font-semibold text-white">Otaru</div>
              <div className="text-sm">TOP TIER: Otaru Sushi Street, LeTAO desserts, Otaru Beer Hall, kappo seafood</div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="font-semibold text-cyan-400">Onsen everywhere:</div>
              <div className="text-sm">Rusutsu Resort Onsen • Niseko onsens • Otaru onsens / nearby natural hot springs</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            Why This Plan Works
          </h3>
          <div className="space-y-2 text-gray-300 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Perfect ski cadence: 2 days → transfer → 1 day → rest → optional ski</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Resort → resort → real town progression keeps things fresh</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Avoids "over-Nisekoing"</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Otaru finish adds charm, food, and calm</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>No brutal transit days</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Zero stress on the 21st departure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderItineraryTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-cyan-400" />
          Day-by-Day Itinerary
        </h2>
        <p className="text-gray-400">
          Detailed breakdown of each day. Click to expand for full details.
        </p>
      </div>

      <div className="space-y-4">
        {itineraryDays.map((day, index) => (
          <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <button
              onClick={() => setExpandedDay(expandedDay === index ? null : index)}
              className="w-full p-6 text-left hover:bg-gray-750 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-3xl">{day.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-white font-bold text-lg">{day.date}</span>
                      <span className="text-cyan-400 font-semibold">{day.title}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {day.location}
                    </div>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${expandedDay === index ? 'rotate-90' : ''}`} />
              </div>
            </button>

            {expandedDay === index && (
              <div className="px-6 pb-6 border-t border-gray-700 pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Activities:</h4>
                    <ul className="space-y-2">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-2 text-gray-300">
                          <CircleDot className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {day.notes && (
                    <div className="bg-gray-900 rounded p-4 border-l-4 border-cyan-500">
                      <div className="text-cyan-400 font-semibold text-sm mb-1">Note:</div>
                      <div className="text-gray-300 text-sm">{day.notes}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderLocationsTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <MapPinned className="w-6 h-6 text-cyan-400" />
          Locations Deep Dive
        </h2>
        <p className="text-gray-400">
          Everything you need to know about each destination.
        </p>
      </div>

      {locations.map((location, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{location.name}</h3>
              <div className="flex items-center gap-2 text-gray-400">
                <Hotel className="w-4 h-4" />
                <span>{location.nights} nights</span>
              </div>
            </div>
            <div className="text-3xl">
              {index === 0 ? '🏔️' : index === 1 ? '❄️' : '🏮'}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Highlights:</h4>
              <ul className="space-y-2">
                {location.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-900 rounded p-4">
                <div className="text-cyan-400 font-semibold mb-2">Terrain:</div>
                <div className="text-gray-300 text-sm">{location.terrain}</div>
              </div>
              <div className="bg-gray-900 rounded p-4">
                <div className="text-cyan-400 font-semibold mb-2">Vibe:</div>
                <div className="text-gray-300 text-sm">{location.vibe}</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded p-4 border border-blue-700/30">
              <div className="text-blue-300 font-semibold mb-2">Ski Areas:</div>
              <div className="text-gray-300 text-sm">{location.skiAreas}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFoodOnsenTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <UtensilsCrossed className="w-6 h-6 text-orange-400" />
          Food & Onsen Guide
        </h2>
        <p className="text-gray-400">
          Where to eat and soak in each location.
        </p>
      </div>

      {/* Food Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Fish className="w-6 h-6 text-orange-400" />
          Food Highlights
        </h3>

        {foodHighlights.map((area, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="mb-4">
              <h4 className="text-xl font-bold text-white">{area.location}</h4>
              <div className="text-orange-400 text-sm">{area.type}</div>
            </div>

            <div className="space-y-4">
              {area.options.map((restaurant, rIndex) => (
                <div key={rIndex} className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="text-white font-semibold">{restaurant.name}</h5>
                    <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">
                      {restaurant.vibe}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{restaurant.description}</p>
                  <div className="text-orange-400 text-sm">
                    <span className="font-semibold">Specialty:</span> {restaurant.specialty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Onsen Section */}
      <div className="space-y-6 mt-8">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Waves className="w-6 h-6 text-blue-400" />
          Onsen Guide
        </h3>

        {onsenOptions.map((area, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-xl font-bold text-white mb-4">{area.location}</h4>

            <div className="space-y-4">
              {area.onsens.map((onsen, oIndex) => (
                <div key={oIndex} className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="text-white font-semibold">{onsen.name}</h5>
                    {onsen.type && (
                      <span className="text-xs px-2 py-1 bg-blue-900/30 border border-blue-700/30 rounded text-blue-300">
                        {onsen.type}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{onsen.description}</p>
                  <div className="text-blue-400 text-sm">
                    <span className="font-semibold">Access:</span> {onsen.access}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Onsen Tips */}
      <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg p-6 border border-blue-700/30">
        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
          <Info className="w-5 h-5 text-cyan-400" />
          Onsen Etiquette Reminders
        </h4>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
            <span>Wash thoroughly before entering the bath</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
            <span>No swimsuits in traditional onsen (gender-separated)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
            <span>Bring small towel for modesty, but don't let it touch the bath water</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
            <span>Tattoos may not be allowed - check ahead or use private onsen</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderSkiPlanningTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Mountain className="w-6 h-6 text-cyan-400" />
          Ski Planning & Resort Details
        </h2>
        <p className="text-gray-400">
          Everything you need to know about skiing in Hokkaido.
        </p>
      </div>

      {skiResortDetails.map((resort, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">{resort.name}</h3>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {Object.entries(resort.stats).map(([key, value], sIndex) => (
              <div key={sIndex} className="bg-gray-900 rounded p-3">
                <div className="text-gray-400 text-xs uppercase mb-1">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div className="text-white font-semibold">{value}</div>
              </div>
            ))}
          </div>

          {/* Terrain Breakdown */}
          {resort.terrain && (
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Terrain Breakdown:</h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-green-900/30 border border-green-700/30 rounded p-3 text-center">
                  <div className="text-green-400 font-bold text-xl">{resort.terrain.beginner}</div>
                  <div className="text-green-300 text-sm">Beginner</div>
                </div>
                <div className="bg-blue-900/30 border border-blue-700/30 rounded p-3 text-center">
                  <div className="text-blue-400 font-bold text-xl">{resort.terrain.intermediate}</div>
                  <div className="text-blue-300 text-sm">Intermediate</div>
                </div>
                <div className="bg-red-900/30 border border-red-700/30 rounded p-3 text-center">
                  <div className="text-red-400 font-bold text-xl">{resort.terrain.advanced}</div>
                  <div className="text-red-300 text-sm">Advanced</div>
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3">Key Features:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              {resort.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-start gap-2 text-gray-300">
                  <Snowflake className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-4">
            {resort.tickets && (
              <div className="bg-gray-900 rounded p-4">
                <div className="text-cyan-400 font-semibold mb-2">Lift Tickets:</div>
                <div className="text-gray-300 text-sm">{resort.tickets}</div>
              </div>
            )}
            {resort.rentals && (
              <div className="bg-gray-900 rounded p-4">
                <div className="text-cyan-400 font-semibold mb-2">Rentals:</div>
                <div className="text-gray-300 text-sm">{resort.rentals}</div>
              </div>
            )}
            {resort.access && (
              <div className="bg-gray-900 rounded p-4">
                <div className="text-cyan-400 font-semibold mb-2">Access from Otaru:</div>
                <div className="text-gray-300 text-sm">{resort.access}</div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* December Conditions */}
      <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg p-6 border border-blue-700/30">
        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
          <CloudSnow className="w-6 h-6 text-cyan-400" />
          Mid-December Snow Conditions
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>
            <span className="font-semibold text-white">Early season reliability:</span> Mid-December is peak early season in Hokkaido.
            Rusutsu and Niseko typically have excellent coverage by this time.
          </p>
          <p>
            <span className="font-semibold text-white">Snowfall:</span> Average temperatures are consistently below freezing.
            Expect regular powder dumps and dry, light snow quality.
          </p>
          <p>
            <span className="font-semibold text-white">Crowds:</span> Pre-Christmas means fewer crowds than peak season (late Dec - Jan).
            Better lift lines and more fresh tracks.
          </p>
          <p>
            <span className="font-semibold text-white">Daylight:</span> Sunrise ~7:00 AM, Sunset ~4:00 PM. Short days but night skiing available at several resorts.
          </p>
        </div>
      </div>
    </div>
  );

  const renderDetailsTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" />
          Trip Details & Logistics
        </h2>
        <p className="text-gray-400">
          Practical information for planning and packing.
        </p>
      </div>

      {/* Packing List */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Backpack className="w-6 h-6 text-cyan-400" />
          Packing List
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {packingList.map((category, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-3">{category.category}</h4>
              <ul className="space-y-2">
                {category.items.map((item, iIndex) => (
                  <li key={iIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Transportation */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Train className="w-6 h-6 text-blue-400" />
          Transportation
        </h3>

        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2">Getting to Hokkaido</h4>
            <p className="text-gray-300 text-sm">
              Fly from Tokyo (Haneda or Narita) to New Chitose Airport (CTS).
              Flight time: ~1.5 hours. Multiple airlines including JAL, ANA, and budget carriers.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2">Airport to Rusutsu</h4>
            <p className="text-gray-300 text-sm mb-2">
              Options: Rental car (1h20), resort shuttle bus (book ahead), or private transfer.
            </p>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-cyan-400">Recommended:</span> Rental car for flexibility between locations.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2">Between Locations</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><span className="font-semibold">Rusutsu → Niseko:</span> 1 hour drive</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><span className="font-semibold">Niseko → Otaru:</span> 1h40 drive</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span><span className="font-semibold">Otaru → CTS:</span> 1-1.25 hours via Sapporo</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-4">
            <h4 className="text-blue-300 font-semibold mb-2">Winter Driving Tips</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• All rental cars have winter tires (required by law)</li>
              <li>• Drive slowly and allow extra time</li>
              <li>• Most roads well-maintained and plowed regularly</li>
              <li>• Consider adding GPS/navigation to rental</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accommodations */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Hotel className="w-6 h-6 text-purple-400" />
          Accommodations
        </h3>

        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-white font-semibold">Rusutsu (3 nights)</h4>
              <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">Dec 13-16</span>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Options: Rusutsu Resort Hotel, Westin Rusutsu, or resort condos.
            </p>
            <p className="text-cyan-400 text-sm">
              Book ski-in/ski-out for maximum convenience. Many packages include lift tickets.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-white font-semibold">Niseko (2 nights)</h4>
              <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">Dec 16-18</span>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Options: Hirafu village hotels, condos, or traditional lodges.
            </p>
            <p className="text-cyan-400 text-sm">
              Stay in Hirafu for best access to restaurants and nightlife. Book early for good rates.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-white font-semibold">Otaru (3 nights)</h4>
              <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">Dec 18-21</span>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Options: Hotels near canal district, ryokans (traditional inns), or modern hotels near station.
            </p>
            <p className="text-cyan-400 text-sm">
              Stay near the canal for atmosphere, or near station for convenience. Many options with onsen.
            </p>
          </div>
        </div>
      </div>

      {/* Budget Estimates */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-green-400" />
          Budget Estimates (per person)
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">Flights (Tokyo ↔ CTS)</span>
            <span className="text-white font-semibold">$200-350</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">Accommodations (8 nights)</span>
            <span className="text-white font-semibold">$800-1,500</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">Lift tickets (4-5 days)</span>
            <span className="text-white font-semibold">$250-350</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">Rental car (8 days, split)</span>
            <span className="text-white font-semibold">$150-250</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">Food & drinks</span>
            <span className="text-white font-semibold">$500-800</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">Gear rental (if needed)</span>
            <span className="text-white font-semibold">$200-300</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded border border-green-700/30 mt-4">
            <span className="text-white font-bold">Total Estimate</span>
            <span className="text-green-400 font-bold text-xl">$2,100-3,550</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-4">
          Prices vary based on accommodation choice, dining preferences, and exchange rates.
          Book flights and hotels early for best rates.
        </p>
      </div>
    </div>
  );

  const renderPhilosophyTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-400" />
          Why This Plan Works
        </h2>
        <p className="text-gray-400">
          The philosophy and thinking behind this itinerary.
        </p>
      </div>

      <div className="space-y-4">
        {whyThisWorks.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.principle}</h3>
                  <p className="text-gray-300">{item.explanation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Alternative Considerations */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mt-8">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-yellow-400" />
          Alternatives Considered
        </h3>

        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2">More Niseko time?</h4>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-red-400">Why not:</span> Niseko is amazing but can feel
              touristy and crowded. Two nights hits the sweet spot. More time would feel repetitive and
              you'd miss out on Otaru's charm and Rusutsu's quieter powder.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2">Skip Otaru and stay in Sapporo?</h4>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-red-400">Why not:</span> Sapporo is a big city with great
              food but lacks the charm and intimacy of Otaru. The canal, sushi street, and small-town vibe
              are perfect for winding down after resort life.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2">More ski days, less rest?</h4>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-red-400">Why not:</span> Skiing 6-7 days straight leads
              to burnout and injuries. The flexible days (Otaru Dec 19-20) let people choose their own
              adventure: ski more, explore culture, or just rest. This pacing is sustainable.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2">Fly out earlier on Dec 21?</h4>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-red-400">Why not:</span> Morning flights mean 5am wake-up
              and rushed departure. The 6pm flight gives time for a relaxed breakfast, leisurely transit,
              and zero stress. It's vacation until the very end.
            </p>
          </div>
        </div>
      </div>

      {/* Final Thoughts */}
      <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg p-6 border border-cyan-700/30">
        <h3 className="text-cyan-300 font-bold text-xl mb-3">Final Thoughts</h3>
        <p className="text-gray-300 mb-4">
          This itinerary balances powder skiing, cultural experiences, incredible food, and relaxation.
          It's designed to avoid the common mistakes of Japan ski trips: too much Niseko, not enough
          non-ski activities, rushed transit, and departure-day stress.
        </p>
        <p className="text-gray-300">
          By mid-December, Hokkaido is in full winter mode with reliable snow, but crowds haven't hit peak
          levels yet. The progression from resort → resort → town keeps things fresh, and the flexible final
          days let everyone customize based on their energy and interests.
        </p>
        <p className="text-cyan-400 font-semibold mt-4 flex items-center gap-2">
          <Snowflake className="w-5 h-5" />
          This is the Hokkaido trip done right.
        </p>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverviewTab();
      case 'itinerary':
        return renderItineraryTab();
      case 'locations':
        return renderLocationsTab();
      case 'food-onsen':
        return renderFoodOnsenTab();
      case 'ski-planning':
        return renderSkiPlanningTab();
      case 'details':
        return renderDetailsTab();
      case 'philosophy':
        return renderPhilosophyTab();
      default:
        return renderOverviewTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a
              href="/trips"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Trips</span>
            </a>
            <div className="flex items-center gap-3">
              <Snowflake className="w-6 h-6 text-cyan-400" />
              <h1 className="text-xl font-bold">Hokkaido Ski Trip 2025</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap border-b-2 ${
                    activeTab === tab.id
                      ? 'text-cyan-400 border-cyan-400'
                      : 'text-gray-400 border-transparent hover:text-white hover:border-gray-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderTabContent()}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Mike Thompson - 雪を楽しんで! (Enjoy the snow!)</p>
        </div>
      </footer>
    </div>
  );
};

export default HokkaidoTrip;
