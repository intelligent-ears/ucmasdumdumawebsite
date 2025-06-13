
import { Brain, Zap, Eye, Users, Trophy, BookOpen } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Enhanced Brain Development',
      description: 'Stimulates both left and right brain hemispheres for balanced cognitive growth.',
      percentage: 100
    },
    {
      icon: Zap,
      title: 'Lightning Fast Calculations',
      description: 'Perform complex mental calculations faster than a calculator.',
      percentage: 100
    },
    {
      icon: Eye,
      title: 'Improved Concentration',
      description: 'Significantly enhanced focus and attention span in all activities.',
      percentage: 100
    },
    {
      icon: Users,
      title: 'Better Academic Performance',
      description: 'Improved grades across all subjects, not just mathematics.',
      percentage: 100
    },
    {
      icon: Trophy,
      title: 'Increased Confidence',
      description: 'Boosted self-esteem and confidence in academic and social situations.',
      percentage: 100
    },
    {
      icon: BookOpen,
      title: 'Enhanced Memory',
      description: 'Stronger memory retention and recall abilities for lifelong learning.',
      percentage: 100
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-[#03045E] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-[#FFD60A] rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[#FFD60A]">UCMAS?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover the life-changing benefits that have made UCMAS the world's 
            leading abacus mental math program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#FFD60A]/20 rounded-full flex items-center justify-center group-hover:bg-[#FFD60A]/30 transition-colors duration-300">
                  <benefit.icon className="h-6 w-6 text-[#FFD60A] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-[#FFD60A] font-bold text-xl">
                  {benefit.percentage}%
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD60A] transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed mb-4">
                {benefit.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#FFD60A] to-[#FFD60A]/80 h-2 rounded-full animate-fill-bar"
                  style={{
                    width: `${benefit.percentage}%`,
                    animationDelay: `${index * 200 + 1000}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-fade-in-up">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 text-[#FFD60A] animate-bounce"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  ⭐
                </div>
              ))}
            </div>
            <blockquote className="text-2xl text-white/90 font-medium mb-6 max-w-4xl mx-auto">
              "Through our concept of “Education with a Difference,” UCMAS has sparked a revolution in the education industry with more and more parents opting for UCMAS as their preferred enhancement centre for their children."
            </blockquote>
            <div className="text-[#FFD60A] font-semibold">
              - Dr. Dino Wong, Founder & President UCMAS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;