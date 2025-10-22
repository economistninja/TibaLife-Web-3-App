import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

// Add Import Images
const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1509440332608-7845e48c507b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvc3BpdGFsJTIwYW5kJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'; 
const MISSION_IMAGE_URL = 'https://images.unsplash.com/photo-1675270855267-3c73bfd13849?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZlbWFsZSUyMGRvY3RvciUyMGFuZCUyMHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500'; 
const VISION_IMAGE_URL = 'https://images.unsplash.com/photo-1650784853783-68052c97ebfb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZlbWFsZSUyMGRvY3RvciUyMGFuZCUyMHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500'; 
const IMPACT_IMAGE_URL = 'https://images.unsplash.com/photo-1758691462651-611d730c5272?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZlbWFsZSUyMGRvY3RvciUyMGFuZCUyMHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500'; 
const TECH_IMAGE_URL = 'https://images.unsplash.com/photo-1666886573452-9dc8ce8f5cc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhbHRoY2FyZSUyMGFuZCUyMG1lZGljaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500'; 
const SDG3_LOGO_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYt93VpGua2XWXsj7dqtmB7FPL7jmL-q9jKg&s'; 
const UNSDG_LOGO_URL = 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E_SDG_logo_UN_emblem_square_trans_WEB.png'; 

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-ocean-start/20 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <button 
          onClick={() => scrollTo('home')} 
          className="font-bbh-hegarty text-2xl text-ocean-deep hover:text-ocean-start transition-colors"
        >
          TibaLife
        </button>
        
        <div className="hidden md:flex gap-8 items-center">
          <button 
            onClick={() => scrollTo('home')} 
            className="text-ocean-deep hover:text-ocean-start transition-colors font-medium"
          >
            Home
          </button>
          
          <button 
            onClick={() => scrollTo('mission')} 
            className="text-ocean-deep hover:text-ocean-start transition-colors font-medium"
          >
            Mission
          </button>
          
          <button 
            onClick={() => scrollTo('vision')} 
            className="text-ocean-deep hover:text-ocean-start transition-colors font-medium"
          >
            Vision
          </button>
          
          <button 
            onClick={() => scrollTo('impact')} 
            className="text-ocean-deep hover:text-ocean-start transition-colors font-medium"
          >
            Impact
          </button>
          
          <button 
            onClick={() => scrollTo('tech')} 
            className="text-ocean-deep hover:text-ocean-start transition-colors font-medium"
          >
            Tech
          </button>
          
          <div className="flex gap-3">
            <Link 
              to="/login" 
              className="bg-brand-red text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium shadow-md"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="bg-brand-olive text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium shadow-md"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-ocean-deep text-white py-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="flex items-center gap-4">
          <img 
            src={SDG3_LOGO_URL} 
            alt="SDG3" 
            className="w-12 h-12 object-contain"
          />
          <img 
            src={UNSDG_LOGO_URL} 
            alt="UNSDG" 
            className="w-12 h-12 object-contain"
          />
          <div>
            <h3 className="font-ubuntu font-semibold text-lg">SDG3 Aligned</h3>
            <p className="text-blue-200 text-sm">Good Health & Well-being</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-6 text-sm">
          <a 
            href="#about" 
            onClick={(e)=>{e.preventDefault(); document.getElementById('mission')?.scrollIntoView({behavior:'smooth'})}}
            className="hover:text-ocean-start transition-colors"
          >
            About
          </a>
          <Link to="/terms" className="hover:text-ocean-start transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-ocean-start transition-colors">Privacy</Link>
          <Link to="/ethics" className="hover:text-ocean-start transition-colors">Data Ethics</Link>
          <Link to="/disclaimer" className="hover:text-ocean-start transition-colors">Disclaimer</Link>
          <Link to="/careers" className="hover:text-ocean-start transition-colors">Careers</Link>
        </div>
        
        <div className="text-sm space-y-2">
          <div className="font-medium">Contact Us</div>
          <div>+254731392908 / +254794555880</div>
          <div>
            <a 
              className="text-ocean-start hover:underline" 
              href="mailto:titomwenda27@gmail.com"
            >
              titomwenda27@gmail.com
            </a>
          </div>
          <div className="flex gap-4 mt-3">
            <a 
              className="text-blue-200 hover:text-white transition-colors" 
              href="https://github.com/economistninja" 
              target="_blank"
            >
              GitHub
            </a>
            <a 
              className="text-blue-200 hover:text-white transition-colors" 
              href="https://www.linkedin.com/in/tito-mwenda" 
              target="_blank"
            >
              LinkedIn
            </a>
            <a 
              className="text-blue-200 hover:text-white transition-colors" 
              href="https://x.com/titomwenda1" 
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-blue-800 pt-8 text-center text-blue-200 text-sm">
        © 2025 TibaLife. Empowering Kenya's health ecosystem through blockchain technology.
      </div>
    </div>
  </footer>
);

const Landing: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.12,
    });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => { /* no-op */ };
  }, []);

  return (
    <div className="font-urbanist bg-white">
      <Navbar />
      
      <main id="home" className="pt-16">
        {/* Hero Section with Trust-themed Background */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden hero">
          {/* Background Image with High Opacity Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HERO_IMAGE_URL})`,
              opacity: 0.15
            }}
          />
          <div className="absolute inset-0 bg-ocean-gradient opacity-90"/>
          
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center z-10">
            <h1 className="font-bbh-hegarty text-6xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              TibaLife
            </h1>
            <h2 className="font-ubuntu text-3xl md:text-4xl text-white/90 mb-8 font-semibold">
              Secure Health Records for Kenya
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Empowering Kenya's health ecosystem with blockchain-secured, interoperable health records. 
              Connect patients, doctors, and hospitals through transparent, FHIR-compliant data sharing 
              aligned to Sustainable Development Goal 3.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/login" 
                className="bg-brand-red text-white px-10 py-4 rounded-xl text-xl font-semibold hover:bg-red-600 transition-all transform hover:scale-105 shadow-2xl"
              >
                Access Health Records
              </Link>
              <Link 
                to="/register" 
                className="bg-brand-olive text-white px-10 py-4 rounded-xl text-xl font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-2xl"
              >
                Join as Health Partner
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section with Trust Background */}
        <section id="mission" className="relative py-24 px-6 md:px-12 bg-light-blue">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url(${MISSION_IMAGE_URL})`
            }}
          />
          
          <div className="relative max-w-7xl mx-auto z-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-ocean-start/20">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-ocean-gradient rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">🎯</span>
                </div>
                <h2 className="font-bbh-hegarty text-5xl font-bold text-ocean-deep">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                TibaLife strengthens health systems and combats antimicrobial resistance (AMR) through 
                data interoperability, patient-centered digital records, and decentralized blockchain technology. 
                We aim to make healthcare transparent, secure, and accessible, empowering communities and 
                health institutions to achieve the SDG 3 targets by 2030.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="relative py-24 px-6 md:px-12 bg-white">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url(${VISION_IMAGE_URL})`
            }}
          />
          
          <div className="relative max-w-7xl mx-auto z-10">
            <div className="bg-gradient-to-br from-ocean-start/10 to-ocean-end/10 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-ocean-start/30">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-ocean-turquoise rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">👁️</span>
                </div>
                <h2 className="font-bbh-hegarty text-5xl font-bold text-ocean-deep">Our Vision</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                TibaLife envisions a world where every individual can access, share, and control their 
                health data securely through a decentralized, patient-centered ecosystem. By fostering 
                trust, innovation, and collaboration across hospitals and health systems, we strive to 
                build resilient, data-driven communities that realize the full promise of Good Health 
                and Well-Being for all by 2030.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section with SDG3 */}
        <section id="impact" className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-brand-olive/10 to-ocean-start/10">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url(${IMPACT_IMAGE_URL})`
            }}
          />
          
          <div className="relative max-w-7xl mx-auto z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-brand-olive/20">
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src="sdg3Logo" 
                  alt="SDG3" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h2 className="font-bbh-hegarty text-5xl font-bold text-ocean-deep">Our Impact on SDG3</h2>
                  <p className="text-brand-olive font-semibold text-xl">Good Health & Well-being for All</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    TibaLife contributes to SDG3 by transforming fragmented health data into actionable 
                    intelligence, supporting safer care, faster diagnosis, and AMR stewardship. We enable 
                    hospitals to deliver better outcomes and reduce diagnostic delays.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-brand-red rounded-full"></div>
                      <span className="text-lg text-gray-700">Reduced diagnostic delays</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-brand-olive rounded-full"></div>
                      <span className="text-lg text-gray-700">Enhanced AMR monitoring</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-ocean-start rounded-full"></div>
                      <span className="text-lg text-gray-700">Improved health system transparency</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-ocean-start/10 to-ocean-end/10 rounded-2xl p-8">
                  <h3 className="font-ubuntu font-semibold text-2xl mb-6 text-ocean-deep">SDG3 Targets We Support</h3>
                  <div className="space-y-4 text-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Universal Health Coverage</span>
                      <span className="text-brand-olive font-bold text-xl">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Reduce Maternal Mortality</span>
                      <span className="text-brand-olive font-bold text-xl">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">End Preventable Deaths</span>
                      <span className="text-brand-olive font-bold text-xl">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Strengthen Health Systems</span>
                      <span className="text-brand-olive font-bold text-xl">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section id="tech" className="relative py-24 px-6 md:px-12 bg-light-blue">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url(${TECH_IMAGE_URL})`
            }}
          />
          
          <div className="relative max-w-7xl mx-auto z-10">
            <div className="text-center mb-16">
              <h2 className="font-bbh-hegarty text-5xl font-bold text-ocean-deep mb-6">Our Technology Stack</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Built on cutting-edge blockchain technology with international healthcare standards
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Ethereum", desc: "Blockchain Security", color: "bg-blue-600", icon: "⛓️" },
                { name: "FHIR", desc: "Interoperability", color: "bg-green-600", icon: "🔄" },
                { name: "openEHR", desc: "Health Records", color: "bg-purple-600", icon: "📋" },
                { name: "Chart.js", desc: "Analytics", color: "bg-orange-600", icon: "📊" }
              ].map((tech, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  <div className={`w-16 h-16 ${tech.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl`}>
                    {tech.icon}
                  </div>
                  <h3 className="font-ubuntu font-semibold text-xl mb-2 text-ocean-deep">{tech.name}</h3>
                  <p className="text-gray-600">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Light Blue Background */}
        <section id="how" className="py-24 px-6 md:px-12" style={{ backgroundColor: '#F0F8FF' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-bbh-hegarty text-5xl font-bold text-ocean-deep mb-6">How It Works</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Five simple steps to secure, interoperable health data sharing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Data Integration", desc: "Hospitals upload patient data using FHIR and openEHR standards", icon: "📥" },
                { step: "2", title: "Patient Control", desc: "Patients view, share, or revoke access to their medical records", icon: "👤" },
                { step: "3", title: "Blockchain Security", desc: "All transactions encrypted and recorded on blockchain", icon: "🔒" },
                { step: "4", title: "Smart Analytics", desc: "AMR auditing and health system insights", icon: "🧠" },
                { step: "5", title: "Collaboration Hub", desc: "Secure access for doctors, policymakers, and researchers", icon: "🤝" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-ubuntu font-semibold text-xl mb-3 text-ocean-deep">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="py-24 px-6 md:px-12 bg-ocean-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bbh-hegarty text-5xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-white/90 mb-12">
              Subscribe to our monthly newsletter for health tech insights and SDG3 progress updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                required 
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 text-lg"
              />
              <button 
                type="submit"
                className="bg-brand-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-600 transition-colors text-lg shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bbh-hegarty text-5xl font-bold text-ocean-deep mb-8">Contact Us</h2>
            <p className="text-xl text-gray-700 mb-12">
              Ready to transform healthcare in Kenya? Get in touch with our team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-ocean-start/10 to-ocean-end/10 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                  📞
                </div>
                <h3 className="font-ubuntu font-semibold text-xl mb-4 text-ocean-deep">Phone</h3>
                <p className="text-gray-600 text-lg">+254731392908</p>
                <p className="text-gray-600 text-lg">+254794555880</p>
              </div>
              
              <div className="bg-gradient-to-br from-ocean-start/10 to-ocean-end/10 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-brand-olive rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                  ✉️
                </div>
                <h3 className="font-ubuntu font-semibold text-xl mb-4 text-ocean-deep">Email</h3>
                <a 
                  href="mailto:titomwenda27@gmail.com" 
                  className="text-brand-red hover:underline text-lg"
                >
                  titomwenda27@gmail.com
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-ocean-start/10 to-ocean-end/10 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-ocean-start rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                  🌐
                </div>
                <h3 className="font-ubuntu font-semibold text-xl mb-4 text-ocean-deep">Social</h3>
                <div className="flex justify-center gap-4">
                  <a href="https://github.com/economistninja" target="_blank" className="text-gray-600 hover:text-ocean-start text-lg">GitHub</a>
                  <a href="https://www.linkedin.com/in/tito-mwenda" target="_blank" className="text-gray-600 hover:text-ocean-start text-lg">LinkedIn</a>
                  <a href="https://x.com/titomwenda1" target="_blank" className="text-gray-600 hover:text-ocean-start text-lg">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;