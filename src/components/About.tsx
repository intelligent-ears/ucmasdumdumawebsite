
import { Brain, Target, Award, BookOpen } from 'lucide-react';


const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'Mental Development',
      description: 'Enhance cognitive abilities and mental calculation speed through proven abacus techniques.'
    },
    {
      icon: Target,
      title: 'Focused Learning',
      description: 'Structured curriculum designed to improve concentration and attention span significantly.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Award-winning methodology with thousands of successful students worldwide.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Program',
      description: 'Complete learning system from basic counting to advanced mental math mastery.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #03045E 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#03045E] mb-6">
            About <span className="text-[#FFD60A]">UCMAS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UCMAS (Universal Concept of Mental Arithmetic System) is a globally recognized 
            abacus-based mental math program that transforms how children approach mathematics 
            and learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-[#03045E] mb-6">
              Transforming Young Minds Through Ancient Wisdom
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For over 15 years, UCMAS has been empowering children aged 4-13 with 
              exceptional mental math abilities. Our time-tested abacus methodology 
              combines traditional techniques with modern pedagogy to create a 
              comprehensive learning experience.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Students learn to perform complex calculations mentally, often faster 
              than a calculator, while simultaneously developing enhanced concentration, 
              memory, and overall academic performance.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#FFD60A] rounded-full flex items-center justify-center">
                <span className="text-[#03045E] text-2xl font-bold">✓</span>
              </div>
              <span className="text-lg font-semibold text-[#03045E]">
                Internationally Certified Program
              </span>
            </div>
          </div>

          {/* Animated Visual */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-[#03045E] to-[#03045E]/80 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {[...Array(5)].map((_, j) => (
                          <div
                            key={j}
                            className="w-6 h-6 bg-[#FFD60A] rounded-full animate-pulse"
                            style={{ animationDelay: `${(i * 5 + j) * 100}ms` }}
                          ></div>
                        ))}
                      </div>
                      <div className="text-white font-mono text-lg">
                        {Math.floor(Math.random() * 100)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-[#FFD60A]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FFD60A]/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-[#03045E] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#03045E] mb-3 group-hover:text-[#FFD60A] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;