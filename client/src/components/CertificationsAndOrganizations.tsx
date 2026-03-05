import { useLanguageContext } from '@/contexts/LanguageContext';
import { portfolioContent } from '@shared/portfolio-content';
import { CheckCircle, Users } from 'lucide-react';

export function CertificationsAndOrganizations() {
  const { language } = useLanguageContext();
  const content = portfolioContent[language];
  const certificationsContent = content.certifications;
  const organizationsContent = content.organizations;

  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container">
        {/* Certifications */}
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            {certificationsContent.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsContent.items.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-premium hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#E5C158] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-charcoal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-charcoal group-hover:text-[#D4AF37] transition-colors font-playfair">
                      {cert.name}
                    </h3>
                    <p className="text-charcoal/60 text-sm mt-2">{cert.issuer}</p>
                    <p className="text-[#D4AF37] text-xs font-semibold mt-2">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div id="organizations" className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            {organizationsContent.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizationsContent.items.map((org, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg shadow-premium hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#E5C158] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-charcoal" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal group-hover:text-[#D4AF37] transition-colors font-playfair">
                    {org.name}
                  </h3>
                </div>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {org.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
