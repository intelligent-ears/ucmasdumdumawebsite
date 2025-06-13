
import { ArrowRight, Zap, Trophy, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#03045E] via-[#03045E]/90 to-[#03045E]/80 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-8 h-8 bg-[#FFD60A] rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight flex items-center gap-3">
  <img
    src="/logoucmas.png" // or use `import logo from 'src/components/logoucmas.png';`
    alt="Small Logo"
    className="h-[96px] w-[300px]"
  />

</h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Unlock your child's potential with our proven abacus learning program. 
                Develop lightning-fast calculation skills, enhanced concentration, and boost academic confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-[#FFD60A] text-[#03045E] px-8 py-4 rounded-full font-semibold hover:bg-[#FFD60A]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="border-2 border-[#FFD60A] text-[#FFD60A] px-8 py-4 rounded-full font-semibold hover:bg-[#FFD60A] hover:text-[#03045E] transition-all duration-300 transform hover:scale-105">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up">
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-[#FFD60A] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold text-white counter" data-target="5000">500+</div>
                <div className="text-white/70">Students</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-8 w-8 text-[#FFD60A] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold text-white counter" data-target="95">100%</div>
                <div className="text-white/70">Satisfaction Rate</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-8 w-8 text-[#FFD60A] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold text-white counter" data-target="15">13+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Animated Abacus Visualization */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 animate-float-slow">
              <div className="absolute inset-0 bg-[#FFD60A]/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-[#FFD60A]/10 rounded-full animate-spin-slow"></div>
              <img
    src="/girl.png" // Replace with your image path or import
    alt="Floating Image"
    className="absolute top-1/2 left-1/2 w-33  h-33 object-contain transform -translate-x-1/2 -translate-y-1/2 
               transition-transform duration-500 hover:scale-110 animate-float-soft rounded-xl "
  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;