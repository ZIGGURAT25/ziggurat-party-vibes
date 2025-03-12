
import RegisterForm from '@/components/RegisterForm';

const Register = () => {
  return (
    <div className="min-h-screen bg-ziggurat-darker bg-mesh pt-20">
      <div className="content-container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 mb-4">
            JOIN US
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Register for Ziggurat'25
          </h1>
          <p className="text-white/70">
            Fill out the form below to register for Ziggurat'25 and secure your spot at this
            exciting national level civil engineering symposium.
          </p>
        </div>
        
        <div className="glass-panel rounded-xl p-8 md:p-10 max-w-4xl mx-auto animate-slide-up">
          <div className="mb-8 space-y-2">
            <h2 className="text-xl font-semibold text-white">Registration Form</h2>
            <p className="text-white/70 text-sm">
              Please fill in all required fields marked with an asterisk (*).
            </p>
          </div>
          
          <RegisterForm />
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-white/60">
              By registering, you agree to the event terms and conditions. For any queries,
              please contact the event coordinators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
