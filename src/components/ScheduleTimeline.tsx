
import { useRef, useEffect } from 'react';
import { Building, MapPin, Clock } from 'lucide-react';

export interface TimeSlot {
  time: string;
  events: Array<{
    id: string;
    title: string;
    location: string;
  }>;
}

const ScheduleTimeline = ({ slots }: { slots: TimeSlot[] }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach((item) => {
        item.classList.add('opacity-0');
        observer.observe(item);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-12 sm:left-1/2 h-full w-[2px] bg-gray-300/30"></div>

        {slots.map((slot, index) => (
          <div 
            key={index} 
            className={`timeline-item relative mb-12 sm:mb-16 opacity-0 transition-opacity duration-700 delay-${index * 100}`}
          >
            {/* Time indicator */}
            <div className="flex items-center mb-4">
              <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-md text-sm font-medium sm:absolute sm:left-1/2 sm:-ml-6">
                {slot.time.split(' - ')[0]}
              </div>
            </div>

            {/* Events */}
            <div className="ml-20 sm:ml-0 sm:grid sm:grid-cols-2 sm:gap-8">
              {slot.events.map((event, eventIndex) => (
                <div 
                  key={eventIndex}
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 mb-4 sm:mb-0 transition-all hover:bg-white/20 ${
                    eventIndex % 2 === 0 
                      ? 'sm:col-start-1 sm:text-right sm:mr-12 sm:pr-6'
                      : 'sm:col-start-2 sm:ml-12 sm:pl-6'
                  }`}
                >
                  <h3 className="font-medium text-white text-lg mb-2">{event.title}</h3>
                  <p className="flex items-center text-white/70 text-sm">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {event.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTimeline;
