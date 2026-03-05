import { useLanguageContext } from '@/contexts/LanguageContext';
import { portfolioContent } from '@shared/portfolio-content';

export function About() {
  const { language } = useLanguageContext();
  const content = portfolioContent[language];
  const aboutContent = content.about;

  const skillCategories = [
    { title: 'Languages', skills: aboutContent.skills.languages },
    { title: 'Backend', skills: aboutContent.skills.backend },
    { title: 'Frontend', skills: aboutContent.skills.frontend },
    { title: 'Databases', skills: aboutContent.skills.databases },
    { title: 'Cybersecurity', skills: aboutContent.skills.cybersecurity },
    { title: 'AI & Computer Vision', skills: aboutContent.skills.ai },
    { title: 'DevOps & Tools', skills: aboutContent.skills.devops },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            {aboutContent.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E5C158]"></div>
        </div>

        {/* Intro */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-lg text-charcoal/70 leading-relaxed max-w-3xl">
            {aboutContent.intro}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-white rounded-lg shadow-premium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              <h3 className="text-xl font-bold text-[#D4AF37] mb-4 font-playfair">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-charcoal/70 text-sm flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-16 pt-16 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-charcoal mb-6 font-playfair">
            {language === 'en' ? 'Languages' : 'Langues'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg">
              <p className="text-charcoal font-semibold">{aboutContent.languages.french}</p>
              <p className="text-charcoal/60 text-sm mt-1">{language === 'en' ? 'Native speaker' : 'Locuteur natif'}</p>
            </div>
            <div className="p-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg">
              <p className="text-charcoal font-semibold">{aboutContent.languages.english}</p>
              <p className="text-charcoal/60 text-sm mt-1">{language === 'en' ? 'Professional working proficiency' : 'Maîtrise professionnelle'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
