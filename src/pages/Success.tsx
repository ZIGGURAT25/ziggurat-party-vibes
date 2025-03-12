
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, ArrowLeft } from 'lucide-react';

interface RegistrationData {
  name: string;
  college: string;
  selectedEvents: string[];
  amount: number;
}

const Success = () => {
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);
  
  useEffect(() => {
    // Retrieve registration data from sessionStorage
    const storedData = sessionStorage.getItem('registrationData');
    if (storedData) {
      setRegistrationData(JSON.parse(storedData));
    }
  }, []);
  
  // If no registration data is found, likely direct navigation to this page
  if (!registrationData) {
    return (
      <div className="min-h-screen bg-ziggurat-darker bg-mesh pt-20">
        <div className="content-container py-16">
          <div className="glass-panel rounded-xl p-8 md:p-10 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">No Registration Found</h2>
            <p className="text-white/70 mb-6">
              It looks like you haven't completed the registration process yet.
            </p>
            <Link 
              to="/register" 
              className="inline-flex items-center text-ziggurat-blue hover:text-ziggurat-blue/90"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go to Registration Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ziggurat-darker bg-mesh pt-20">
      <div className="content-container py-16">
        <div className="glass-panel rounded-xl p-8 md:p-10 max-w-2xl mx-auto animate-slide-up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ziggurat-blue/20 mb-4">
              <CheckCircle className="w-8 h-8 text-ziggurat-blue" />
            </div>
            <h2 className="text-2xl font-display font-semibold text-white mb-2">Registration Successful!</h2>
            <p className="text-white/70">
              Thank you for registering for Ziggurat'25. Your registration has been confirmed.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-white/5">
              <h3 className="text-lg font-medium text-white mb-3">Registration Details</h3>
              <div className="space-y-2 text-white/80">
                <p><span className="text-white/60">Name:</span> {registrationData.name}</p>
                <p><span className="text-white/60">College:</span> {registrationData.college}</p>
                <p>
                  <span className="text-white/60">Registered Events:</span>{' '}
                  {registrationData.selectedEvents.length} events
                </p>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-white/5">
              <h3 className="text-lg font-medium text-white mb-3">Payment Information</h3>
              <p className="text-white/80">
                Payment of <span className="text-ziggurat-blue font-medium">Rs. {registrationData.amount}</span> will be collected at the venue.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-white/5">
              <h3 className="text-lg font-medium text-white mb-3">Next Steps</h3>
              <div className="space-y-3 text-white/80">
                <p className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ziggurat-blue mt-2 mr-2"></span>
                  <span>Join our WhatsApp group for updates: <a href="https://whatsapp.group/ziggurat25" target="_blank" rel="noopener noreferrer" className="text-ziggurat-blue hover:underline">WhatsApp Group Link</a></span>
                </p>
                <p className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ziggurat-blue mt-2 mr-2"></span>
                  <span>Please arrive at least 30 minutes before your event(s).</span>
                </p>
                <p className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ziggurat-blue mt-2 mr-2"></span>
                  <span>Bring your college ID and a copy of this confirmation (digital or printed).</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-4 rounded-lg bg-white/5">
              <Calendar className="w-5 h-5 text-ziggurat-magenta mr-2" />
              <span className="text-white">Event Date: March 22, 2025</span>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/" className="inline-flex items-center text-ziggurat-blue hover:text-ziggurat-blue/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
