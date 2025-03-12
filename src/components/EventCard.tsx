
import { User, Phone } from 'lucide-react';

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
  return (
    <div className="h-[450px] perspective-1000 group">
      <div 
        className="relative w-full h-full transition-all duration-700 preserve-3d hover:rotate-y-180 group-hover:scale-105"
      >
        {/* Front of card */}
        <div 
          className="absolute w-full h-full backface-hidden glass-panel rounded-xl overflow-hidden p-6 flex flex-col"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ziggurat-blue/20 via-transparent to-ziggurat-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-4 relative">
            {event.title}
          </h3>
          
          <p className="text-white/70 flex-grow relative">
            {event.description}
          </p>
          
          <div className="mt-6 flex justify-center relative">
            <span className="inline-block px-4 py-2 bg-ziggurat-blue/20 text-ziggurat-blue rounded-md text-sm font-medium animate-pulse">
              Hover to view details
            </span>
          </div>
        </div>
        
        {/* Back of card */}
        <div 
          className="absolute w-full h-full backface-hidden rotate-y-180 glass-panel rounded-xl overflow-auto p-6"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ziggurat-magenta/20 via-transparent to-ziggurat-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h3 className="text-xl font-display font-semibold text-white text-center mb-4 relative">
            {event.title}
          </h3>
          
          <div className="mb-4 relative">
            <h4 className="text-sm font-medium text-ziggurat-blue mb-2">Coordinators</h4>
            <div className="space-y-2">
              {event.coordinators.map((coordinator, index) => (
                <div key={index} className="flex items-center text-sm text-white/70 hover:text-white transition-colors">
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
          
          <div className="relative">
            <h4 className="text-sm font-medium text-ziggurat-magenta mb-2">Rules & Guidelines</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-white/70">
              {event.rules.map((rule, index) => (
                <li key={index} className="hover:text-white transition-colors">{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
