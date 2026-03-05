import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useLanguage } from "./hooks/useLanguage";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { CertificationsAndOrganizations } from "./components/CertificationsAndOrganizations";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function PortfolioContent() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <CertificationsAndOrganizations />
      <Contact />
      <Footer />
    </>
  );
}

function AppContent() {
  const { language, changeLanguage, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-[#D4AF37] border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-charcoal/60">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider language={language} changeLanguage={changeLanguage}>
      <PortfolioContent />
    </LanguageProvider>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppContent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
