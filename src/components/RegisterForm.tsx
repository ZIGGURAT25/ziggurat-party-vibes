
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Define available events
export const eventOptions = [
  { id: 'paper_presentation', name: 'Paper and Poster Presentation', slot: 1 },
  { id: 'master_cad', name: 'Master CAD', slot: 1 },
  { id: 'reflex_debate', name: 'Reflex and Debate', slot: 1 },
  { id: 'link_build', name: 'Link \'N\' Build', slot: 1 },
  { id: 'quiz', name: 'Technical Quiz', slot: 2 },
  { id: 'spot_events', name: 'Spot Events', slot: 2 },
  { id: 'treasure_hunt', name: 'Treasure Hunt', slot: 2 },
];

interface RegisterFormData {
  name: string;
  college: string;
  rollNumber: string;
  collegeEmail: string;
  personalEmail: string;
  phone: string;
  department: string;
  year: string;
  selectedEvents: string[];
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    college: '',
    rollNumber: '',
    collegeEmail: '',
    personalEmail: '',
    phone: '',
    department: '',
    year: '',
    selectedEvents: [],
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEventSelection = (eventId: string) => {
    const selectedEvent = eventOptions.find(event => event.id === eventId);
    if (!selectedEvent) return;
    
    // Check if event is already selected
    if (formData.selectedEvents.includes(eventId)) {
      setFormData(prev => ({
        ...prev,
        selectedEvents: prev.selectedEvents.filter(id => id !== eventId)
      }));
      return;
    }
    
    // Get the slot of the selected event
    const eventSlot = selectedEvent.slot;
    
    // Check if there's a conflict (another event in the same slot is already selected)
    const hasConflict = formData.selectedEvents.some(id => {
      const event = eventOptions.find(e => e.id === id);
      return event && event.slot === eventSlot;
    });
    
    if (hasConflict) {
      toast.error("You can't select multiple events in the same time slot.", {
        description: "Please deselect the conflicting event first."
      });
      return;
    }
    
    // Add the event to selected events
    setFormData(prev => ({
      ...prev,
      selectedEvents: [...prev.selectedEvents, eventId]
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name || !formData.college || !formData.phone || !formData.department || !formData.year) {
      toast.error("Please fill in all required fields");
      return false;
    }
    
    if (formData.selectedEvents.length === 0) {
      toast.error("Please select at least one event");
      return false;
    }
    
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Store registration data in sessionStorage to use on success page
      sessionStorage.setItem('registrationData', JSON.stringify({
        ...formData,
        amount: 300 + (formData.selectedEvents.length * 50),
      }));
      
      setIsSubmitting(false);
      navigate('/success');
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ziggurat-blue/50 transition-all"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label htmlFor="college" className="block text-sm font-medium text-white/80 mb-1">
              College Name *
            </label>
            <input
              id="college"
              name="college"
              type="text"
              required
              value={formData.college}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ziggurat-blue/50 transition-all"
              placeholder="Enter your college name"
            />
          </div>
          
          <div>
            <label htmlFor="rollNumber" className="block text-sm font-medium text-white/80 mb-1">
              Roll Number *
            </label>
            <input
              id="rollNumber"
              name="rollNumber"
              type="text"
              required
              value={formData.rollNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ziggurat-blue/50 transition-all"
              placeholder="Enter your roll number"
            />
          </div>
          
          <div>
            <label htmlFor="collegeEmail" className="block text-sm font-medium text-white/80 mb-1">
              College Email
            </label>
            <input
              id="collegeEmail"
              name="collegeEmail"
              type="email"
              value={formData.collegeEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ziggurat-blue/50 transition-all"
              placeholder="Enter your college email"
            />
          </div>
          
          <div>
            <label htmlFor="personalEmail" className="block text-sm font-medium text-white/80 mb-1">
              Personal Email *
            </label>
            <input
              id="personalEmail"
              name="personalEmail"
              type="email"
              required
              value={formData.personalEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ziggurat-blue/50 transition-all"
              placeholder="Enter your personal email"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ziggurat-blue/50 transition-all"
              placeholder="Enter your phone number"
            />
          </div>
          
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-white/80 mb-1">
              Department *
            </label>
            <select
              id="department"
              name="department"
              required
              value={formData.department}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ziggurat-blue/50 transition-all"
            >
              <option value="" disabled>Select your department</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Electronics and Communication">Electronics and Communication</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-white/80 mb-1">
              Year of Study *
            </label>
            <select
              id="year"
              name="year"
              required
              value={formData.year}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ziggurat-blue/50 transition-all"
            >
              <option value="" disabled>Select your year</option>
              <option value="First Year">First Year</option>
              <option value="Second Year">Second Year</option>
              <option value="Third Year">Third Year</option>
              <option value="Final Year">Final Year</option>
            </select>
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium text-white/80 mb-3">
            Select Events to Participate *
          </p>
          <div className="space-y-1 text-white/70 text-sm mb-2">
            <p>Note: You can only select one event per time slot</p>
            <p>Slot 1: Morning Session | Slot 2: Afternoon Session</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {eventOptions.map((event) => (
              <div 
                key={event.id}
                className={`p-3 rounded-md cursor-pointer transition-all flex items-center ${
                  formData.selectedEvents.includes(event.id)
                    ? 'bg-ziggurat-blue/20 border border-ziggurat-blue/50'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
                onClick={() => handleEventSelection(event.id)}
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center mr-3 ${
                  formData.selectedEvents.includes(event.id)
                    ? 'border-ziggurat-blue bg-ziggurat-blue/20'
                    : 'border-white/30'
                }`}>
                  {formData.selectedEvents.includes(event.id) && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="#00A3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{event.name}</p>
                  <p className="text-xs text-white/60">Slot {event.slot}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-md font-medium transition-all ${
              isSubmitting
                ? 'bg-ziggurat-blue/50 cursor-not-allowed'
                : 'bg-ziggurat-blue hover:bg-ziggurat-blue/90 hover:shadow-[0_0_20px_rgba(0,163,255,0.3)]'
            }`}
          >
            {isSubmitting ? 'Processing...' : 'Register Now'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
