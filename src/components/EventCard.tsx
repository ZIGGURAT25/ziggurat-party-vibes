
import { useState } from 'react';
import { ChevronDown, User, Phone } from 'lucide-react';

export interface EventProps {
  id: string;
  title: string;
  description: string;
  coordinators: Array<{
    name: string;
    contact: string;
  }>;
  rules: string[];
}

const EventCard = ({ event }: { event: EventProps }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,163,255,0.1)]"
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl md:text-2xl font-display font-semibold text-white">
            {event.title}
          </h3>
          <ChevronDown className={`w-5 h-5 text-white/70 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
        
        <p className="mt-2 text-white/70 line-clamp-2">
          {event.description}
        </p>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 border-t border-white/10">
          <div className="mb-4">
            <h4 className="text-sm font-medium text-ziggurat-blue mb-2">Coordinators</h4>
            <div className="space-y-2">
              {event.coordinators.map((coordinator, index) => (
                <div key={index} className="flex items-center text-sm text-white/70">
                  <User className="w-4 h-4 mr-2 text-white/50" />
                  <span className="mr-2">{coordinator.name}</span>
                  <span className="flex items-center">
                    <Phone className="w-3 h-3 mr-1 text-white/50" />
                    {coordinator.contact}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-ziggurat-magenta mb-2">Rules & Guidelines</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-white/70">
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
