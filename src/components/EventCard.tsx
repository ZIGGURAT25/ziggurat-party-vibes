
import { User, Phone, Clock, MapPin, Calendar, Info, Zap } from 'lucide-react';

export interface EventProps {
  id: string;
  title: string;
  description: string;
  coordinators: Array<{
    name: string;
    contact: string;
  }>;
  rules: string[];
  date?: string;
  time?: string;
  venue?: string;
  eligibility?: string;
}

const EventCard = ({ event }: { event: EventProps }) => {
  return (
    <div className="h-[550px] perspective-1000">
      <div 
        className="relative w-full h-full transition-all duration-700 preserve-3d transform-style-3d group hover:rotate-y-180"
      >
        {/* Front of card */}
        <div 
          className="absolute w-full h-full backface-hidden overflow-hidden rounded-lg p-6 flex flex-col bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border border-amber-500/30"
        >
          {/* Lightning bolt accent */}
          <div className="absolute top-0 right-0 w-[150px] h-[150px] opacity-10">
            <Zap className="w-full h-full text-amber-400" strokeWidth={3} />
          </div>
          
          {/* Event tag */}
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-amber-500 text-zinc-900">
              ZIGGURAT'25
            </span>
          </div>

          {/* Card border glow effect */}
          <div className="absolute inset-0 border-2 border-amber-500/50 rounded-lg glow-card opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Top lightning bolt accent */}
          <div className="absolute -top-10 -left-10 w-[100px] h-[100px] text-blue-500 opacity-30 transform rotate-45">
            <Zap className="w-full h-full" strokeWidth={3} />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative border-b border-amber-500/50 pb-3">
            {event.title}
            <span className="absolute -left-1 bottom-0 w-1/3 h-1 bg-gradient-to-r from-amber-500 to-blue-500"></span>
          </h3>
          
          <p className="text-zinc-300 relative mb-6 line-clamp-3">
            {event.description}
          </p>

          {/* Additional event details */}
          {(event.date || event.time || event.venue) && (
            <div className="mt-auto space-y-3 relative">
              {event.date && (
                <div className="flex items-center text-sm text-zinc-300">
                  <Calendar className="w-4 h-4 mr-2 text-amber-500" />
                  <span>{event.date}</span>
                </div>
              )}
              
              {event.time && (
                <div className="flex items-center text-sm text-zinc-300">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{event.time}</span>
                </div>
              )}
              
              {event.venue && (
                <div className="flex items-center text-sm text-zinc-300">
                  <MapPin className="w-4 h-4 mr-2 text-amber-500" />
                  <span>{event.venue}</span>
                </div>
              )}
            </div>
          )}
          
          <div className="mt-6 flex justify-center relative">
            <span className="inline-flex items-center px-4 py-2 bg-zinc-800 text-amber-400 rounded-md text-sm font-bold border border-amber-400/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] animate-pulse-light">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              Hover to view details
            </span>
          </div>
        </div>
        
        {/* Back of card */}
        <div 
          className="absolute w-full h-full backface-hidden overflow-auto rounded-lg p-6 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border border-blue-500/30 rotate-y-180"
        >
          {/* Card border glow effect */}
          <div className="absolute inset-0 border-2 border-blue-500/50 rounded-lg glow-card-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Bottom lightning bolt accent */}
          <div className="absolute -bottom-10 -right-10 w-[100px] h-[100px] text-amber-500 opacity-30 transform -rotate-45">
            <Zap className="w-full h-full" strokeWidth={3} />
          </div>
          
          <h3 className="text-xl font-display font-bold text-white text-center mb-4 relative border-b border-blue-500/50 pb-3">
            {event.title}
            <span className="absolute -left-1 bottom-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-amber-500"></span>
          </h3>
          
          <div className="mb-4 relative">
            <h4 className="text-sm font-bold text-blue-400 mb-2 flex items-center">
              <User className="w-4 h-4 mr-1 text-blue-400" />
              Coordinators
            </h4>
            <div className="space-y-2">
              {event.coordinators.map((coordinator, index) => (
                <div key={index} className="flex items-center text-sm text-zinc-300 hover:text-white transition-colors p-2 bg-zinc-800/50 rounded-md">
                  <span className="mr-2">{coordinator.name}</span>
                  <span className="flex items-center ml-auto">
                    <Phone className="w-3 h-3 mr-1 text-blue-400" />
                    {coordinator.contact}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {event.eligibility && (
            <div className="mb-4 relative">
              <h4 className="text-sm font-bold text-amber-400 mb-2 flex items-center">
                <Info className="w-4 h-4 mr-1 text-amber-400" />
                Eligibility
              </h4>
              <p className="text-sm text-zinc-300 p-2 bg-zinc-800/50 rounded-md">
                {event.eligibility}
              </p>
            </div>
          )}
          
          <div className="relative">
            <h4 className="text-sm font-bold text-blue-400 mb-2 flex items-center">
              <Info className="w-4 h-4 mr-1 text-amber-400" />
              Rules & Guidelines
            </h4>
            <ul className="space-y-1 text-sm text-zinc-300">
              {event.rules.map((rule, index) => (
                <li key={index} className="hover:text-white transition-colors p-2 bg-zinc-800/50 rounded-md flex">
                  <span className="text-amber-500 mr-2">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
