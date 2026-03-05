import { useLanguageContext } from '@/contexts/LanguageContext';
import { portfolioContent } from '@shared/portfolio-content';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Experience() {
  const { language } = useLanguageContext();
  const content = portfolioContent[language];
  const experienceContent = content.experience;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding bg-off-white">
      <div className="container">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            {experienceContent.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E5C158]"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {experienceContent.positions.map((position, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-background"></div>

              {/* Timeline line */}
              {index < experienceContent.positions.length - 1 && (
                <div className="absolute left-2 top-12 w-0.5 h-24 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
              )}

              {/* Content */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="ml-12 w-full text-left p-6 bg-white rounded-lg shadow-premium hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-charcoal group-hover:text-[#D4AF37] transition-colors font-playfair">
                      {position.role}
                    </h3>
                    <p className="text-[#D4AF37] font-semibold mt-1">{position.company}</p>
                    <p className="text-charcoal/60 text-sm mt-1">
                      {position.location} • {position.period}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ${
                      expandedIndex === index ? 'rotate-90' : ''
                    }`}
                  />
                </div>

                {/* Expanded content */}
                {expandedIndex === index && (
                  <div className="mt-6 pt-6 border-t border-border space-y-3 animate-fade-in">
                    {position.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex gap-3">
                        <span className="text-[#D4AF37] font-bold mt-1">✓</span>
                        <p className="text-charcoal/70 text-sm">{highlight}</p>
                      </div>
                    ))}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Hackathons Section */}
        <div className="mt-16 pt-16 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold text-charcoal mb-8 font-playfair">
            {experienceContent.hackathons.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceContent.hackathons.events.map((event, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-premium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#E5C158] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-charcoal font-bold text-lg">🏆</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-charcoal">{event.name}</h4>
                    <p className="text-[#D4AF37] text-sm font-semibold">{event.placement}</p>
                  </div>
                </div>
                {event.project && (
                  <p className="text-charcoal/70 text-sm mb-2">
                    <span className="font-semibold text-charcoal">Project:</span> {event.project}
                  </p>
                )}
                <p className="text-charcoal/60 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
