
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EventCard, { EventProps } from '@/components/EventCard';

const Events = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const events: EventProps[] = [
    {
      id: 'paper_presentation',
      title: 'Paper and Poster Presentation',
      description: 'Showcase your research and innovative ideas in civil engineering through a formal presentation to a panel of experts.',
      coordinators: [
        { name: 'Priya Sharma', contact: '9876543210' },
        { name: 'Rahul Kumar', contact: '9876543211' }
      ],
      rules: [
        'Team composition: Maximum of 3 members per team',
        'Time limit: 8 minutes presentation + 2 minutes Q&A',
        'Participants must submit abstracts by March 15, 2025',
        'PowerPoint presentations must be in 16:9 format',
        'Topics must be related to civil engineering innovations or research',
        'Posters should be in A1 size (594 x 841 mm)',
        'Participants must bring their own laptops'
      ]
    },
    {
      id: 'master_cad',
      title: 'Master CAD',
      description: 'Demonstrate your proficiency in Computer-Aided Design by solving civil engineering design challenges within time constraints.',
      coordinators: [
        { name: 'Vikram Singh', contact: '9876543212' },
        { name: 'Ananya Patel', contact: '9876543213' }
      ],
      rules: [
        'Individual participation only',
        'Two rounds: Preliminary (1 hour) and Final (2 hours)',
        'Participants must be familiar with AutoCAD or similar software',
        'All necessary software will be provided at the venue',
        'Designs will be judged on accuracy, efficiency, and creativity',
        'Participants cannot use pre-designed templates or external resources',
        'Final round will include 3D modeling challenges'
      ]
    },
    {
      id: 'reflex_debate',
      title: 'Reflex and Debate',
      description: 'Test your knowledge of civil engineering concepts and your ability to articulate arguments in a structured debate format.',
      coordinators: [
        { name: 'Arjun Menon', contact: '9876543214' },
        { name: 'Divya Krishnan', contact: '9876543215' }
      ],
      rules: [
        'Teams of 2 members each',
        'Topics will be provided 15 minutes before the debate',
        'Each team will have 5 minutes for opening statements',
        'Rebuttals limited to 3 minutes per team',
        'Topics will focus on contemporary civil engineering challenges',
        'Judges decision will be final',
        'Professional and respectful conduct is expected'
      ]
    },
    {
      id: 'link_build',
      title: 'Link \'N\' Build',
      description: 'Design and construct a model bridge using limited materials to withstand specified loads and meet structural requirements.',
      coordinators: [
        { name: 'Rohan Verma', contact: '9876543216' },
        { name: 'Meera Nair', contact: '9876543217' }
      ],
      rules: [
        'Teams of 3-4 members',
        'Materials will be provided at the venue',
        'Time limit: 2 hours for construction',
        'Bridges will be tested for load-bearing capacity',
        'Points awarded for efficiency, aesthetics, and innovation',
        'Maximum span: 50 cm',
        'No pre-fabricated components allowed'
      ]
    },
    {
      id: 'quiz',
      title: 'Technical Quiz',
      description: 'Compete in a multi-round quiz testing your knowledge of civil engineering fundamentals, history, and current developments.',
      coordinators: [
        { name: 'Karthik Rajan', contact: '9876543218' },
        { name: 'Sneha Gupta', contact: '9876543219' }
      ],
      rules: [
        'Teams of 2 members',
        'Preliminary written round followed by stage finals',
        'Quiz will cover historical developments, current trends, and technical knowledge',
        'No electronic devices allowed during the quiz',
        'Top 6 teams from prelims will advance to finals',
        'Tie-breaker rounds will be conducted if necessary',
        'Quiz master\'s decision is final'
      ]
    },
    {
      id: 'spot_events',
      title: 'Spot Events',
      description: 'Participate in various impromptu civil engineering challenges that test your quick thinking and practical knowledge.',
      coordinators: [
        { name: 'Aditya Sharma', contact: '9876543220' },
        { name: 'Lakshmi Menon', contact: '9876543221' }
      ],
      rules: [
        'Individual participation',
        'Multiple mini-events throughout the day',
        'No pre-registration required, sign up at the venue',
        'Events will test practical skills and quick thinking',
        'Each mini-event has separate scoring and prizes',
        'Participants can join multiple spot events',
        'Details of each challenge will be revealed on-spot'
      ]
    },
    {
      id: 'treasure_hunt',
      title: 'Treasure Hunt',
      description: 'Solve engineering puzzles and follow clues in an exciting hunt around the campus that tests your civil engineering knowledge.',
      coordinators: [
        { name: 'Nikhil Rajesh', contact: '9876543222' },
        { name: 'Pooja Suresh', contact: '9876543223' }
      ],
      rules: [
        'Teams of 4 members',
        'Duration: 90 minutes maximum',
        'All clues will be related to civil engineering concepts',
        'Teams must stay together throughout the hunt',
        'No internet usage allowed during the hunt',
        'Physical challenges may be included at certain checkpoints',
        'First team to complete all challenges and find the treasure wins'
      ]
    },
  ];
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => {
        if (filter === 'slot1') {
          return ['paper_presentation', 'master_cad', 'reflex_debate', 'link_build'].includes(event.id);
        } else if (filter === 'slot2') {
          return ['quiz', 'spot_events', 'treasure_hunt'].includes(event.id);
        }
        return false;
      });

  return (
    <div className="min-h-screen bg-ziggurat-darker bg-mesh pt-20">
      <div className="content-container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 mb-4">
            COMPETITIONS
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Events & Activities
          </h1>
          <p className="text-white/70">
            Explore our diverse range of technical competitions designed to challenge your 
            knowledge, skills, and creativity in various aspects of civil engineering.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-white/5 backdrop-blur-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-ziggurat-blue text-white shadow-lg' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('slot1')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'slot1' 
                  ? 'bg-ziggurat-blue text-white shadow-lg' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Morning Slot
            </button>
            <button
              onClick={() => setFilter('slot2')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'slot2' 
                  ? 'bg-ziggurat-blue text-white shadow-lg' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Afternoon Slot
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/70 mb-6">
            Ready to showcase your skills and compete with the brightest minds?
          </p>
          <Link 
            to="/register" 
            className="inline-block px-8 py-3 rounded-md bg-ziggurat-blue text-white font-medium transition-all hover:bg-ziggurat-blue/90 hover:scale-105"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
