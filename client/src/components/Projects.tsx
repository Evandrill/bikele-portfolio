import { useLanguageContext } from '@/contexts/LanguageContext';
import { portfolioContent } from '@shared/portfolio-content';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  const { language } = useLanguageContext();
  const content = portfolioContent[language];
  const projectsContent = content.projects;

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            {projectsContent.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E5C158]"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {projectsContent.items.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-premium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col"
              style={{ animationDelay: `${0.2 + index * 0.05}s` }}
            >
              {/* Header with gradient */}
              <div className="h-32 bg-gradient-to-br from-[#D4AF37] to-[#E5C158] relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-charcoal transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-charcoal mb-1 font-playfair group-hover:text-[#D4AF37] transition-colors">
                  {project.name}
                </h3>
                <p className="text-[#D4AF37] text-sm font-semibold mb-4">{project.subtitle}</p>

                <p className="text-charcoal/70 text-sm mb-6 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2">
                    {language === 'en' ? 'Technologies' : 'Technologies'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-charcoal/70 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold text-xs mt-1">▸</span>
                      <p className="text-charcoal/60 text-xs">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn">
                  <span>{language === 'en' ? 'Learn More' : 'En Savoir Plus'}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
