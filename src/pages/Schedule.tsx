
import ScheduleTimeline, { TimeSlot } from '@/components/ScheduleTimeline';
import { Calendar, Clock, MapPin, Building, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Schedule = () => {
  const timeSlots: TimeSlot[] = [
    {
      time: '8:30 AM - 9:30 AM',
      events: [
        {
          id: 'registration',
          title: 'Registration & Kit Collection',
          location: 'Main Entrance, Civil Block'
        }
      ]
    },
    {
      time: '9:30 AM - 10:00 AM',
      events: [
        {
          id: 'inauguration',
          title: 'Inauguration Ceremony',
          location: 'Main Auditorium'
        }
      ]
    },
    {
      time: '10:00 AM - 12:30 PM',
      events: [
        {
          id: 'paper_presentation',
          title: 'Paper and Poster Presentation',
          location: 'Seminar Hall 1, Civil Block'
        },
        {
          id: 'master_cad',
          title: 'Master CAD (Round 1)',
          location: 'CAD Lab, Civil Block'
        },
        {
          id: 'reflex_debate',
          title: 'Reflex and Debate',
          location: 'Seminar Hall 2, Civil Block'
        },
        {
          id: 'link_build',
          title: 'Link \'N\' Build',
          location: 'Structures Lab, Civil Block'
        }
      ]
    },
    {
      time: '12:30 PM - 1:30 PM',
      events: [
        {
          id: 'lunch',
          title: 'Lunch Break',
          location: 'College Canteen'
        }
      ]
    },
    {
      time: '1:30 PM - 3:30 PM',
      events: [
        {
          id: 'master_cad_final',
          title: 'Master CAD (Final Round)',
          location: 'CAD Lab, Civil Block'
        },
        {
          id: 'quiz',
          title: 'Technical Quiz',
          location: 'Seminar Hall 1, Civil Block'
        },
        {
          id: 'spot_events',
          title: 'Spot Events',
          location: 'Various Locations, Civil Block'
        },
        {
          id: 'treasure_hunt',
          title: 'Treasure Hunt',
          location: 'Starting at College Quadrangle'
        }
      ]
    },
    {
      time: '3:30 PM - 4:30 PM',
      events: [
        {
          id: 'valedictory',
          title: 'Valedictory Function & Prize Distribution',
          location: 'Main Auditorium'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 pt-20">
      <div className="content-container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 mb-4">
            EVENT TIMELINE
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Event Schedule
          </h1>
          <p className="text-white/70">
            Plan your day at Ziggurat'25 with our comprehensive schedule of events and activities.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg flex items-center transition-all hover:bg-white/10">
            <Calendar className="w-5 h-5 text-white mr-2" />
            <span className="text-white">March 22, 2025</span>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg flex items-center transition-all hover:bg-white/10">
            <Clock className="w-5 h-5 text-white mr-2" />
            <span className="text-white">8:30 AM - 4:30 PM</span>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg flex items-center transition-all hover:bg-white/10">
            <MapPin className="w-5 h-5 text-white mr-2" />
            <span className="text-white">Rajalakshmi Engineering College</span>
          </div>
        </div>

        {/* Event day highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Building className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Morning Events</h3>
            <p className="text-white/70 text-sm mb-3">
              Start your day with innovative technical competitions including Paper Presentations, CAD challenges, and debate competitions.
            </p>
            <Link 
              to="/events?filter=slot1" 
              className="text-white hover:text-white/80 text-sm font-medium flex items-center"
            >
              View Morning Events
            </Link>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Registration Details</h3>
            <p className="text-white/70 text-sm mb-3">
              Register early at the Main Entrance of the Civil Block. Participation certificates will be provided to all registered participants.
            </p>
            <Link 
              to="/register" 
              className="text-white hover:text-white/80 text-sm font-medium flex items-center"
            >
              Register Now
            </Link>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Afternoon Events</h3>
            <p className="text-white/70 text-sm mb-3">
              Continue the excitement with our Technical Quiz, Spot Events, and the thrilling Treasure Hunt around campus.
            </p>
            <Link 
              to="/events?filter=slot2" 
              className="text-white hover:text-white/80 text-sm font-medium flex items-center"
            >
              View Afternoon Events
            </Link>
          </div>
        </div>
        
        <div className="my-16 animate-fade-in">
          <ScheduleTimeline slots={timeSlots} />
        </div>
        
        <div className="max-w-2xl mx-auto mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 animate-slide-up">
          <h3 className="text-2xl font-display font-semibold text-white mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-white" />
            Important Notes
          </h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
              <span>Participants are requested to arrive at least 30 minutes before their scheduled events.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
              <span>Registration desk will be open from 8:30 AM to 12:00 PM.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
              <span>Lunch will be provided for all registered participants.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
              <span>Participants should bring their college ID cards and confirmation emails.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
              <span>All winners must be present at the valedictory function to receive their prizes.</span>
            </li>
          </ul>
          
          <div className="mt-6 text-center">
            <Link 
              to="/register" 
              className="inline-block px-6 py-2 rounded-md bg-white text-black text-sm font-medium transition-all hover:bg-white/90"
            >
              Register for Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
