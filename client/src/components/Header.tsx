import { useLanguageContext } from '@/contexts/LanguageContext';
import { portfolioContent } from '@shared/portfolio-content';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const { language, changeLanguage } = useLanguageContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = portfolioContent[language];

  const navItems = [
    { key: 'about', label: content.nav.about, id: 'about' },
    { key: 'experience', label: content.nav.experience, id: 'experience' },
    { key: 'projects', label: content.nav.projects, id: 'projects' },
    { key: 'education', label: content.nav.education, id: 'education' },
    { key: 'certifications', label: content.nav.certifications, id: 'certifications' },
    { key: 'organizations', label: content.nav.organizations, id: 'organizations' },
    { key: 'contact', label: content.nav.contact, id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#E5C158] flex items-center justify-center">
            <span className="text-charcoal font-bold text-lg">BM</span>
          </div>
          <span className="hidden sm:inline font-playfair text-xl font-bold text-charcoal">Bikele</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-charcoal/70 hover:text-[#D4AF37] transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Language Selector & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
                language === 'en'
                  ? 'bg-[#D4AF37] text-charcoal'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('fr')}
              className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
                language === 'fr'
                  ? 'bg-[#D4AF37] text-charcoal'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              FR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-2 text-sm font-medium text-charcoal/70 hover:text-[#D4AF37] hover:bg-muted rounded transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
