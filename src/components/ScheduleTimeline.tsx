
import { useRef, useEffect } from 'react';

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
        <div className="absolute left-4 sm:left-1/2 sm:-ml-0.5 w-0.5 h-full bg-ziggurat-blue/30"></div>

        {slots.map((slot, index) => (
          <div 
            key={index} 
            className={`timeline-item relative mb-12 sm:mb-16 opacity-0 transition-opacity duration-700 delay-${index * 100}`}
          >
            {/* Time indicator */}
            <div className="flex items-center sm:justify-center mb-4">
              <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-ziggurat-blue text-white text-sm shadow-glow sm:absolute sm:left-1/2 sm:-ml-4">
                {index + 1}
              </div>
              <div className="ml-4 sm:ml-0 glass-panel px-4 py-1 rounded-full">
                <span className="text-white font-medium">{slot.time}</span>
              </div>
            </div>

            {/* Events */}
            <div className="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 sm:gap-8">
              {slot.events.map((event, eventIndex) => (
                <div 
                  key={eventIndex}
                  className={`glass-panel p-4 rounded-lg mb-4 sm:mb-0 ${
                    eventIndex % 2 === 0 
                      ? 'sm:col-start-1 sm:text-right sm:mr-8'
                      : 'sm:col-start-2 sm:ml-8'
                  }`}
                >
                  <h3 className="font-medium text-white text-lg">{event.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{event.location}</p>
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
