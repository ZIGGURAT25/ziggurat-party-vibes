
import Hero from '@/components/Hero';
import { ArrowRight, Calendar, MapPin, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const eventHighlights = [
    {
      title: "Paper Presentation",
      description: "Showcase your research and innovations in civil engineering through a formal presentation.",
      icon: <Users className="w-6 h-6 text-ziggurat-blue" />,
    },
    {
      title: "Master CAD",
      description: "Put your CAD skills to the test with challenging design problems and time constraints.",
      icon: <Award className="w-6 h-6 text-ziggurat-magenta" />,
    },
    {
      title: "Technical Quiz",
      description: "Test your knowledge of civil engineering concepts, history, and current developments.",
      icon: <Calendar className="w-6 h-6 text-ziggurat-purple" />,
    },
    {
      title: "Treasure Hunt",
      description: "Solve engineering puzzles and follow clues in this exciting engineering-themed hunt.",
      icon: <MapPin className="w-6 h-6 text-ziggurat-blue" />,
    },
  ];

  return (
    <div className="w-full">
      <Hero />
      
      <section id="event-intro" className="py-20 bg-ziggurat-darker">
        <div className="content-container">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 text-left animate-slide-up">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 mb-4">
                ABOUT THE EVENT
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                National Level Technical Symposium
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Ziggurat'25 brings together the brightest minds in civil engineering to exchange ideas, 
                showcase innovations, and compete in a variety of technical events. Hosted by the Department 
                of Civil Engineering at Rajalakshmi Engineering College, this symposium offers a platform for 
                students to demonstrate their technical prowess and creative problem-solving abilities.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                Join us for a day filled with engaging competitions, networking opportunities, and the chance 
                to win exciting prizes. Whether you're presenting research papers, testing your CAD skills, or 
                participating in our technical quiz, Ziggurat'25 has something for every aspiring civil engineer.
              </p>
              <div className="flex items-center">
                <Link 
                  to="/events" 
                  className="group flex items-center text-ziggurat-blue hover:text-ziggurat-blue/90 transition-colors"
                >
                  <span className="mr-2">View All Events</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="flex-1 glass-panel rounded-xl p-8 animate-slide-up">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-display font-semibold text-white">Event Details</h3>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-ziggurat-blue/20 text-ziggurat-blue">
                  MARCH 22, 2025
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 mt-1">
                    <Calendar className="w-5 h-5 text-ziggurat-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Date & Time</h4>
                    <p className="text-white/70 text-sm">March 22, 2025 | 9:00 AM - 4:30 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-5 h-5 text-ziggurat-magenta" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Venue</h4>
                    <p className="text-white/70 text-sm">
                      Department of Civil Engineering<br />
                      Rajalakshmi Engineering College<br />
                      Rajalakshmi Nagar, Thandalam, Chennai
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 mt-1">
                    <Users className="w-5 h-5 text-ziggurat-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Eligibility</h4>
                    <p className="text-white/70 text-sm">
                      Open to all undergraduate and postgraduate students from engineering colleges across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 mb-4">
                HIGHLIGHTS
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                Featured Events
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Ziggurat'25 offers a diverse range of technical competitions designed to challenge 
                your knowledge, skills, and creativity in various aspects of civil engineering.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventHighlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="glass-panel rounded-xl p-6 transition-all hover:shadow-[0_8px_30px_rgb(0,163,255,0.1)] hover:translate-y-[-5px]"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{highlight.title}</h3>
                  <p className="text-white/70 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                to="/register" 
                className="inline-block px-8 py-3 rounded-md bg-ziggurat-blue text-white font-medium transition-all hover:bg-ziggurat-blue/90 hover:scale-105"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
