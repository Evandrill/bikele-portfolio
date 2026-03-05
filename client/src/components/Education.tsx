import { useLanguageContext } from '@/contexts/LanguageContext';
import { portfolioContent } from '@shared/portfolio-content';
import { Award } from 'lucide-react';

export function Education() {
  const { language } = useLanguageContext();
  const content = portfolioContent[language];
  const educationContent = content.education;

  return (
    <section id="education" className="section-padding bg-off-white">
      <div className="container">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            {educationContent.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E5C158]"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {educationContent.degrees.map((degree, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-background"></div>

              {/* Timeline line */}
              {index < educationContent.degrees.length - 1 && (
                <div className="absolute left-2 top-12 w-0.5 h-32 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
              )}

              {/* Content */}
              <div className="ml-12 p-6 bg-white rounded-lg shadow-premium hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#E5C158] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-charcoal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-charcoal font-playfair">{degree.degree}</h3>
                    <p className="text-[#D4AF37] font-semibold mt-1">{degree.school}</p>
                    <p className="text-charcoal/60 text-sm mt-1">
                      {degree.location} • {degree.period}
                    </p>
                  </div>
                </div>

                {degree.gpa && (
                  <p className="text-charcoal/70 text-sm mb-4">
                    <span className="font-semibold text-charcoal">{language === 'en' ? 'GPA:' : 'Moyenne:'}</span> {degree.gpa}
                  </p>
                )}

                {degree.capstone && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-bold text-charcoal mb-2 text-sm">
                      {language === 'en' ? 'Capstone Project:' : 'Projet de Fin d\'Études:'}
                    </h4>
                    <p className="text-charcoal font-semibold text-sm mb-2">{degree.capstone.title}</p>
                    <p className="text-charcoal/70 text-sm mb-4">{degree.capstone.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {degree.capstone.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-charcoal/70 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
