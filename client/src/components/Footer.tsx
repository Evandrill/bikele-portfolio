import { useLanguageContext } from '@/contexts/LanguageContext';
import { portfolioContent } from '@shared/portfolio-content';

export function Footer() {
  const { language } = useLanguageContext();
  const content = portfolioContent[language];
  const footerContent = content.footer;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-off-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#E5C158] flex items-center justify-center">
                <span className="text-charcoal font-bold text-lg">BM</span>
              </div>
              <span className="font-playfair text-xl font-bold">Bikele</span>
            </div>
            <p className="text-off-white/70 text-sm">{footerContent.made}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-off-white mb-4">{language === 'en' ? 'Quick Links' : 'Liens Rapides'}</h4>
            <ul className="space-y-2 text-sm text-off-white/70">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {content.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {content.nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {content.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-off-white mb-4">{language === 'en' ? 'Contact' : 'Contact'}</h4>
            <ul className="space-y-2 text-sm text-off-white/70">
              <li>
                <a href={`mailto:${content.contact.social.email}`} className="hover:text-[#D4AF37] transition-colors">
                  {content.contact.social.email}
                </a>
              </li>
              <li>
                <a href={`tel:${content.contact.social.phone}`} className="hover:text-[#D4AF37] transition-colors">
                  {content.contact.social.phone}
                </a>
              </li>
              <li className="text-off-white/60">{content.hero.location}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-off-white/60">
          <p>{footerContent.copyright.replace('2025', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
}
