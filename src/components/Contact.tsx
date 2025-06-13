import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Star, Quote } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // Use relative path for Vercel API route
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          childName: formData.name,
          age: formData.age,
          email: formData.email,
          phone: formData.phone,
          interests: formData.message
        })
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Submission failed');
      }
  
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        message: ''
      });
  
      // Optionally auto-hide the thank-you message
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9937229788'],
      color: 'text-[#FFD60A]',
      description: 'Speak with us'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['ucmas.dumduma@gmail.com'],
      color: 'text-[#FFD60A]',
      description: 'Get detailed program information'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['B 148, Phase 5, DDHB Colony, Dumduma'],
      color: 'text-[#FFD60A]',
      description: 'Tour our center'
    },
    
  ];

  const testimonials = [
    {
      name: 'Bibhu Prasad Mangaraj',
      image: '/user.png ',
      rating: 5,
      text: 'One of the best brain exercise system.',
    },
    {
      name: 'SajuV Joseph',
      image: '/user.png ',
      rating: 5,
      text: 'UCMAS is an excellent programme for children ESP in maths.. My kids have had considerable ease to do maths since attending Ucmas.',
    },
   
    {
      name: 'Sneha',
      image: '/user.png ',
      rating: 5,
      text: 'Excellent... For brain development',
    }
  ];

  return (
    <div>
      {/* Testimonials Section - Dark Blue Background */}
      <section className="py-20 bg-[#03045E] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
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

        {/* Floating Quote Marks */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            >
              <Quote className="h-12 w-12 text-[#FFD60A]" />
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Parents <span className="text-[#FFD60A]">Say</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover how UCMAS has transformed the lives of thousands of children 
              and their families worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 p-6 animate-fade-in-up border border-white/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-[#FFD60A]/50" />
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-[#FFD60A]/30 group-hover:border-[#FFD60A]/60 transition-all duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FFD60A] rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-[#03045E]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-[#FFD60A] transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      
                      <div className="flex space-x-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-[#FFD60A] fill-current animate-twinkle"
                            style={{ animationDelay: `${i * 200}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="text-white/90 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

              
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center animate-fade-in-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="text-3xl font-bold text-white counter" data-target="5000">500+</div>
                <div className="text-white/70 group-hover:text-[#FFD60A] transition-colors duration-300">Happy Students</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-white counter" data-target="98">100</div>
                <div className="text-white/70 group-hover:text-[#FFD60A] transition-colors duration-300">% Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-white counter" data-target="15">13+</div>
                <div className="text-white/70 group-hover:text-[#FFD60A] transition-colors duration-300">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-white counter" data-target="50">10+</div>
                <div className="text-white/70 group-hover:text-[#FFD60A] transition-colors duration-300">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Yellow Gradient Background */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#FFD60A] via-[#FFD60A]/90 to-[#FFD60A]/80 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #03045E 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #03045E 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>

        {/* Floating Mathematical Symbols */}
        <div className="absolute inset-0">
          {['+', '×', '÷', '=', '%'].map((symbol, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20 text-4xl font-bold text-[#03045E]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#03045E] mb-6">
              Get in <span className="text-white">Touch</span>
            </h2>
            <p className="text-xl text-[#03045E]/80 max-w-3xl mx-auto">
              Ready to unlock your child's potential? Contact us today to schedule 
              a free assessment and begin their mathematical journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Information */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-[#03045E] mb-8">
                Multiple Ways to Connect
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-500 transform hover:-translate-y-1 p-6 animate-fade-in-up border border-white/50"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-[#03045E]/10 rounded-full flex items-center justify-center group-hover:bg-[#03045E]/20 transition-colors duration-300 flex-shrink-0">
                        <info.icon className={`h-7 w-7 text-[#03045E] group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-[#03045E] mb-1 group-hover:text-[#03045E] transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-sm text-[#03045E]/70 mb-2">{info.description}</p>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-[#03045E] font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Map Placeholder */}
              <div className="bg-[#03045E] rounded-2xl p-8 text-center animate-fade-in-up text-white">
                <MapPin className="h-16 w-16 text-[#FFD60A] mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl font-semibold mb-2">
                  Visit Our Center
                </h4>
                <p className="text-white/80 mb-4">
                  
                </p>
                <button className="bg-[#FFD60A] text-[#03045E] px-6 py-2 rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105">
                  Get Directions
                </button>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative overflow-hidden border border-white/50">
                {/* Success Animation Overlay */}
                {isSubmitted && (
                  <div className="absolute inset-0 bg-[#03045E]/95 flex items-center justify-center z-10 animate-fade-in-up">
                    <div className="text-center">
                      <CheckCircle className="h-16 w-16 text-[#FFD60A] mx-auto mb-4 animate-bounce" />
                      <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                      <p className="text-white/90">We'll contact you within 24 hours</p>
                    </div>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-[#03045E] mb-2">
                  Schedule Your Visit
                </h3>
                <p className="text-[#03045E]/70 mb-6">
                  No commitment required • Expert evaluation • Personalized recommendations
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-[#03045E] mb-2 group-focus-within:text-[#03045E] transition-colors duration-300">
                        Child's Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#03045E]/30 rounded-lg focus:ring-2 focus:ring-[#03045E] focus:border-transparent transition-all duration-300 group-hover:border-[#03045E]/50 bg-white/80"
                        placeholder="Enter child's name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-[#03045E] mb-2 group-focus-within:text-[#03045E] transition-colors duration-300">
                        Age *
                      </label>
                      <select
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#03045E]/30 rounded-lg focus:ring-2 focus:ring-[#03045E] focus:border-transparent transition-all duration-300 group-hover:border-[#03045E]/50 bg-white/80"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select age</option>
                        {[...Array(10)].map((_, i) => (
                          <option key={i} value={i + 4}>{i + 4} years</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-[#03045E] mb-2 group-focus-within:text-[#03045E] transition-colors duration-300">
                      Parent Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#03045E]/30 rounded-lg focus:ring-2 focus:ring-[#03045E] focus:border-transparent transition-all duration-300 group-hover:border-[#03045E]/50 bg-white/80"
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-[#03045E] mb-2 group-focus-within:text-[#03045E] transition-colors duration-300">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#03045E]/30 rounded-lg focus:ring-2 focus:ring-[#03045E] focus:border-transparent transition-all duration-300 group-hover:border-[#03045E]/50 bg-white/80"
                      placeholder="+91 9876543210"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-[#03045E] mb-2 group-focus-within:text-[#03045E] transition-colors duration-300">
                      Tell us about your child's interests
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-[#03045E]/30 rounded-lg focus:ring-2 focus:ring-[#03045E] focus:border-transparent transition-all duration-300 resize-none group-hover:border-[#03045E]/50 bg-white/80"
                      placeholder="Any specific goals, challenges, or questions about your child's learning journey..."
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#03045E] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#03045E]/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Schedule Free Assessment
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-sm text-[#03045E]/70">
                    <p>✓ No spam, ever • ✓ Free consultation • ✓ Expert guidance</p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Call-to-Action Banner */}
          <div className="mt-16 bg-[#03045E] rounded-2xl p-8 text-center animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Child's Brain Development Journey?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of families who have discovered the power of UCMAS. 
              Book your visit today and see the difference abacus learning can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FFD60A] text-[#03045E] px-8 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105">
                Book visit
              </button>
              <button className="border-2 border-[#FFD60A] text-[#FFD60A] px-8 py-3 rounded-full font-semibold hover:bg-[#FFD60A] hover:text-[#03045E] transition-all duration-300 transform hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;