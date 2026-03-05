import { useLanguageContext } from '@/contexts/LanguageContext';
import { portfolioContent } from '@shared/portfolio-content';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { trpc } from '@/lib/trpc';

export function Contact() {
  const { language } = useLanguageContext();
  const content = portfolioContent[language];
  const contactContent = content.contact;
  const socialContent = content.contact.social;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { mutateAsync: sendMessage } = trpc.contact.send.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      alert(contactContent.form.success);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert(contactContent.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-off-white">
      <div className="container">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            {contactContent.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E5C158]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              {contactContent.description}
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {/* Email */}
              <a
                href={`mailto:${socialContent.email}`}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#E5C158] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{language === 'en' ? 'Email' : 'Email'}</p>
                  <p className="text-charcoal/60 text-sm mt-1">{socialContent.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${socialContent.phone}`}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#E5C158] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{language === 'en' ? 'Phone' : 'Téléphone'}</p>
                  <p className="text-charcoal/60 text-sm mt-1">{socialContent.phone}</p>
                </div>
              </a>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-charcoal mb-4">{language === 'en' ? 'Follow me' : 'Me Suivre'}</p>
                <div className="flex gap-4">
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
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-charcoal mb-2">
                  {contactContent.form.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-charcoal mb-2">
                  {contactContent.form.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-semibold text-charcoal mb-2">
                  {contactContent.form.subject}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-charcoal mb-2">
                  {contactContent.form.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#D4AF37] text-charcoal font-semibold rounded-lg hover:bg-[#E5C158] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {isSubmitting ? contactContent.form.sending : contactContent.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
