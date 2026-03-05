import { useLanguageContext } from '@/contexts/LanguageContext';
import { portfolioContent } from '@shared/portfolio-content';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const { language } = useLanguageContext();
  const content = portfolioContent[language];
  const heroContent = content.hero;
  const socialContent = content.contact.social;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-off-white via-background to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
              <span className="text-sm font-semibold text-[#D4AF37]">Welcome to my portfolio</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-charcoal mb-4 leading-tight">
              {heroContent.name}
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#D4AF37] mb-2">
              {heroContent.title}
            </h2>

            <p className="text-lg text-charcoal/70 mb-4">
              {heroContent.subtitle}
            </p>

            <p className="text-base text-charcoal/60 max-w-lg mb-8 leading-relaxed">
              {heroContent.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#D4AF37] text-charcoal font-semibold rounded-lg hover:bg-[#E5C158] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {heroContent.cta}
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-charcoal text-charcoal font-semibold rounded-lg hover:bg-charcoal hover:text-off-white transition-all duration-300"
              >
                Learn More
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-charcoal/50 font-medium">Follow me:</span>
              <a
                href={`https://${socialContent.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-charcoal/5 hover:bg-[#D4AF37] text-charcoal hover:text-charcoal rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`https://${socialContent.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-charcoal/5 hover:bg-[#D4AF37] text-charcoal hover:text-charcoal rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${socialContent.email}`}
                className="p-3 bg-charcoal/5 hover:bg-[#D4AF37] text-charcoal hover:text-charcoal rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-80 h-80">
              {/* Gradient circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#E5C158] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-transparent rounded-full"></div>
              
              {/* Placeholder for profile image */}
              <div className="absolute inset-8 bg-gradient-to-br from-charcoal to-charcoal/80 rounded-full flex items-center justify-center text-off-white text-6xl font-playfair font-bold">
                BM
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-charcoal/50 hover:text-[#D4AF37] transition-colors"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
